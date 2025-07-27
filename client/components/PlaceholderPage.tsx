import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { Construction, ArrowLeft } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
  isAuthenticated?: boolean;
}

export default function PlaceholderPage({
  title,
  description,
  isAuthenticated = false,
}: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header isAuthenticated={isAuthenticated} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="text-center">
          <CardHeader className="pb-8">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Construction className="h-8 w-8 text-yellow-600" />
            </div>
            <CardTitle className="text-2xl md:text-3xl mb-4">{title}</CardTitle>
            <CardDescription className="text-lg">{description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-gray-600">
              Halaman ini sedang dalam tahap pengembangan. Tim kami sedang
              bekerja keras untuk menyelesaikan fitur-fitur terbaik untuk Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link to="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Kembali ke Beranda
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/kontak">Hubungi Kami</Link>
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-8">
              Ingin halaman ini segera tersedia? Silakan hubungi kami untuk
              memberikan masukan atau permintaan fitur khusus.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
