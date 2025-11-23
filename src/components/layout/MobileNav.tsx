// src/components/layout/MobileNav.tsx
import "./MobileNav.css";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  goToSection: (sectionId: string) => void;
}

export default function MobileNav({ isOpen, onClose, goToSection }: MobileNavProps) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && <div className="overlay" onClick={onClose} />}

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebarHeader">
          {/* <img src={logo} alt="Volunteers4Cause" style={{ height: "48px" }} /> */}
          <button
            onClick={onClose}
            style={{ background: "none", border: "none", cursor: "pointer" }}
            aria-label="Close menu"
          >
            <X size={32} color="#0D47A1" />
          </button>
        </div>

        <nav className="mobileNavList">
          <button onClick={() => goToSection("hero")} className="mobileNavLink">
            Home
          </button>

          <button onClick={() => goToSection("campaigns")} className="mobileNavLink">
            Campaigns
          </button>

          <Link to="/about" onClick={onClose} className="mobileNavLink">
            About Us
          </Link>

          <Link to="/team" onClick={onClose} className="mobileNavLink">
            Our Team
          </Link>

          <button onClick={() => goToSection("form")} className="mobileNavLink mobileJoinBtn">
            Become a Volunteer
          </button>
        </nav>
      </aside>
    </>
  );
}