import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  isAuthenticated?: boolean;
}

export default function Header({ isAuthenticated = false }: HeaderProps) {
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
    { label: "Akun", href: "/akun" },
  ];

  const navItems = isAuthenticated ? clientNavItems : publicNavItems;

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DA</span>
            </div>
            <span className="text-xl font-bold text-gray-900">DigitalAgensi</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-gray-600 hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Auth Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {!isAuthenticated ? (
              <Button asChild className="hidden sm:inline-flex">
                <Link to="/login">Login Klien</Link>
              </Button>
            ) : (
              <Button variant="outline" asChild>
                <Link to="/logout">Keluar</Link>
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
                  className="px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors duration-200"
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
                  <Button className="w-full">Login Klien</Button>
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
