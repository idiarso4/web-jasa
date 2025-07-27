import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import {
  Smartphone,
  Globe,
  Database,
  Palette,
  Shield,
  CheckCircle,
  ArrowRight,
  Code,
  Layers,
  Zap,
} from "lucide-react";

export default function Layanan() {
  const services = [
    {
      icon: Smartphone,
      title: "Pengembangan Aplikasi Mobile",
      description: "Aplikasi iOS & Android yang responsif dan user-friendly",
      features: [
        "Aplikasi Native iOS & Android",
        "Cross-platform dengan React Native",
        "UI/UX Design yang Menarik",
        "Integrasi API & Database",
        "Push Notifications",
        "App Store Optimization",
      ],
      price: "Mulai dari Rp 25.000.000",
      timeline: "3-6 bulan",
    },
    {
      icon: Globe,
      title: "Pengembangan Aplikasi Web",
      description: "Website kustom, PWA, dan sistem berbasis web yang modern",
      features: [
        "Website Responsif & Modern",
        "Progressive Web App (PWA)",
        "E-commerce Platform",
        "Content Management System",
        "SEO Optimization",
        "Performance Optimization",
      ],
      price: "Mulai dari Rp 15.000.000",
      timeline: "2-4 bulan",
    },
    {
      icon: Database,
      title: "Sistem Informasi Kustom",
      description:
        "ERP, CRM, dan aplikasi internal perusahaan yang terintegrasi",
      features: [
        "Enterprise Resource Planning",
        "Customer Relationship Management",
        "Sistem Inventory & Warehouse",
        "HR Management System",
        "Financial Management",
        "Business Intelligence & Reports",
      ],
      price: "Mulai dari Rp 50.000.000",
      timeline: "4-8 bulan",
    },
    {
      icon: Palette,
      title: "Desain UI/UX",
      description:
        "Desain antarmuka yang menarik dari wireframe hingga prototipe",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design & Branding",
        "Usability Testing",
        "Design System Creation",
        "Interactive Prototypes",
      ],
      price: "Mulai dari Rp 8.000.000",
      timeline: "1-2 bulan",
    },
    {
      icon: Shield,
      title: "Dukungan & Pemeliharaan",
      description:
        "Layanan dukungan berkelanjutan setelah aplikasi diluncurkan",
      features: [
        "24/7 Technical Support",
        "Bug Fixes & Updates",
        "Security Monitoring",
        "Performance Optimization",
        "Backup & Recovery",
        "Feature Enhancements",
      ],
      price: "Mulai dari Rp 2.000.000/bulan",
      timeline: "Ongoing",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Konsultasi & Analisis",
      description: "Memahami kebutuhan bisnis dan goals Anda",
    },
    {
      step: "02",
      title: "Planning & Design",
      description: "Merancang solusi dan desain yang tepat",
    },
    {
      step: "03",
      title: "Development",
      description: "Mengembangkan aplikasi dengan teknologi terkini",
    },
    {
      step: "04",
      title: "Testing & QA",
      description: "Pengujian menyeluruh untuk memastikan kualitas",
    },
    {
      step: "05",
      title: "Deployment",
      description: "Peluncuran aplikasi dan go-live",
    },
    {
      step: "06",
      title: "Support & Maintenance",
      description: "Dukungan berkelanjutan dan pemeliharaan",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-red-50 to-primary/10 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-3 py-1 mb-4 text-xs font-medium text-primary bg-primary/10 rounded-full">
              <Code className="w-3 h-3 mr-1" />
              Layanan Profesional
            </div>
            <h1 className="text-xl md:text-3xl font-semibold text-gray-800 mb-3 leading-tight">
              Solusi Digital Komprehensif
              <span className="text-primary block">
                untuk Setiap Kebutuhan Bisnis
              </span>
            </h1>
            <p className="text-sm md:text-base text-gray-600 mb-5 max-w-3xl mx-auto leading-relaxed">
              Kami menyediakan layanan pengembangan aplikasi end-to-end dengan
              teknologi terkini dan metodologi yang terbukti efektif untuk
              membantu bisnis Anda berkembang.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="h-full border-0 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-orange-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg font-medium mb-2">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-600">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm mb-3 text-gray-800">
                      Fitur Yang Termasuk:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-xs text-gray-600"
                        >
                          <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">Harga:</span>
                      <span className="text-sm font-medium text-primary">
                        {service.price}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">Timeline:</span>
                      <span className="text-sm font-medium text-gray-700">
                        {service.timeline}
                      </span>
                    </div>
                  </div>
                  <Button
                    className="w-full text-sm bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90"
                    asChild
                  >
                    <Link to="/kontak">
                      Konsultasi Gratis
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50/50 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 mb-3 text-xs font-medium text-primary bg-primary/10 rounded-full">
              <Layers className="w-3 h-3 mr-1" />
              Proses Kami
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              Metodologi Pengembangan yang Teruji
            </h2>
            <p className="text-sm text-gray-600 max-w-3xl mx-auto">
              Proses pengembangan yang terstruktur dan transparan untuk
              memastikan hasil terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-semibold text-sm">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-medium text-base mb-2">{step.title}</h3>
                  <p className="text-xs text-gray-600">{step.description}</p>
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
            Siap Memulai Proyek Anda?
          </h2>
          <p className="text-sm text-primary-foreground/80 mb-5 max-w-2xl mx-auto">
            Diskusikan kebutuhan proyek Anda dengan tim ahli kami dan dapatkan
            konsultasi gratis
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="default"
              variant="secondary"
              className="text-sm px-6 py-2.5 shadow-lg"
              asChild
            >
              <Link to="/kontak">
                <Zap className="mr-2 h-4 w-4" />
                Konsultasi Gratis Sekarang
              </Link>
            </Button>
            <Button
              size="default"
              variant="outline"
              className="text-sm px-6 py-2.5 border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <Link to="/portofolio">Lihat Portofolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
