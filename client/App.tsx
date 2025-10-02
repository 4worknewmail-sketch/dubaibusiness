import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
const NotFound = lazy(() => import("./pages/NotFound"));
const SetupUAE = lazy(() => import("./pages/SetupUAE"));
const SetupIndex = lazy(() => import("./pages/SetupIndex"));
const SetupKSA = lazy(() => import("./pages/SetupKSA"));
const SetupQatar = lazy(() => import("./pages/SetupQatar"));
const Services = lazy(() => import("./pages/Services"));
const WhyMiddleEast = lazy(() => import("./pages/WhyMiddleEast"));
const Compliance = lazy(() => import("./pages/Compliance"));
const TaxLegal = lazy(() => import("./pages/TaxLegal"));
const IPIndex = lazy(() => import("./pages/IPIndex"));
const IPUAETrademarks = lazy(() => import("./pages/IPUAETrademarks"));
const Sectors = lazy(() => import("./pages/Sectors"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Contact = lazy(() => import("./pages/Contact"));
const FreeZonesIndex = lazy(() => import("./pages/FreeZonesIndex"));
const FreeZonesAbuDhabi = lazy(() => import("./pages/freezones/AbuDhabi"));
const FreeZonesDubai = lazy(() => import("./pages/freezones/Dubai"));
const FreeZonesSharjah = lazy(() => import("./pages/freezones/Sharjah"));
const FreeZonesAjman = lazy(() => import("./pages/freezones/Ajman"));
const FreeZonesRAK = lazy(() => import("./pages/freezones/RasAlKhaimah"));
const FreeZonesFujairah = lazy(() => import("./pages/freezones/Fujairah"));
const FreeZonesUAQ = lazy(() => import("./pages/freezones/UAQ"));
const OnshoreDubai = lazy(() => import("./pages/OnshoreDubai"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<div className="p-6 text-sm text-muted-foreground">Loading…</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/setup" element={<SetupIndex />} />
            <Route path="/setup/uae" element={<SetupUAE />} />
            <Route path="/setup/ksa" element={<SetupKSA />} />
            <Route path="/setup/qatar" element={<SetupQatar />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/tax-legal" element={<TaxLegal />} />
            <Route path="/ip" element={<IPIndex />} />
            <Route path="/ip/uae/trademarks" element={<IPUAETrademarks />} />
            <Route path="/sectors" element={<Sectors />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/setup/uae/free-zones" element={<FreeZonesIndex />} />
            <Route path="/setup/uae/free-zones/abu-dhabi" element={<FreeZonesAbuDhabi />} />
            <Route path="/setup/uae/free-zones/dubai" element={<FreeZonesDubai />} />
            <Route path="/setup/uae/free-zones/sharjah" element={<FreeZonesSharjah />} />
            <Route path="/setup/uae/free-zones/ajman" element={<FreeZonesAjman />} />
            <Route path="/setup/uae/free-zones/ras-al-khaimah" element={<FreeZonesRAK />} />
            <Route path="/setup/uae/free-zones/fujairah" element={<FreeZonesFujairah />} />
            <Route path="/setup/uae/free-zones/uaq" element={<FreeZonesUAQ />} />
            <Route path="/setup/uae/onshore/dubai" element={<OnshoreDubai />} />
            <Route path="/why-middle-east" element={<WhyMiddleEast />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
