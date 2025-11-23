import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Content is perfectly centered thanks to flexbox on .hero */}
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

        <motion.a
          href="#form"
          className="heroCta"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.8 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Involved Now
        </motion.a>
      </div>
    </section>
  );
}