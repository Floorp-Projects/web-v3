import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import DownloadPage from "./pages/DownloadPage";
import DiscordPage from "./pages/DiscordPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import Floorp12Page from "./pages/Floorp12Page";
import { ScrollToTop } from "./components/ScrollToTop";

function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <span className="loading loading-spinner loading-lg text-primary" />
        <p className="text-base-content/60 animate-pulse">Loading...</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner />}>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/discord" element={<DiscordPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/floorp12" element={<Floorp12Page />} />
            {/* Locale-prefixed routes for backward compatibility */}
            <Route path="/:locale" element={<HomePage />} />
            <Route path="/:locale/download" element={<DownloadPage />} />
            <Route path="/:locale/discord" element={<DiscordPage />} />
            <Route path="/:locale/terms" element={<TermsPage />} />
            <Route path="/:locale/privacy" element={<PrivacyPage />} />
            <Route path="/:locale/floorp12" element={<Floorp12Page />} />
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
