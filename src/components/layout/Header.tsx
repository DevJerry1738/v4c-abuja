// src/components/layout/Header.tsx
import "./Header.css";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/logo.webp";
import MobileNav from "./MobileNav";
import VolunteerModal from "../sections/VolunteerModal";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showVolunteerModal, setShowVolunteerModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  const openVolunteerModal = () => {
    setShowVolunteerModal(true);
    setMobileOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="headerContainer">
          <div className="logoSection">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={logo} alt="Volunteers4Cause" />
            </Link>
            <div className="logoText">
              <h1>Volunteers4Cause</h1>
              <p className="abujaBadge">Abuja Chapter</p>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="desktopNav">
            <button onClick={() => goToSection("campaigns")} className="navLink">
              Campaigns
            </button>
            <Link to="/about" className="navLink">About</Link>
            <Link to="/team" className="navLink">Team</Link>
            <button onClick={openVolunteerModal} className="joinBtn desktopJoinBtn">
              Join as Volunteer
            </button>
          </nav>

          {/* MOBILE MENU */}
          <button className="mobileMenuBtn" onClick={() => setMobileOpen(true)}>
            <Menu size={32} color="#0D47A1" />
          </button>
        </div>
      </header>

      {/* PASS openVolunteerModal TO MOBILE NAV */}
      <MobileNav
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        goToSection={goToSection}
        openVolunteerModal={openVolunteerModal}
      />

      {/* MODAL — NOW CONTROLLED FROM HEADER */}
      <VolunteerModal
        isOpen={showVolunteerModal}
        onClose={() => setShowVolunteerModal(false)}
      />
    </>
  );
}