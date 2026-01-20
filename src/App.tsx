import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import { DataProvider } from "@/context/DataContext";
import Index from "./pages/Index";
import NewsPage from "./pages/NewsPage";
import NewsDetail from "./pages/NewsDetail";
import AboutPage from "./pages/AboutPage";
import MembershipPage from "./pages/MembershipPage";
import HallOfFamePage from "./pages/HallOfFamePage";
import PublicationsPage from "./pages/PublicationsPage";
import NotFound from "./pages/NotFound";
import { AdminLayout } from "./components/admin/AdminLayout";
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import NewsManager from "./pages/admin/NewsManager";
import HallOfFameManager from "./pages/admin/HallOfFameManager";
import PublicationsManager from "./pages/admin/PublicationsManager";
import DynamicBackground from "./components/DynamicBackground";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <DataProvider>
          <BrowserRouter>
            <DynamicBackground />
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Index />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/news/:id" element={<NewsDetail />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/membership" element={<MembershipPage />} />
              <Route path="/hall-of-fame" element={<HallOfFamePage />} />
              <Route path="/publications" element={<PublicationsPage />} />
              
              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="news" element={<NewsManager />} />
                <Route path="hall-of-fame" element={<HallOfFameManager />} />
                <Route path="publications" element={<PublicationsManager />} />
              </Route>

              {/* Catch-all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </DataProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

