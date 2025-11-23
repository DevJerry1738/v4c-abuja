// src/components/layout/Header.tsx
import "./Header.css";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import MobileNav from "./MobileNav";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Smart navigation: go home + scroll if needed
  const goToSection = (sectionId: string) => {
    // If we're not on the home page → navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for home to load, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 400);
    } else {
      // Already on home → just scroll
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false); // close mobile menu
  };

  return (
    <>
      <header className="header">
        <div className="headerContainer">
          {/* Logo + Title */}
          <div className="logoSection">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={logo} alt="Volunteers4Cause" />
            </Link>
            <div className="logoText">
              <h1>Volunteers4Cause</h1>
              <p className="abujaBadge">Abuja Chapter</p>
            </div>
          </div>

          {/* DESKTOP NAVIGATION */}
          <nav className="desktopNav">
            <button onClick={() => goToSection("campaigns")} className="navLink">
              Campaigns
            </button>
            <Link to="/about" className="navLink">
              About
            </Link>
            <Link to="/team" className="navLink">
              Team
            </Link>
            <button onClick={() => goToSection("form")} className="joinBtn desktopJoinBtn">
              Join as Volunteer
            </button>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="mobileMenuBtn"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={32} color="#0D47A1" />
          </button>
        </div>
      </header>

      {/* MOBILE NAV — PASS goToSection SO IT WORKS FROM ANY PAGE */}
      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} goToSection={goToSection} />
    </>
  );
}