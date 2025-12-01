// src/components/sections/VolunteerCTA.tsx
import { useState } from "react";
import VolunteerModal from "./VolunteerModal";
import "./VolunteerCTA.css";
import { motion } from "framer-motion";

export default function VolunteerCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="volunteer-cta" id="volunteer">
        <div className="volunteer-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="volunteer-content"
          >
            <h2 className="volunteer-title">
              Ready to Make Real Impact in Abuja?
            </h2>
            <p className="volunteer-text">
              Join hundreds of passionate volunteers driving change in education, health, environment, and youth empowerment. 
        
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="volunteer-btn"
            >
              Volunteer Today
              <span className="arrow">→</span>
            </button>
          </motion.div>
        </div>
      </section>

      <VolunteerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}