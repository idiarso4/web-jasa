import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { 
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Lightbulb,
  Shield,
  Zap,
  ArrowRight,
  Star,
  Code,
  Palette,
  Database
} from "lucide-react";

export default function Tentang() {
  const teamMembers = [
    {
      name: "Ahmad Rizki",
      role: "CEO & Co-Founder",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
      description: "10+ tahun pengalaman dalam teknologi dan bisnis digital",
      expertise: ["Business Strategy", "Product Management", "Digital Transformation"]
    },
    {
      name: "Sari Indah",
      role: "CTO & Co-Founder", 
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
      description: "Expert dalam arsitektur sistem dan pengembangan scalable",
      expertise: ["System Architecture", "Cloud Computing", "DevOps"]
    },
    {
      name: "Budi Santoso",
      role: "Lead Developer",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
      description: "Full-stack developer dengan passion untuk clean code",
      expertise: ["React", "Node.js", "Mobile Development"]
    },
    {
      name: "Maya Kartika",
      role: "UI/UX Designer",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
      description: "Menciptakan pengalaman user yang intuitive dan menarik",
      expertise: ["User Research", "Design Systems", "Prototyping"]
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Kami berkomitmen memberikan hasil terbaik dalam setiap proyek dengan standar kualitas tinggi"
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Kepuasan klien adalah prioritas utama. Kami mendengarkan dan memahami kebutuhan Anda"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Selalu menggunakan teknologi terkini dan pendekatan inovatif untuk solusi terdepan"
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Tim yang dapat diandalkan dengan komunikasi transparan dan delivery tepat waktu"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "50+ Proyek Sukses",
      description: "Telah menyelesaikan berbagai proyek dari startup hingga enterprise"
    },
    {
      icon: Users,
      title: "30+ Klien Puas",
      description: "Klien dari berbagai industri yang memberikan testimoni positif"
    },
    {
      icon: Star,
      title: "4.9/5 Rating",
      description: "Rating tinggi dari klien berdasarkan kualitas dan service"
    },
    {
      icon: Zap,
      title: "99.9% Uptime",
      description: "Aplikasi yang kami bangun memiliki reliability tinggi"
    }
  ];

  const technologies = [
    { category: "Frontend", icon: Code, techs: ["React", "Vue.js", "Angular", "Next.js", "TypeScript"] },
    { category: "Backend", icon: Database, techs: ["Node.js", "Laravel", "Django", "Express", "Fastify"] },
    { category: "Mobile", icon: Zap, techs: ["React Native", "Flutter", "iOS Native", "Android Native"] },
    { category: "Design", icon: Palette, techs: ["Figma", "Adobe XD", "Sketch", "Principle", "Framer"] }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-red-50 to-primary/10 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-3 py-1 mb-4 text-xs font-medium text-primary bg-primary/10 rounded-full">
              <Users className="w-3 h-3 mr-1" />
              Tentang Kami
            </div>
            <h1 className="text-xl md:text-3xl font-semibold text-gray-800 mb-3 leading-tight">
              Tim Passionate yang Mengubah
              <span className="text-primary block">Ide Digital Menjadi Kenyataan</span>
            </h1>
            <p className="text-sm md:text-base text-gray-600 mb-5 max-w-3xl mx-auto leading-relaxed">
              DigitalAgensi adalah partner terpercaya untuk transformasi digital perusahaan Anda. 
              Dengan pengalaman 5+ tahun, kami telah membantu berbagai bisnis mencapai tujuan digitalnya.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Mission */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-sm bg-gradient-to-br from-primary/5 to-orange-50">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Eye className="h-6 w-6 text-primary mr-3" />
                  <h2 className="text-lg font-medium">Visi Kami</h2>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Menjadi agensi digital terdepan di Indonesia yang menghadirkan solusi teknologi 
                  inovatif dan berkualitas tinggi untuk membantu bisnis bertransformasi dan berkembang 
                  di era digital.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-gradient-to-br from-orange-50 to-primary/5">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Target className="h-6 w-6 text-primary mr-3" />
                  <h2 className="text-lg font-medium">Misi Kami</h2>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Memberikan solusi digital terbaik melalui teknologi terkini, desain yang user-centric, 
                  dan layanan yang excellent untuk membantu klien mencapai tujuan bisnis mereka dengan 
                  efektif dan efisien.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gradient-to-br from-orange-50/50 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 mb-3 text-xs font-medium text-primary bg-primary/10 rounded-full">Nilai-Nilai Kami</div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              Prinsip yang Memandu Setiap Langkah Kami
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-orange-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium text-base mb-2">{value.title}</h3>
                  <p className="text-xs text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 mb-3 text-xs font-medium text-primary bg-primary/10 rounded-full">Tim Kami</div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              Orang-Orang Hebat di Balik Kesuksesan
            </h2>
            <p className="text-sm text-gray-600 max-w-3xl mx-auto">
              Tim berpengalaman dengan passion tinggi untuk menciptakan solusi digital terbaik
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-orange-100/50 rounded-full mx-auto mb-4 overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-medium text-base mb-1">{member.name}</h3>
                  <p className="text-xs text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-xs text-gray-600 mb-3">{member.description}</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.expertise.slice(0, 2).map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gradient-to-br from-orange-50/50 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 mb-3 text-xs font-medium text-primary bg-primary/10 rounded-full">Pencapaian</div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              Hasil yang Telah Kami Capai
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center border-0 shadow-sm">
                <CardContent className="pt-6">
                  <achievement.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-medium text-base mb-2">{achievement.title}</h3>
                  <p className="text-xs text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 mb-3 text-xs font-medium text-primary bg-primary/10 rounded-full">Teknologi</div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              Stack Teknologi yang Kami Kuasai
            </h2>
            <p className="text-sm text-gray-600 max-w-3xl mx-auto">
              Menggunakan teknologi terkini dan terbukti untuk membangun solusi yang robust dan scalable
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-orange-200 rounded-lg flex items-center justify-center">
                      <tech.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-base font-medium">{tech.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {tech.techs.map((technology) => (
                      <Badge key={technology} variant="outline" className="text-xs">
                        {technology}
                      </Badge>
                    ))}
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
            Siap Berkolaborasi dengan Tim Kami?
          </h2>
          <p className="text-sm text-primary-foreground/80 mb-5 max-w-2xl mx-auto">
            Mari diskusikan bagaimana kami dapat membantu mewujudkan visi digital perusahaan Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="default" variant="secondary" className="text-sm px-6 py-2.5 shadow-lg" asChild>
              <Link to="/kontak">
                Mulai Diskusi
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="default" variant="outline" className="text-sm px-6 py-2.5 border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/portofolio">Lihat Portofolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
