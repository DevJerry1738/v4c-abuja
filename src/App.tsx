import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import FloatingWhatsApp from "./components/layout/FloatingWhatsApp";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import Campaigns from "./components/sections/Campaigns";
import VolunteerForm from "./components/sections/VolunteerForm";
import Footer from "./components/layout/Footer";
import About from "./pages/About";
import Team from "./pages/Team";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        {/* Header & WhatsApp are on every page */}
        <Header />
        <FloatingWhatsApp />

        {/* Main content changes based on route */}
        <main className="flex-1">
          <Routes>
            {/* HOME PAGE */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Stats />
                  <Campaigns />
                  <VolunteerForm />
                </>
              }
            />

            {/* ABOUT PAGE */}
            <Route path="/about" element={<About />} />

            {/* TEAM PAGE */}
            <Route path="/team" element={<Team />} />

            {/* Optional: 404 fallback
            <Route path="*" element={
              <div className="h-screen flex items-center justify-center">
                <h1 className="text-4xl">Page not found</h1>
              </div>
            } /> */}
          </Routes>
        </main>

        {/* Footer on every page */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;