// src/components/sections/AboutPreview.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./AboutPreview.css";
import img from "../../assets/green-legacy-2.webp";

export default function AboutPreview() {
  return (
    <section className="about-preview">
      <div className="about-preview-desktop">
        <div className="about-preview-grid">
          {/* Desktop: Image Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="about-preview-image-wrapper"
          >
            <img src={img} alt="Volunteers in action" className="about-preview-image" />
          </motion.div>

          {/* Desktop: Text Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="about-preview-content"
          >
            <h2 className="about-preview-title">About Volunteers4Cause Abuja</h2>
            <p className="about-preview-text">
              We are a dynamic network of passionate, purpose-driven individuals committed to creating meaningful social change across communities in Abuja, Nigeria. 
              Powered by WorldMerit, we empower youth and mobilize citizens to tackle real-life challenges in education, health, climate action, and gender equality.
            </p>
            <Link to="/about" className="about-preview-btn">
              Learn More About Us
              <span className="arrow">→</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Mobile: Full Background + Overlay Text */}
      <div className="about-preview-mobile">
        <div className="mobile-bg" style={{ backgroundImage: `url(${img})` }}></div>
        <div className="mobile-overlay"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mobile-content"
        >
          <h2 className="mobile-title">About Volunteers4Cause Abuja</h2>
          <p className="mobile-text">
            We are a dynamic network of passionate, purpose-driven individuals committed to creating meaningful social change across communities in Abuja, Nigeria. 
            Powered by WorldMerit, we empower youth and mobilize citizens to tackle real-life challenges in education, health, climate action, and gender equality.
          </p>
          <Link to="/about" className="mobile-btn">
            Learn More About Us
            <span className="arrow">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}