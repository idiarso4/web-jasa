import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { 
  Smartphone, 
  Globe, 
  Database, 
  Palette, 
  Shield, 
  Star,
  ArrowRight,
  CheckCircle,
  Users,
  Trophy,
  Zap
} from "lucide-react";

export default function Index() {
  const services = [
    {
      icon: Smartphone,
      title: "Aplikasi Mobile",
      description: "Pengembangan aplikasi iOS & Android yang responsif dan user-friendly"
    },
    {
      icon: Globe,
      title: "Aplikasi Web",
      description: "Website kustom, PWA, dan sistem berbasis web yang modern"
    },
    {
      icon: Database,
      title: "Sistem Informasi",
      description: "ERP, CRM, dan aplikasi internal perusahaan yang terintegrasi"
    },
    {
      icon: Palette,
      title: "Desain UI/UX",
      description: "Desain antarmuka yang menarik dari wireframe hingga prototipe"
    },
    {
      icon: Shield,
      title: "Dukungan & Pemeliharaan",
      description: "Layanan dukungan berkelanjutan setelah aplikasi diluncurkan"
    }
  ];

  const portfolioHighlights = [
    {
      title: "E-Commerce Platform",
      description: "Platform jual beli online dengan sistem pembayaran terintegrasi",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "PostgreSQL"]
    },
    {
      title: "Sistem Manajemen Rumah Sakit",
      description: "Aplikasi komprehensif untuk manajemen pasien dan administrasi",
      image: "/placeholder.svg",
      tags: ["Vue.js", "Laravel", "MySQL"]
    },
    {
      title: "Aplikasi Delivery Food",
      description: "Aplikasi mobile untuk layanan pengantaran makanan real-time",
      image: "/placeholder.svg",
      tags: ["React Native", "Firebase", "Stripe"]
    }
  ];

  const testimonials = [
    {
      name: "Budi Santoso",
      company: "PT. Teknologi Maju",
      message: "Tim DigitalAgensi sangat profesional dan menghasilkan aplikasi yang melampaui ekspektasi kami.",
      rating: 5
    },
    {
      name: "Sari Indah",
      company: "Startup InnovateCorp",
      message: "Proses pengembangan yang transparan dan hasil akhir yang luar biasa. Sangat direkomendasikan!",
      rating: 5
    },
    {
      name: "Ahmad Rizki",
      company: "CV. Digital Solutions",
      message: "Komunikasi yang baik, tepat waktu, dan kualitas kode yang tinggi. Partner yang sempurna!",
      rating: 5
    }
  ];

  const stats = [
    { number: "50+", label: "Proyek Selesai" },
    { number: "30+", label: "Klien Puas" },
    { number: "5+", label: "Tahun Pengalaman" },
    { number: "24/7", label: "Dukungan" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-red-50 to-primary/10 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-3 py-1 mb-4 text-xs font-medium text-primary bg-primary/10 rounded-full">
              <Zap className="w-3 h-3 mr-1" />
              Partner Digital Terpercaya
            </div>
            <h1 className="text-xl md:text-3xl font-semibold text-gray-800 mb-3 leading-tight">
              Mewujudkan Ide Digital Anda
              <span className="text-primary block">Menjadi Aplikasi Berkualitas Tinggi</span>
            </h1>
            <p className="text-sm md:text-base text-gray-600 mb-5 max-w-3xl mx-auto leading-relaxed">
              Kami mengembangkan aplikasi mobile dan web yang inovatif, user-friendly, dan sesuai dengan kebutuhan bisnis Anda. 
              Dari konsep hingga peluncuran, kami siap menjadi partner teknologi yang dapat diandalkan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="default" className="text-sm px-6 py-2.5 bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90 shadow-lg" asChild>
                <Link to="/kontak">
                  Konsultasi Gratis Sekarang
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="default" variant="outline" className="text-sm px-6 py-2.5 border-primary text-primary hover:bg-primary hover:text-white" asChild>
                <Link to="/portofolio">Lihat Proyek Kami</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-primary/5 to-orange-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent mb-1">{stat.number}</div>
                <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 mb-3 text-xs font-medium text-primary bg-primary/10 rounded-full">Layanan Kami</div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              Solusi Digital Komprehensif
            </h2>
            <p className="text-sm text-gray-600 max-w-3xl mx-auto">
              Kami menyediakan layanan pengembangan aplikasi end-to-end dengan teknologi terkini 
              dan metodologi yang terbukti efektif.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-medium">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">
              <Trophy className="w-4 h-4 mr-2" />
              Portofolio Unggulan
            </Badge>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              Proyek-Proyek Terbaik Kami
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Berikut adalah beberapa proyek yang telah kami kerjakan dengan hasil yang memuaskan klien.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioHighlights.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="default" asChild>
              <Link to="/portofolio">
                Lihat Semua Proyek
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">
              <Users className="w-4 h-4 mr-2" />
              Testimoni Klien
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Apa Kata Klien Kami
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Kepuasan klien adalah prioritas utama kami. Berikut testimoni dari klien yang telah bekerja sama dengan kami.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mb-4 italic">"{testimonial.message}"</p>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Siap Memulai Proyek Digital Anda?
          </h2>
          <p className="text-base text-primary-foreground/80 mb-6 max-w-3xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan wujudkan ide digital Anda bersama tim ahli kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="default" variant="secondary" className="text-sm px-6 py-3" asChild>
              <Link to="/kontak">
                <CheckCircle className="mr-2 h-5 w-5" />
                Mulai Konsultasi Gratis
              </Link>
            </Button>
            <Button size="default" variant="outline" className="text-sm px-6 py-3 border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/tentang">Pelajari Lebih Lanjut</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">DA</span>
                </div>
                <span className="text-xl font-bold">DigitalAgensi</span>
              </div>
              <p className="text-gray-400 mb-4">
                Partner digital terpercaya untuk mengembangkan aplikasi mobile dan web berkualitas tinggi 
                yang sesuai dengan kebutuhan bisnis Anda.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Layanan</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/layanan" className="hover:text-white transition-colors">Aplikasi Mobile</Link></li>
                <li><Link to="/layanan" className="hover:text-white transition-colors">Aplikasi Web</Link></li>
                <li><Link to="/layanan" className="hover:text-white transition-colors">Sistem Informasi</Link></li>
                <li><Link to="/layanan" className="hover:text-white transition-colors">Desain UI/UX</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Perusahaan</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/tentang" className="hover:text-white transition-colors">Tentang Kami</Link></li>
                <li><Link to="/portofolio" className="hover:text-white transition-colors">Portofolio</Link></li>
                <li><Link to="/proses" className="hover:text-white transition-colors">Proses Kami</Link></li>
                <li><Link to="/kontak" className="hover:text-white transition-colors">Kontak</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DigitalAgensi. Semua hak cipta dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
