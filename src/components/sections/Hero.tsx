// src/components/sections/Hero.tsx
import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  const scrollToVolunteer = () => {
    const element = document.getElementById("volunteer");
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="hero" id="hero">
      <div className="heroContent">
        <motion.h1
          className="heroTitle"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <span className="highlight">Join Our Volunteer Movement Today!</span>
        </motion.h1>

        <motion.p
          className="heroSubtitle"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          Help support development, outreach, and community programs across the FCT.
        </motion.p>

        {/* Updated: now scrolls to the Volunteer CTA section */}
        <motion.button
          onClick={scrollToVolunteer}
          className="heroCta"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.8 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Involved Now
        </motion.button>
      </div>
    </section>
  );
}