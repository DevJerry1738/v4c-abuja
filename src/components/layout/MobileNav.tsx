// src/components/layout/MobileNav.tsx
import "./MobileNav.css";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  goToSection: (id: string) => void;
  openVolunteerModal: () => void;
}

export default function MobileNav({ 
  isOpen, 
  onClose, 
  goToSection, 
  openVolunteerModal 
}: MobileNavProps) {
  return (
    <>
      {isOpen && <div className="overlay" onClick={onClose} />}

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebarHeader">
          <button
            onClick={onClose}
            style={{ background: "none", border: "none", cursor: "pointer" }}
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
          <button 
            onClick={openVolunteerModal} 
            className="mobileNavLink mobileJoinBtn"
          >
            Become a Volunteer
          </button>
        </nav>
      </aside>
    </>
  );
}