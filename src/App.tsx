
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MathuraVrindavan from "./pages/MathuraVrindavan";
import Destination from "./pages/Destination";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./components/ThemeProvider";
import Features from "./components/Features";
import HowItWorks from './components/HowItWorks';
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/features" element={<Features />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/download" element={<CallToAction />} />
            <Route path="/mathura-vrindavan" element={<MathuraVrindavan />} />
            <Route path="/destinations/:id" element={<Destination />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
