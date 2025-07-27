import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  Calendar,
  CheckCircle
} from "lucide-react";

export default function Kontak() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@digitalagensi.com",
      description: "Kirim email untuk inquiry umum"
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+62 812-3456-7890",
      description: "Chat langsung untuk konsultasi cepat"
    },
    {
      icon: MapPin,
      title: "Alamat",
      value: "Jakarta Selatan, Indonesia",
      description: "Kantor pusat kami"
    },
    {
      icon: Clock,
      title: "Jam Kerja",
      value: "Senin - Jumat, 09:00 - 18:00",
      description: "Waktu respons terbaik"
    }
  ];

  const serviceOptions = [
    "Aplikasi Mobile (iOS/Android)",
    "Aplikasi Web & Website",
    "Sistem Informasi Enterprise",
    "Desain UI/UX",
    "Konsultasi Teknologi",
    "Pemeliharaan & Support"
  ];

  const budgetRanges = [
    "< Rp 10 juta",
    "Rp 10 - 25 juta", 
    "Rp 25 - 50 juta",
    "Rp 50 - 100 juta",
    "> Rp 100 juta",
    "Belum ditentukan"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-red-50 to-primary/10 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-3 py-1 mb-4 text-xs font-medium text-primary bg-primary/10 rounded-full">
              <MessageCircle className="w-3 h-3 mr-1" />
              Hubungi Kami
            </div>
            <h1 className="text-xl md:text-3xl font-semibold text-gray-800 mb-3 leading-tight">
              Wujudkan Ide Digital Anda
              <span className="text-primary block">Bersama Tim Ahli Kami</span>
            </h1>
            <p className="text-sm md:text-base text-gray-600 mb-5 max-w-3xl mx-auto leading-relaxed">
              Konsultasi gratis untuk memahami kebutuhan proyek Anda. Tim kami siap membantu 
              mewujudkan solusi digital yang tepat untuk bisnis Anda.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-medium">Formulir Konsultasi</CardTitle>
                  <CardDescription className="text-sm">
                    Isi formulir di bawah ini dan tim kami akan menghubungi Anda dalam 24 jam
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Pesan Terkirim!</h3>
                      <p className="text-sm text-gray-600">
                        Terima kasih atas minat Anda. Tim kami akan menghubungi Anda segera.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-xs font-medium">Nama Lengkap *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            placeholder="Masukkan nama lengkap"
                            required
                            className="text-sm"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-xs font-medium">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            placeholder="email@perusahaan.com"
                            required
                            className="text-sm"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone" className="text-xs font-medium">Nomor WhatsApp *</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            placeholder="+62 812-3456-7890"
                            required
                            className="text-sm"
                          />
                        </div>
                        <div>
                          <Label htmlFor="company" className="text-xs font-medium">Nama Perusahaan</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => handleChange("company", e.target.value)}
                            placeholder="PT. Nama Perusahaan"
                            className="text-sm"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label className="text-xs font-medium">Jenis Layanan *</Label>
                          <Select onValueChange={(value) => handleChange("service", value)} required>
                            <SelectTrigger className="text-sm">
                              <SelectValue placeholder="Pilih layanan yang dibutuhkan" />
                            </SelectTrigger>
                            <SelectContent>
                              {serviceOptions.map((service) => (
                                <SelectItem key={service} value={service} className="text-sm">
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label className="text-xs font-medium">Estimasi Budget</Label>
                          <Select onValueChange={(value) => handleChange("budget", value)}>
                            <SelectTrigger className="text-sm">
                              <SelectValue placeholder="Pilih range budget" />
                            </SelectTrigger>
                            <SelectContent>
                              {budgetRanges.map((budget) => (
                                <SelectItem key={budget} value={budget} className="text-sm">
                                  {budget}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-xs font-medium">Deskripsi Proyek *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                          placeholder="Ceritakan tentang proyek Anda, tujuan bisnis, fitur yang diinginkan, dan detail lainnya..."
                          required
                          rows={4}
                          className="text-sm"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full text-sm bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Kirim Pesan & Jadwalkan Konsultasi
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-medium">Informasi Kontak</CardTitle>
                  <CardDescription className="text-sm">
                    Berbagai cara untuk menghubungi tim kami
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-orange-200 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{info.title}</h4>
                        <p className="text-sm text-primary font-medium">{info.value}</p>
                        <p className="text-xs text-gray-600">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm bg-gradient-to-br from-primary/5 to-orange-50">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-medium text-sm mb-2">Konsultasi Gratis</h3>
                    <p className="text-xs text-gray-600 mb-4">
                      Jadwalkan meeting online untuk diskusi mendalam tentang proyek Anda
                    </p>
                    <Button size="sm" variant="outline" className="text-xs border-primary text-primary hover:bg-primary hover:text-white">
                      Jadwalkan Meeting
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <h3 className="font-medium text-sm mb-3">Proses Selanjutnya</h3>
                  <div className="space-y-3">
                    {[
                      "Tim kami akan menghubungi dalam 24 jam",
                      "Analisis kebutuhan dan diskusi solusi",
                      "Proposal teknis dan komersial",
                      "Kick-off meeting dan mulai pengembangan"
                    ].map((step, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium text-primary">{index + 1}</span>
                        </div>
                        <p className="text-xs text-gray-600">{step}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
