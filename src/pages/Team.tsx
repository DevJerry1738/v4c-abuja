// src/pages/Team.tsx
import { Linkedin } from "lucide-react";
import "./Team.css";
import team1 from "../assets/team-1.webp";
import team2 from "../assets/team-2.webp";
import team3 from "../assets/team-3.jpg";
import team4 from "../assets/team-4.webp";
import team5 from "../assets/team-5.webp";
import team6 from "../assets/team-6.png";
import team7 from "../assets/team-7.webp";
import team8 from "../assets/team-8.webp";
import team9 from "../assets/team-9.webp";

export default function Team() {
  const team = [
    {
      name: "Sese Bula",
      role: "Team Lead",
      photo: team4,
      
    },
    {
      name: "Ummi-khulsum Jibreel",
      role: "Communication Lead",
      photo: team2,
     
    },
    {
      name: "Juliana Jesse Mavah",
      role: "Outreach Lead",
      photo: team3,
     
    },
    {
      name: "Zong Janet Zi",
      role: "Story Telling / Photography",
      photo: team5,
      
    },
    {
      name: "Agbo Thomas Tordue",
      role: "Recruitment Lead",
      photo: team6,
     
    },
    {
      name: "Nafisa Ibrahim Suleiman",
      role: "Resource Lead",
      photo: team7,
     
    },
    {
      name: "Abdulqadir Kawu Shuaibu",
      role: "Assistant Resource Lead",
      photo: team9,
      
    },
    {
      name: "Joseph Jesse Mavah",
      role: "Graphics Designer-1",
      photo: team8,
      
    },
    {
      name: "Jideofor Onyeka Jeremiah",
      role: "Web Developer",
      photo: team1,
      
    },
    
    
    

   
  ];

  return (
    <>
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

      <section className="team-main">
        <div className="team-container">
          <div className="team-grid">
            {team.map((member) => (
              <div className="team-card" key={member.name}>
                <div className="avatar-wrapper">
                  <img src={member.photo} alt={member.name} className="team-photo" />
                </div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}