import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Header from "@/components/Header";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  User,
  Phone,
  Building,
  LogIn,
  UserPlus,
  AlertCircle,
  Loader2,
  Eye,
  EyeOff,
} from "lucide-react";
import { LoginRequest, RegisterRequest, UserRole } from "@shared/auth";

export default function Login() {
  const { login, register, loading } = useAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Login form state
  const [loginData, setLoginData] = useState<LoginRequest>({
    email: "",
    password: "",
  });

  // Register form state
  const [registerData, setRegisterData] = useState<RegisterRequest>({
    name: "",
    email: "",
    password: "",
    role: "client",
    company: "",
    phone: "",
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!loginData.email || !loginData.password) {
      setError("Semua field harus diisi");
      return;
    }

    const result = await login(loginData);

    if (result.success && result.user) {
      setSuccess("Login berhasil! Mengalihkan...");
      setTimeout(() => {
        // Redirect based on role
        if (result.user?.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/dashboard");
        }
      }, 1000);
    } else {
      setError(result.message || "Login gagal");
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!registerData.name || !registerData.email || !registerData.password) {
      setError("Semua field wajib harus diisi");
      return;
    }

    if (registerData.password.length < 6) {
      setError("Password minimal 6 karakter");
      return;
    }

    const result = await register(registerData);

    if (result.success && result.user) {
      setSuccess("Registrasi berhasil! Mengalihkan...");
      setTimeout(() => {
        // Redirect based on role
        if (result.user?.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/dashboard");
        }
      }, 1000);
    } else {
      setError(result.message || "Registrasi gagal");
    }
  };

  const demoCredentials = [
    {
      email: "admin@digitalagensi.com",
      password: "password123",
      role: "Admin",
    },
    {
      email: "client@tokobaju.com",
      password: "password123",
      role: "Client TokoBaju",
    },
    {
      email: "client@mediccare.com",
      password: "password123",
      role: "Client MediCare",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-primary/10">
      <Header />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <LogIn className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">
              Selamat Datang
            </h1>
            <p className="text-sm text-gray-600">
              Masuk ke akun Anda atau buat akun baru
            </p>
          </div>

          <Tabs defaultValue="login" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Masuk</TabsTrigger>
              <TabsTrigger value="register">Daftar</TabsTrigger>
            </TabsList>

            {/* Login Tab */}
            <TabsContent value="login">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg font-medium">
                    Masuk ke Akun
                  </CardTitle>
                  <CardDescription className="text-sm">
                    Masukkan email dan password Anda
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <Label
                        htmlFor="login-email"
                        className="text-xs font-medium"
                      >
                        Email
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="login-email"
                          type="email"
                          placeholder="email@example.com"
                          className="pl-10 text-sm"
                          value={loginData.email}
                          onChange={(e) =>
                            setLoginData({
                              ...loginData,
                              email: e.target.value,
                            })
                          }
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="login-password"
                        className="text-xs font-medium"
                      >
                        Password
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="login-password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Masukkan password"
                          className="pl-10 pr-10 text-sm"
                          value={loginData.password}
                          onChange={(e) =>
                            setLoginData({
                              ...loginData,
                              password: e.target.value,
                            })
                          }
                          disabled={loading}
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    {error && (
                      <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription className="text-xs">
                          {error}
                        </AlertDescription>
                      </Alert>
                    )}

                    {success && (
                      <Alert className="border-green-200 bg-green-50">
                        <AlertCircle className="h-4 w-4 text-green-600" />
                        <AlertDescription className="text-xs text-green-700">
                          {success}
                        </AlertDescription>
                      </Alert>
                    )}

                    <Button
                      type="submit"
                      className="w-full text-sm bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Masuk...
                        </>
                      ) : (
                        <>
                          <LogIn className="mr-2 h-4 w-4" />
                          Masuk
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Register Tab */}
            <TabsContent value="register">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg font-medium">
                    Buat Akun Baru
                  </CardTitle>
                  <CardDescription className="text-sm">
                    Daftar untuk menggunakan layanan kami
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                      <Label
                        htmlFor="register-name"
                        className="text-xs font-medium"
                      >
                        Nama Lengkap *
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="register-name"
                          placeholder="Nama lengkap"
                          className="pl-10 text-sm"
                          value={registerData.name}
                          onChange={(e) =>
                            setRegisterData({
                              ...registerData,
                              name: e.target.value,
                            })
                          }
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="register-email"
                        className="text-xs font-medium"
                      >
                        Email *
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="register-email"
                          type="email"
                          placeholder="email@example.com"
                          className="pl-10 text-sm"
                          value={registerData.email}
                          onChange={(e) =>
                            setRegisterData({
                              ...registerData,
                              email: e.target.value,
                            })
                          }
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="register-password"
                        className="text-xs font-medium"
                      >
                        Password *
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="register-password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Minimal 6 karakter"
                          className="pl-10 pr-10 text-sm"
                          value={registerData.password}
                          onChange={(e) =>
                            setRegisterData({
                              ...registerData,
                              password: e.target.value,
                            })
                          }
                          disabled={loading}
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div>
                      <Label className="text-xs font-medium">Role *</Label>
                      <Select
                        value={registerData.role}
                        onValueChange={(value: UserRole) =>
                          setRegisterData({ ...registerData, role: value })
                        }
                        disabled={loading}
                      >
                        <SelectTrigger className="text-sm">
                          <SelectValue placeholder="Pilih role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="client" className="text-sm">
                            Client - Membutuhkan jasa pengembangan
                          </SelectItem>
                          <SelectItem value="admin" className="text-sm">
                            Admin - Tim DigitalAgensi
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label
                        htmlFor="register-company"
                        className="text-xs font-medium"
                      >
                        Nama Perusahaan
                      </Label>
                      <div className="relative">
                        <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="register-company"
                          placeholder="PT. Nama Perusahaan"
                          className="pl-10 text-sm"
                          value={registerData.company}
                          onChange={(e) =>
                            setRegisterData({
                              ...registerData,
                              company: e.target.value,
                            })
                          }
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="register-phone"
                        className="text-xs font-medium"
                      >
                        Nomor Telepon
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="register-phone"
                          placeholder="+62 812-3456-7890"
                          className="pl-10 text-sm"
                          value={registerData.phone}
                          onChange={(e) =>
                            setRegisterData({
                              ...registerData,
                              phone: e.target.value,
                            })
                          }
                          disabled={loading}
                        />
                      </div>
                    </div>

                    {error && (
                      <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription className="text-xs">
                          {error}
                        </AlertDescription>
                      </Alert>
                    )}

                    {success && (
                      <Alert className="border-green-200 bg-green-50">
                        <AlertCircle className="h-4 w-4 text-green-600" />
                        <AlertDescription className="text-xs text-green-700">
                          {success}
                        </AlertDescription>
                      </Alert>
                    )}

                    <Button
                      type="submit"
                      className="w-full text-sm bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Mendaftar...
                        </>
                      ) : (
                        <>
                          <UserPlus className="mr-2 h-4 w-4" />
                          Daftar
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Demo Credentials */}
          <Card className="mt-6 border-0 shadow-sm bg-gradient-to-br from-primary/5 to-orange-50">
            <CardContent className="pt-6">
              <h3 className="font-medium text-sm mb-3 text-center">
                Demo Credentials
              </h3>
              <div className="space-y-2">
                {demoCredentials.map((cred, index) => (
                  <div key={index} className="text-xs bg-white rounded p-2">
                    <div className="font-medium text-primary">{cred.role}</div>
                    <div className="text-gray-600">Email: {cred.email}</div>
                    <div className="text-gray-600">
                      Password: {cred.password}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
