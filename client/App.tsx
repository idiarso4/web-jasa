import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/contexts/AuthContext";
import { ChatProvider } from "@/contexts/ChatContext";
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
import Admin from "./pages/Admin";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <ChatProvider>
        <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Public Website Routes */}
          <Route path="/layanan" element={<Layanan />} />
          <Route path="/portofolio" element={<Portofolio />} />
          <Route path="/proses" element={<Proses />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/login" element={<Login />} />

          {/* Client Portal Routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute requiredRole="client">
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/proyek" element={
            <ProtectedRoute requiredRole="client">
              <Proyek />
            </ProtectedRoute>
          } />
          <Route path="/komunikasi" element={
            <ProtectedRoute requiredRole="client">
              <Komunikasi />
            </ProtectedRoute>
          } />
          <Route path="/dokumen" element={
            <ProtectedRoute requiredRole="client">
              <Dokumen />
            </ProtectedRoute>
          } />
          <Route path="/tagihan" element={
            <ProtectedRoute requiredRole="client">
              <Tagihan />
            </ProtectedRoute>
          } />
          <Route path="/akun" element={
            <ProtectedRoute>
              <Akun />
            </ProtectedRoute>
          } />

          {/* Admin Routes */}
          <Route path="/admin" element={
            <ProtectedRoute requiredRole="admin">
              <Admin />
            </ProtectedRoute>
          } />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
        </TooltipProvider>
      </ChatProvider>
    </AuthProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
