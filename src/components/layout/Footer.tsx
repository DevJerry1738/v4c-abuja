// src/components/layout/Footer.tsx
import { Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContainer">
        {/* About */}
        <div className="footerColumn">
          <h3>Volunteers4Cause<br />Abuja Chapter</h3>
          <p>
            Passionate volunteers creating real change across Abuja, one community at a time.
          </p>
          <p className="passion">
            Powered by passion. Driven by impact.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footerColumn">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/#campaigns">Campaigns</a>
          <a href="/#stats">Our Impact</a>
          <a href="/about">About Us</a>
          <a href="/team">Team</a>
          <a href="/#form">Join Us</a>
        </div>

        {/* Contact */}
        <div className="footerColumn">
          <h3>Contact Us</h3>
          <div className="contactItem">
            <Phone size={20} />
            <span>+234 814 407 6082</span>
          </div>
          {/* <div className="contactItem">
            <Mail size={20} />
            <span>abuja@volunteers4cause.org</span>
          </div> */}
          <div className="contactItem">
            <MapPin size={20} />
            <span>Abuja, Nigeria</span>
          </div>
        </div>

        {/* Social */}
        <div className="footerColumn">
          <h3>Follow Our Journey</h3>
          <p>Stay connected across platforms</p>
          <div className="socialLinks">
            <a href="https://web.facebook.com/profile.php/?id=61577345277312&_rdc=1&_rdr#" className="socialIcon" aria-label="Facebook">
              <Facebook size={24} />
            </a>
            <a href="https://www.instagram.com/volunteers4cause.abuja.chapter/" className="socialIcon" aria-label="Instagram">
              <Instagram size={24} />
            </a>
            
            <a href="https://www.linkedin.com/in/volunteers4cause-abuja-chapter-961aba36b/" className="socialIcon" aria-label="LinkedIn">
            <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <p>© {new Date().getFullYear()} Volunteers4Cause Abuja Chapter • All rights reserved</p>
        <p>Made with ❤️ for Nigeria</p>
      </div>
    </footer>
  );
}