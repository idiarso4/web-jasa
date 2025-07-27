import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { 
  Users, 
  FolderOpen, 
  MessageSquare, 
  TrendingUp,
  Calendar,
  DollarSign,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  Eye,
  Edit
} from "lucide-react";

export default function Admin() {
  const { user } = useAuth();

  const stats = [
    {
      title: "Total Klien",
      value: "32",
      change: "+3 bulan ini",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Proyek Aktif",
      value: "8",
      change: "2 deadline minggu ini",
      icon: FolderOpen,
      color: "text-orange-600"
    },
    {
      title: "Pesan Belum Dibaca",
      value: "24",
      change: "12 dari klien baru",
      icon: MessageSquare,
      color: "text-green-600"
    },
    {
      title: "Revenue Bulan Ini",
      value: "Rp 125M",
      change: "+15% dari bulan lalu",
      icon: DollarSign,
      color: "text-purple-600"
    }
  ];

  const recentProjects = [
    {
      id: "1",
      name: "E-Commerce TokoBaju",
      client: "PT. Fashion Digital",
      status: "development",
      progress: 75,
      deadline: "2024-03-15",
      budget: "Rp 35.000.000"
    },
    {
      id: "2", 
      name: "Sistem MediCare",
      client: "RS. Mitra Sehat",
      status: "testing",
      progress: 90,
      deadline: "2024-02-28",
      budget: "Rp 80.000.000"
    },
    {
      id: "3",
      name: "FoodGo Delivery",
      client: "FoodGo Startup",
      status: "planning",
      progress: 25,
      deadline: "2024-04-20",
      budget: "Rp 45.000.000"
    }
  ];

  const recentMessages = [
    {
      id: "1",
      from: "Budi Santoso",
      company: "PT. Fashion Digital",
      message: "Kapan bisa review prototype yang baru?",
      time: "5 menit yang lalu",
      unread: true
    },
    {
      id: "2",
      from: "Dr. Sari Indah", 
      company: "RS. Mitra Sehat",
      message: "Ada bug di modul appointment booking",
      time: "1 jam yang lalu",
      unread: true
    },
    {
      id: "3",
      from: "Ahmad Rizki",
      company: "SalesForce Pro",
      message: "Terima kasih untuk update mingguan!",
      time: "3 jam yang lalu",
      unread: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'planning': return 'bg-yellow-100 text-yellow-800';
      case 'development': return 'bg-blue-100 text-blue-800';
      case 'testing': return 'bg-orange-100 text-orange-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'planning': return 'Perencanaan';
      case 'development': return 'Pengembangan';
      case 'testing': return 'Pengujian';
      case 'completed': return 'Selesai';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Selamat datang, {user?.name}!
          </h1>
          <p className="text-sm text-gray-600">
            Dashboard admin untuk mengelola proyek dan klien DigitalAgensi
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-semibold text-gray-900 mt-1">{stat.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-gray-50`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Projects */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-lg font-medium">Proyek Terbaru</CardTitle>
                  <CardDescription className="text-sm">
                    Kelola dan pantau progress proyek aktif
                  </CardDescription>
                </div>
                <Button size="sm" className="text-xs" asChild>
                  <Link to="/admin/projects">
                    <Plus className="mr-1 h-3 w-3" />
                    Proyek Baru
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentProjects.map((project) => (
                    <div key={project.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-medium text-sm text-gray-900">{project.name}</h3>
                          <p className="text-xs text-gray-600">{project.client}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={`text-xs ${getStatusColor(project.status)}`}>
                            {getStatusText(project.status)}
                          </Badge>
                          <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                            <Edit className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-medium">{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                        
                        <div className="flex justify-between text-xs pt-2">
                          <div className="flex items-center text-gray-600">
                            <Calendar className="mr-1 h-3 w-3" />
                            Deadline: {new Date(project.deadline).toLocaleDateString('id-ID')}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <DollarSign className="mr-1 h-3 w-3" />
                            {project.budget}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t">
                  <Button variant="outline" size="sm" className="w-full text-xs" asChild>
                    <Link to="/admin/projects">
                      Lihat Semua Proyek
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Messages */}
          <div>
            <Card className="border-0 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-lg font-medium">Pesan Terbaru</CardTitle>
                  <CardDescription className="text-sm">
                    Komunikasi dengan klien
                  </CardDescription>
                </div>
                <Button size="sm" variant="outline" className="text-xs" asChild>
                  <Link to="/admin/chat">
                    <MessageSquare className="mr-1 h-3 w-3" />
                    Chat
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentMessages.map((message) => (
                    <div key={message.id} className={`p-3 rounded-lg border transition-colors hover:bg-gray-50 ${message.unread ? 'bg-primary/5 border-primary/20' : 'bg-white'}`}>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-medium text-sm text-gray-900">{message.from}</p>
                          <p className="text-xs text-gray-600">{message.company}</p>
                        </div>
                        {message.unread && (
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                        )}
                      </div>
                      <p className="text-xs text-gray-700 mb-2">{message.message}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-gray-500">{message.time}</p>
                        <Button size="sm" variant="ghost" className="h-6 px-2 text-xs">
                          Balas
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t">
                  <Button variant="outline" size="sm" className="w-full text-xs" asChild>
                    <Link to="/admin/chat">
                      Lihat Semua Pesan
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-sm mt-6">
              <CardHeader>
                <CardTitle className="text-lg font-medium">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Button size="sm" variant="outline" className="text-xs" asChild>
                    <Link to="/admin/clients/new">
                      <Plus className="mr-1 h-3 w-3" />
                      Klien Baru
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs" asChild>
                    <Link to="/admin/projects/new">
                      <Plus className="mr-1 h-3 w-3" />
                      Proyek Baru
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs" asChild>
                    <Link to="/admin/reports">
                      <TrendingUp className="mr-1 h-3 w-3" />
                      Laporan
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs" asChild>
                    <Link to="/admin/settings">
                      <Clock className="mr-1 h-3 w-3" />
                      Pengaturan
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
