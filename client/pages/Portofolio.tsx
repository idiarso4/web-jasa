import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { useState } from "react";
import { 
  ExternalLink,
  Calendar,
  Users,
  Trophy,
  Filter,
  Search,
  Globe,
  Smartphone,
  Database
} from "lucide-react";

export default function Portofolio() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const portfolioProjects = [
    {
      id: 1,
      title: "E-Commerce Platform TokoBaju",
      description: "Platform jual beli online dengan sistem pembayaran terintegrasi, manajemen inventory, dan dashboard admin yang komprehensif",
      image: "https://images.pexels.com/photos/29502353/pexels-photo-29502353.jpeg",
      category: "Web Development",
      client: "PT. Fashion Digital",
      year: "2024",
      duration: "4 bulan",
      team: "5 orang",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      features: [
        "Multi-vendor marketplace",
        "Real-time inventory management",
        "Integrated payment gateway",
        "Admin dashboard & analytics",
        "Mobile-responsive design",
        "SEO optimization"
      ],
      results: [
        "300% peningkatan penjualan online",
        "50,000+ produk terdaftar",
        "10,000+ active users",
        "99.9% uptime performance"
      ],
      url: "#"
    },
    {
      id: 2,
      title: "Sistem Manajemen Rumah Sakit MediCare",
      description: "Aplikasi komprehensif untuk manajemen pasien, dokter, jadwal, dan administrasi rumah sakit dengan fitur telemedicine",
      image: "https://images.pexels.com/photos/6823602/pexels-photo-6823602.jpeg",
      category: "Enterprise System",
      client: "RS. Mitra Sehat",
      year: "2023",
      duration: "8 bulan",
      team: "8 orang",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis", "Docker"],
      features: [
        "Patient management system",
        "Doctor scheduling & appointments",
        "Electronic medical records",
        "Billing & insurance integration",
        "Telemedicine platform",
        "Real-time notifications"
      ],
      results: [
        "60% pengurangan waktu administrasi",
        "2,000+ pasien terdaftar",
        "100+ dokter aktif",
        "Digital transformation complete"
      ],
      url: "#"
    },
    {
      id: 3,
      title: "Aplikasi Delivery Food FoodGo",
      description: "Aplikasi mobile untuk layanan pengantaran makanan real-time dengan tracking GPS dan sistem rating",
      image: "https://images.pexels.com/photos/5077068/pexels-photo-5077068.jpeg",
      category: "Mobile App",
      client: "FoodGo Startup",
      year: "2024",
      duration: "5 bulan",
      team: "6 orang",
      technologies: ["React Native", "Firebase", "Stripe", "Google Maps", "Push Notifications"],
      features: [
        "Real-time GPS tracking",
        "Multi-payment methods",
        "Restaurant management panel",
        "Driver assignment system",
        "Rating & review system",
        "Push notifications"
      ],
      results: [
        "10,000+ downloads in first month",
        "500+ restaurants onboarded",
        "1,000+ active drivers",
        "4.8/5 app store rating"
      ],
      url: "#"
    },
    {
      id: 4,
      title: "CRM System SalesForce Pro",
      description: "Customer Relationship Management system untuk perusahaan sales dengan automation dan analytics",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
      category: "Enterprise System",
      client: "PT. Sales Solutions",
      year: "2023",
      duration: "6 bulan",
      team: "7 orang",
      technologies: ["Angular", "Django", "PostgreSQL", "Celery", "Chart.js"],
      features: [
        "Lead management & tracking",
        "Sales pipeline automation",
        "Customer communication hub",
        "Advanced analytics & reports",
        "Email marketing integration",
        "Mobile app companion"
      ],
      results: [
        "40% increase in sales conversion",
        "5,000+ leads managed",
        "50+ sales team users",
        "Real-time sales insights"
      ],
      url: "#"
    }
  ];

  const categories = ["Semua", "Web Development", "Mobile App", "Enterprise System", "UI/UX Design"];

  const filteredProjects = selectedCategory === "Semua" 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === selectedCategory);

  const stats = [
    { number: "50+", label: "Proyek Selesai" },
    { number: "30+", label: "Klien Puas" },
    { number: "5+", label: "Tahun Pengalaman" },
    { number: "100%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-red-50 to-primary/10 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-3 py-1 mb-4 text-xs font-medium text-primary bg-primary/10 rounded-full">
              <Trophy className="w-3 h-3 mr-1" />
              Portofolio Kami
            </div>
            <h1 className="text-xl md:text-3xl font-semibold text-gray-800 mb-3 leading-tight">
              Proyek-Proyek Terbaik
              <span className="text-primary block">yang Telah Kami Kerjakan</span>
            </h1>
            <p className="text-sm md:text-base text-gray-600 mb-5 max-w-3xl mx-auto leading-relaxed">
              Jelajahi koleksi proyek sukses kami yang mencakup berbagai industri dan teknologi. 
              Setiap proyek dirancang dengan solusi inovatif dan hasil yang terukur.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-primary/5 to-orange-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent mb-1">{stat.number}</div>
                <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Filter:</span>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${
                      selectedCategory === category
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Menampilkan {filteredProjects.length} proyek
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-orange-100/50 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="text-xs bg-primary/10 text-primary">
                          {project.category}
                        </Badge>
                        <span className="text-xs text-gray-500">{project.year}</span>
                      </div>
                      <CardTitle className="text-lg font-medium mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-sm text-gray-600">
                        {project.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Project Info */}
                  <div className="grid grid-cols-3 gap-4 py-3 bg-gray-50 rounded-lg px-3">
                    <div className="text-center">
                      <Calendar className="h-4 w-4 text-primary mx-auto mb-1" />
                      <div className="text-xs text-gray-600">Durasi</div>
                      <div className="text-xs font-medium">{project.duration}</div>
                    </div>
                    <div className="text-center">
                      <Users className="h-4 w-4 text-primary mx-auto mb-1" />
                      <div className="text-xs text-gray-600">Tim</div>
                      <div className="text-xs font-medium">{project.team}</div>
                    </div>
                    <div className="text-center">
                      <Globe className="h-4 w-4 text-primary mx-auto mb-1" />
                      <div className="text-xs text-gray-600">Klien</div>
                      <div className="text-xs font-medium">{project.client}</div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-xs font-medium text-gray-700 mb-2">Teknologi:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Results */}
                  <div>
                    <h4 className="text-xs font-medium text-gray-700 mb-2">Hasil Utama:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {project.results.slice(0, 4).map((result, idx) => (
                        <div key={idx} className="text-xs text-gray-600 flex items-center">
                          <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="flex-1 text-xs bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90">
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Lihat Detail
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs border-primary text-primary hover:bg-primary hover:text-white" asChild>
                      <Link to="/kontak">Konsultasi</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
            Ingin Proyek Anda Menjadi yang Berikutnya?
          </h2>
          <p className="text-sm text-primary-foreground/80 mb-5 max-w-2xl mx-auto">
            Mari diskusikan ide Anda dan wujudkan solusi digital yang dapat membawa bisnis Anda ke level selanjutnya
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="default" variant="secondary" className="text-sm px-6 py-2.5 shadow-lg" asChild>
              <Link to="/kontak">
                Mulai Proyek Baru
              </Link>
            </Button>
            <Button size="default" variant="outline" className="text-sm px-6 py-2.5 border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/layanan">Lihat Layanan</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
