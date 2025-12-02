// src/pages/About.tsx
import { useEffect, useState } from "react";
import {
  Users,
  GraduationCap,
  Megaphone,
  HeartHandshake,
  Handshake,
  ArrowRight,
  ArrowDown,
} from "lucide-react";
import VolunteerModal from "../components/sections/VolunteerModal";
import "./About.css";

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Animate cards on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="about-hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            About <span className="highlight">Volunteers4Cause</span>
          </h1>
          <div className="hero-badge">Abuja Chapter</div>
          <p className="hero-subtitle">
            Passionate people. Real impact.<br className="hidden md:block" />
            Abuja’s unstoppable force for good.
          </p>
        </div>
        <div className="scroll-hint">
          <ArrowDown className="w-8 h-8 rotate-90 animate-bounce" />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="about-main">
        <div className="container">
          {/* Intro */}
          <div className="intro-text animate-on-scroll">
            <p>
              <strong>Volunteers4Cause Abuja Chapter</strong> is a dynamic network of passionate, purpose-driven individuals committed to creating meaningful social change across communities in Abuja, Nigeria.
            </p>
            <p>
              As a proud community powered by <strong>WorldMerit</strong>, our mission is to empower youth and mobilize citizens to take action toward solving real-life challenges — especially those related to poverty, education, health, climate action, civic engagement, and gender equality.
            </p>
          </div>

          {/* What We Do */}
          <h2 className="section-title animate-on-scroll">What We Do</h2>

          <div className="mission-grid">
            <div className="mission-card animate-on-scroll">
              <div className="icon-wrapper"><Users /></div>
              <h3>Community Outreach & Advocacy</h3>
              <p>We go where the need is greatest and amplify voices that matter through direct engagement.</p>
            </div>

            <div className="mission-card animate-on-scroll">
              <div className="icon-wrapper"><GraduationCap /></div>
              <h3>Youth Empowerment</h3>
              <p>We train, mentor, and unleash the next generation of leaders through capacity building.</p>
            </div>

            <div className="mission-card animate-on-scroll">
              <div className="icon-wrapper"><Megaphone /></div>
              <h3>Awareness Programs</h3>
              <p>We spark conversations and drive action on issues that shape our future via campaigns.</p>
            </div>

            <div className="mission-card animate-on-scroll">
              <div className="icon-wrapper"><HeartHandshake /></div>
              <h3>Volunteer Engagement</h3>
              <p>We turn passion into purpose and volunteers into changemakers through leadership development.</p>
            </div>

            <div className="mission-card animate-on-scroll">
              <div className="icon-wrapper"><Handshake /></div>
              <h3>Strategic Partnerships</h3>
              <p>We collaborate with organizations, government, and communities to multiply results.</p>
            </div>

            <div className="quote-card animate-on-scroll">
              <p className="quote">
                "Action is the foundational key to all success."
              </p>
              <p className="quote-sub">
                Join us to build stronger, kinder, and sustainable communities.
              </p>
            </div>
          </div>

          {/* JOIN CTA — OPENS MODAL */}
          <div className="join-cta animate-on-scroll">
            <h2 className="join-title">Ready to Make a Difference?</h2>
            <p className="join-text">
              If you are passionate about sustainable development and believe in the power of collective action, we invite you to connect, collaborate, and contribute.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="join-button"
            >
              Become a Volunteer
              <ArrowRight className="arrow-icon" />
            </button>
          </div>
        </div>
      </section>

      {/* MODAL */}
      <VolunteerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}