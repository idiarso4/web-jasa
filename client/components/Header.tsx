import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X, User, LogOut, Settings, MessageCircle } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export default function Header() {
  const { user, logout, isAuthenticated, isAdmin, isClient } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const publicNavItems = [
    { label: "Beranda", href: "/" },
    { label: "Layanan", href: "/layanan" },
    { label: "Portofolio", href: "/portofolio" },
    { label: "Proses Kami", href: "/proses" },
    { label: "Tentang Kami", href: "/tentang" },
    { label: "Kontak", href: "/kontak" },
  ];

  const clientNavItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Proyek Saya", href: "/proyek" },
    { label: "Komunikasi", href: "/komunikasi" },
    { label: "Dokumen", href: "/dokumen" },
    { label: "Tagihan", href: "/tagihan" },
  ];

  const adminNavItems = [
    { label: "Dashboard", href: "/admin" },
    { label: "Kelola Proyek", href: "/admin/projects" },
    { label: "Kelola Client", href: "/admin/clients" },
    { label: "Komunikasi", href: "/admin/chat" },
    { label: "Laporan", href: "/admin/reports" },
  ];

  const getNavItems = () => {
    if (!isAuthenticated) return publicNavItems;
    if (isAdmin) return adminNavItems;
    if (isClient) return clientNavItems;
    return publicNavItems;
  };

  const navItems = getNavItems();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const getUserInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold text-sm">DA</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">DigitalAgensi</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-gray-600 hover:text-primary transition-colors duration-200 font-normal text-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Auth Section & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {isAuthenticated && user ? (
              <>
                {/* Chat Icon for authenticated users */}
                <Button
                  size="sm"
                  variant="ghost"
                  className="hidden sm:inline-flex"
                  asChild
                >
                  <Link to={isAdmin ? "/admin/chat" : "/komunikasi"}>
                    <MessageCircle className="h-4 w-4" />
                  </Link>
                </Button>

                {/* User Menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback className="text-xs bg-primary text-white">
                          {getUserInitials(user.name)}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{user.name}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                          {user.email}
                        </p>
                        <p className="text-xs leading-none text-primary font-medium">
                          {user.role === 'admin' ? 'Admin' : 'Client'}
                          {user.company && ` - ${user.company}`}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/akun" className="cursor-pointer">
                        <User className="mr-2 h-4 w-4" />
                        <span>Akun Saya</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={isAdmin ? "/admin/settings" : "/settings"} className="cursor-pointer">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Pengaturan</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Keluar</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <Button asChild className="hidden sm:inline-flex text-sm">
                <Link to="/login">Login</Link>
              </Button>
            )}

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors duration-200 text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {!isAuthenticated && (
                <Link
                  to="/login"
                  className="mx-4 mt-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button className="w-full text-sm">Login</Button>
                </Link>
              )}
              
              {isAuthenticated && (
                <div className="mx-4 mt-2 pt-2 border-t">
                  <div className="flex items-center space-x-3 mb-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user?.avatar} alt={user?.name} />
                      <AvatarFallback className="text-xs bg-primary text-white">
                        {user ? getUserInitials(user.name) : 'U'}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{user?.name}</p>
                      <p className="text-xs text-gray-500">{user?.role === 'admin' ? 'Admin' : 'Client'}</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full text-sm"
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Keluar
                  </Button>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
