// src/pages/Team.tsx
import { Linkedin } from "lucide-react";
import "./Team.css";
import placeholderPhoto from "../assets/placeholder-team.jpg";
import { p } from "framer-motion/client";

export default function Team() {
  const team = [
    {
      name: "Dr. Aisha Ibrahim",
      role: "Chapter Coordinator",
      photo: placeholderPhoto,
      linkedin: "",
    },
    {
      name: "Chidi Okeke",
      role: "Programs Lead",
      photo: placeholderPhoto,
      linkedin: "",
    },
    {
      name: "Fatima Yusuf",
      role: "Media & Communications",
      photo: placeholderPhoto,
      linkedin: "",
    },
    {
      name: "Emeka Nwosu",
      role: "Logistics & Partnerships",
      photo: placeholderPhoto,
      linkedin: "",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="team-hero">
        <div className="team-hero-bg"></div>
        <div className="team-hero-overlay"></div>
        <div className="team-hero-content">
          <div className="team-hero-badge">Our Leadership</div>
          <h1 className="team-hero-title">Meet the Team</h1>
          <p className="team-hero-subtitle">
            Young, passionate, and 100% dedicated to Abuja
          </p>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="team-main">
        <div className="team-container">
          <div className="team-grid">
            {team.map((member) => (
              <div className="team-card" key={member.name}>
                <div className="team-photo-wrapper">
                  <img src={member.photo} alt={member.name} className="team-photo" />
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  
                  
                  {/* LinkedIn Link */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-link"
                    aria-label={`Visit ${member.name}'s LinkedIn`}
                  >
                    <Linkedin size={28} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}