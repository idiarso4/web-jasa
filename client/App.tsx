import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layanan from "./pages/Layanan";
import Portofolio from "./pages/Portofolio";
import Proses from "./pages/Proses";
import Tentang from "./pages/Tentang";
import Kontak from "./pages/Kontak";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Proyek from "./pages/Proyek";
import Komunikasi from "./pages/Komunikasi";
import Dokumen from "./pages/Dokumen";
import Tagihan from "./pages/Tagihan";
import Akun from "./pages/Akun";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
