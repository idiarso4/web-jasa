import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
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
  Edit,
  Search,
  Filter,
  Download,
  MoreHorizontal,
  Activity,
  Target,
  Briefcase,
  Star,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  Shield,
  Globe,
  Smartphone,
} from "lucide-react";

export default function Admin() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedPeriod, setSelectedPeriod] = useState("month");

  const stats = [
    {
      title: "Total Revenue",
      value: "Rp 1.2B",
      change: "+23.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Active Projects",
      value: "12",
      change: "+2 this week",
      trend: "up",
      icon: FolderOpen,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Total Clients",
      value: "48",
      change: "+6 this month",
      trend: "up",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Avg. Project Value",
      value: "Rp 45M",
      change: "+12.3%",
      trend: "up",
      icon: Target,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  const recentProjects = [
    {
      id: "1",
      name: "E-Commerce TokoBaju",
      client: "PT. Fashion Digital",
      clientAvatar:
        "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
      status: "development",
      progress: 75,
      deadline: "2024-03-15",
      budget: "Rp 35.000.000",
      team: ["John", "Jane", "Bob"],
      priority: "high",
      category: "Web Development",
    },
    {
      id: "2",
      name: "Sistem MediCare",
      client: "RS. Mitra Sehat",
      clientAvatar:
        "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
      status: "testing",
      progress: 90,
      deadline: "2024-02-28",
      budget: "Rp 80.000.000",
      team: ["Alice", "Charlie"],
      priority: "urgent",
      category: "Enterprise System",
    },
    {
      id: "3",
      name: "FoodGo Mobile App",
      client: "FoodGo Startup",
      clientAvatar:
        "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
      status: "planning",
      progress: 25,
      deadline: "2024-04-20",
      budget: "Rp 45.000.000",
      team: ["David", "Eve"],
      priority: "medium",
      category: "Mobile App",
    },
    {
      id: "4",
      name: "CRM SalesForce Pro",
      client: "PT. Sales Solutions",
      clientAvatar:
        "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
      status: "completed",
      progress: 100,
      deadline: "2024-01-30",
      budget: "Rp 60.000.000",
      team: ["Frank", "Grace"],
      priority: "completed",
      category: "Enterprise System",
    },
  ];

  const recentClients = [
    {
      id: "1",
      name: "Budi Santoso",
      company: "PT. Fashion Digital",
      email: "budi@tokobaju.com",
      phone: "+62 811-2345-6789",
      avatar:
        "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
      projects: 2,
      totalValue: "Rp 65M",
      status: "active",
      joinDate: "2024-01-15",
    },
    {
      id: "2",
      name: "Dr. Sari Indah",
      company: "RS. Mitra Sehat",
      email: "sari@mediccare.com",
      phone: "+62 813-4567-8901",
      avatar:
        "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
      projects: 1,
      totalValue: "Rp 80M",
      status: "active",
      joinDate: "2024-02-01",
    },
    {
      id: "3",
      name: "Ahmad Rizki",
      company: "FoodGo Startup",
      email: "ahmad@foodgo.com",
      phone: "+62 812-7890-1234",
      avatar:
        "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
      projects: 1,
      totalValue: "Rp 45M",
      status: "prospect",
      joinDate: "2024-02-10",
    },
  ];

  const teamMembers = [
    {
      name: "John Developer",
      role: "Lead Developer",
      avatar:
        "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
      workload: 85,
      projects: 3,
      status: "busy",
    },
    {
      name: "Jane Designer",
      role: "UI/UX Designer",
      avatar:
        "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
      workload: 60,
      projects: 2,
      status: "available",
    },
    {
      name: "Bob PM",
      role: "Project Manager",
      avatar:
        "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
      workload: 75,
      projects: 4,
      status: "busy",
    },
  ];

  const recentActivities = [
    {
      id: "1",
      user: "Budi Santoso",
      action: "submitted feedback",
      target: "E-Commerce TokoBaju",
      time: "5 minutes ago",
      type: "feedback",
    },
    {
      id: "2",
      user: "John Developer",
      action: "completed milestone",
      target: "Payment Integration",
      time: "1 hour ago",
      type: "milestone",
    },
    {
      id: "3",
      user: "Dr. Sari Indah",
      action: "reported bug",
      target: "Appointment System",
      time: "2 hours ago",
      type: "issue",
    },
    {
      id: "4",
      user: "Jane Designer",
      action: "uploaded designs",
      target: "Mobile App UI",
      time: "3 hours ago",
      type: "upload",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "planning":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "development":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "testing":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "completed":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "planning":
        return "Planning";
      case "development":
        return "Development";
      case "testing":
        return "Testing";
      case "completed":
        return "Completed";
      default:
        return status;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "bg-red-100 text-red-800 border-red-200";
      case "high":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "completed":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Web Development":
        return Globe;
      case "Mobile App":
        return Smartphone;
      case "Enterprise System":
        return Shield;
      default:
        return Briefcase;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Admin Dashboard
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Welcome back, {user?.name}! Here's what's happening with your
                agency.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="quarter">This Quarter</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90">
                <Plus className="mr-2 h-4 w-4" />
                New Project
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border-0 shadow-sm hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-semibold text-gray-900 mt-2">
                      {stat.value}
                    </p>
                    <div className="flex items-center mt-2">
                      {stat.trend === "up" ? (
                        <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                      ) : (
                        <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
                      )}
                      <span
                        className={`text-xs font-medium ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}
                      >
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="grid grid-cols-4 w-full max-w-md">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="clients">Clients</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Recent Projects */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-sm">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="text-lg font-medium">
                        Recent Projects
                      </CardTitle>
                      <CardDescription className="text-sm">
                        Latest project updates and progress
                      </CardDescription>
                    </div>
                    <Button size="sm" variant="outline" asChild>
                      <Link to="/admin/projects">
                        View All
                        <ChevronRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentProjects.slice(0, 3).map((project) => {
                        const CategoryIcon = getCategoryIcon(project.category);
                        return (
                          <div
                            key={project.id}
                            className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-start space-x-3">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                  <CategoryIcon className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                  <h3 className="font-medium text-sm text-gray-900">
                                    {project.name}
                                  </h3>
                                  <p className="text-xs text-gray-600">
                                    {project.client}
                                  </p>
                                  <p className="text-xs text-gray-500 mt-1">
                                    {project.category}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Badge
                                  className={`text-xs ${getStatusColor(project.status)}`}
                                >
                                  {getStatusText(project.status)}
                                </Badge>
                                <Badge
                                  className={`text-xs ${getPriorityColor(project.priority)}`}
                                >
                                  {project.priority}
                                </Badge>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <div className="flex justify-between text-xs">
                                <span className="text-gray-600">Progress</span>
                                <span className="font-medium">
                                  {project.progress}%
                                </span>
                              </div>
                              <Progress
                                value={project.progress}
                                className="h-2"
                              />

                              <div className="flex justify-between items-center text-xs pt-2">
                                <div className="flex items-center text-gray-600">
                                  <Calendar className="mr-1 h-3 w-3" />
                                  {new Date(
                                    project.deadline,
                                  ).toLocaleDateString("id-ID")}
                                </div>
                                <div className="flex items-center text-gray-600">
                                  <DollarSign className="mr-1 h-3 w-3" />
                                  {project.budget}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <div>
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-medium">
                      Recent Activity
                    </CardTitle>
                    <CardDescription className="text-sm">
                      Latest updates from your team and clients
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivities.map((activity) => (
                        <div
                          key={activity.id}
                          className="flex items-start space-x-3"
                        >
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs ${
                              activity.type === "feedback"
                                ? "bg-blue-500"
                                : activity.type === "milestone"
                                  ? "bg-green-500"
                                  : activity.type === "issue"
                                    ? "bg-red-500"
                                    : "bg-purple-500"
                            }`}
                          >
                            {activity.type === "feedback" ? (
                              <MessageSquare className="h-3 w-3" />
                            ) : activity.type === "milestone" ? (
                              <CheckCircle className="h-3 w-3" />
                            ) : activity.type === "issue" ? (
                              <AlertCircle className="h-3 w-3" />
                            ) : (
                              <Activity className="h-3 w-3" />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-900">
                              <span className="font-medium">
                                {activity.user}
                              </span>{" "}
                              {activity.action}
                            </p>
                            <p className="text-xs text-primary font-medium">
                              {activity.target}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {activity.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Team Status */}
                <Card className="border-0 shadow-sm mt-6">
                  <CardHeader>
                    <CardTitle className="text-lg font-medium">
                      Team Status
                    </CardTitle>
                    <CardDescription className="text-sm">
                      Current team workload and availability
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {teamMembers.map((member, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3"
                        >
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={member.avatar} />
                            <AvatarFallback>
                              {member.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">
                              {member.name}
                            </p>
                            <p className="text-xs text-gray-600">
                              {member.role}
                            </p>
                            <div className="flex items-center mt-1">
                              <Progress
                                value={member.workload}
                                className="h-1 w-16 mr-2"
                              />
                              <span className="text-xs text-gray-500">
                                {member.workload}%
                              </span>
                            </div>
                          </div>
                          <Badge
                            variant={
                              member.status === "available"
                                ? "default"
                                : "secondary"
                            }
                            className="text-xs"
                          >
                            {member.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg font-medium">
                      All Projects
                    </CardTitle>
                    <CardDescription className="text-sm">
                      Manage and track all your projects
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-2">
                      <Search className="h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search projects..."
                        className="w-64"
                      />
                    </div>
                    <Button size="sm" variant="outline">
                      <Filter className="mr-1 h-3 w-3" />
                      Filter
                    </Button>
                    <Button size="sm">
                      <Plus className="mr-1 h-3 w-3" />
                      New Project
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Project</TableHead>
                      <TableHead>Client</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Progress</TableHead>
                      <TableHead>Budget</TableHead>
                      <TableHead>Deadline</TableHead>
                      <TableHead className="w-[50px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentProjects.map((project) => {
                      const CategoryIcon = getCategoryIcon(project.category);
                      return (
                        <TableRow key={project.id}>
                          <TableCell>
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                                <CategoryIcon className="h-4 w-4 text-primary" />
                              </div>
                              <div>
                                <p className="font-medium text-sm">
                                  {project.name}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {project.category}
                                </p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={project.clientAvatar} />
                                <AvatarFallback>
                                  {project.client.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <span className="text-sm">{project.client}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge
                              className={`text-xs ${getStatusColor(project.status)}`}
                            >
                              {getStatusText(project.status)}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              <Progress
                                value={project.progress}
                                className="h-2 w-16"
                              />
                              <span className="text-xs font-medium">
                                {project.progress}%
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <span className="text-sm font-medium">
                              {project.budget}
                            </span>
                          </TableCell>
                          <TableCell>
                            <span className="text-sm">
                              {new Date(project.deadline).toLocaleDateString(
                                "id-ID",
                              )}
                            </span>
                          </TableCell>
                          <TableCell>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-6 w-6 p-0"
                            >
                              <MoreHorizontal className="h-3 w-3" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Clients Tab */}
          <TabsContent value="clients" className="space-y-6">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg font-medium">
                      All Clients
                    </CardTitle>
                    <CardDescription className="text-sm">
                      Manage your client relationships
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-2">
                      <Search className="h-4 w-4 text-gray-400" />
                      <Input placeholder="Search clients..." className="w-64" />
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="mr-1 h-3 w-3" />
                      Export
                    </Button>
                    <Button size="sm">
                      <Plus className="mr-1 h-3 w-3" />
                      New Client
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Client</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Projects</TableHead>
                      <TableHead>Total Value</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Join Date</TableHead>
                      <TableHead className="w-[50px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentClients.map((client) => (
                      <TableRow key={client.id}>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={client.avatar} />
                              <AvatarFallback>
                                {client.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-sm">
                                {client.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                {client.company}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="text-sm">{client.email}</p>
                            <p className="text-xs text-gray-500">
                              {client.phone}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm font-medium">
                            {client.projects}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm font-medium">
                            {client.totalValue}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              client.status === "active"
                                ? "default"
                                : "secondary"
                            }
                            className="text-xs"
                          >
                            {client.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm">
                            {new Date(client.joinDate).toLocaleDateString(
                              "id-ID",
                            )}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-6 w-6 p-0"
                          >
                            <MoreHorizontal className="h-3 w-3" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Team Tab */}
          <TabsContent value="team" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={member.avatar} />
                        <AvatarFallback>
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium text-base">{member.name}</h3>
                        <p className="text-sm text-gray-600">{member.role}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-600">Workload</span>
                          <span className="font-medium">
                            {member.workload}%
                          </span>
                        </div>
                        <Progress value={member.workload} className="h-2" />
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-600">
                          Active Projects
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {member.projects}
                        </Badge>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-600">Status</span>
                        <Badge
                          variant={
                            member.status === "available"
                              ? "default"
                              : "secondary"
                          }
                          className="text-xs"
                        >
                          {member.status}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex space-x-2 mt-4">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 text-xs"
                      >
                        <MessageSquare className="mr-1 h-3 w-3" />
                        Chat
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 text-xs"
                      >
                        <Eye className="mr-1 h-3 w-3" />
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
