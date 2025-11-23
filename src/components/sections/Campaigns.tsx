import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import "./Campaigns.css";
import campaignImg1 from "../../assets/pad-a-girl.jpeg";
import campaignImg2 from "../../assets/pad-a-girl-2.jpeg";
import campaignImg3 from "../../assets/pad-a-girl-3.jpeg";
import campaignImg4 from "../../assets/green-legacy-1.jpg";
import campaignImg5 from "../../assets/green-legacy-2.jpg";
import campaignImg6 from "../../assets/green-legacy-3.jpg";
import campaignImg7 from "../../assets/world-cleanup-1.jpg";
import campaignImg8 from "../../assets/world-cleanup-2.jpg";
import campaignImg9 from "../../assets/world-cleanup-3.jpg";
import placeholder from "../../assets/placeholder.png";
import { motion } from "framer-motion";

// ───── TYPES ─────
type CampaignImage = string | string | string[];

type RecentCampaign = {
  title: string;
  desc: string;
  tag: string;
  images: CampaignImage;
};

type UpcomingCampaign = {
  title: string;
  desc: string;
  progress: number;
  goal: string;
  images: CampaignImage;
};

// ───── LIGHTBOX ─────
type LightboxProps = { images: string[]; startIndex: number; onClose: () => void; };

function Lightbox({ images, startIndex, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(startIndex);
  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="lightboxOverlay" onClick={onClose}>
      <button className="lightboxClose" onClick={onClose}><X size={40} /></button>
      <button className="lightboxBtn prev" onClick={(e) => { e.stopPropagation(); prev(); }}>
        <ChevronLeft size={50} />
      </button>
      <button className="lightboxBtn next" onClick={(e) => { e.stopPropagation(); next(); }}>
        <ChevronRight size={50} />
      </button>
      <div className="lightboxImageContainer">
        <img src={images[current]} alt="Full view" className="lightboxImage" loading="lazy" />
      </div>
      <div className="lightboxDots">
        {images.map((_, i) => (
          <div key={i} className={`lightboxDot ${i === current ? "active" : ""}`} />
        ))}
      </div>
    </div>
  );
}

// ───── CAROUSEL ─────
type ImageCarouselProps = { images: string[]; onImageClick: (index: number) => void; };

function ImageCarousel({ images, onImageClick }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    setTouchStart(null);
  };

  if (images.length === 1) {
    return (
      <img
        src={images[0]}
        alt="Campaign"
        className="campaignImage"
        loading="lazy"
        onClick={() => onImageClick(0)}
        style={{ cursor: "zoom-in" }}
      />
    );
  }

  return (
    <div className="carouselContainer" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className="carouselTrack" style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((img, i) => (
          <div key={i} className="carouselSlide" onClick={() => onImageClick(i)}>
            <img src={img} alt={`Slide ${i + 1}`} loading="lazy" style={{ cursor: "zoom-in" }} />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button onClick={prev} className="carouselBtn prev"><ChevronLeft size={28} /></button>
          <button onClick={next} className="carouselBtn next"><ChevronRight size={28} /></button>
          <div className="carouselDots">
            {images.map((_, i) => (
              <div key={i} className={`dot ${i === current ? "active" : ""}`} onClick={() => setCurrent(i)} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ───── MAIN COMPONENT ─────
export default function Campaigns() {
  const [activeTab, setActiveTab] = useState<"recent" | "upcoming">("recent");
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleExpand = (index: number) => {
    setExpandedCards(prev => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const recentCampaigns: RecentCampaign[] = [
    {
      title: "Pad a Girl",
      desc: "Under this year's theme, “The Girl I Am, The Change I Lead,” we empowered young girls with vital knowledge on menstrual hygiene, promoting dignity, health, and equity across schools in Abuja.",
      tag: "Completed",
      images: [campaignImg1, campaignImg2, campaignImg3],
    },
    {
      title: "Green Legacy Project",
      desc: "Volunteers4Cause Abuja Chapter in partnership with Smiling Faces Empowerment Initiative brought climate action to life! We engaged learners from 2 schools, teaching them about the role of trees, how to plant and care for them, and how to raise seedlings in a nursery. Together we planted over 1,500 trees!",
      tag: "Completed",
      images: [campaignImg4, campaignImg5, campaignImg6],
    },
    {
      title: "World Cleanup Day 2025",
      desc: "Volunteers4Cause Abuja partnered with Refab Africa to fight textile and fashion waste, raising awareness on sustainability and showcasing innovative ways to turn discarded fabrics into useful resources. Together, we demonstrated that small conscious actions can create meaningful environmental impact.",
      tag: "Completed",
      images: [campaignImg7, campaignImg8, campaignImg9],
    },
  ];

  const upcomingCampaigns: UpcomingCampaign[] = [
    {
      title: "Christmas Joy 2025",
      desc: "Bringing food, toys, and joy to 5,000 children in orphanages and IDP camps this December.",
      progress: 68,
      goal: "5,000 children",
      images: [placeholder],
    },
    {
      title: "Youth Mental Health Summit",
      desc: "A one-day summit with experts to support mental wellness for Abuja youth in January 2026.",
      progress: 45,
      goal: "500 attendees",
      images: [placeholder],
    },
    {
      title: "Ramadan Feeding Program",
      desc: "Daily iftar meals for 2,000 people throughout Ramadan 2026.",
      progress: 20,
      goal: "60,000 meals",
      images: [placeholder],
    },
  ];

  const campaignsToShow = activeTab === "recent" ? recentCampaigns : upcomingCampaigns;

  const openLightbox = (images: string[], index: number) => {
    setLightbox({ images, index });
  };

  return (
    <>
      <section className="campaigns" id="campaigns">
        <div className="campaignsContainer">
          
          <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="campaignsTitle"
        >
          Our Campaigns
        </motion.h2>

          <div className="campaignTabs">
            <button className={`tabButton ${activeTab === "recent" ? "active" : ""}`} onClick={() => setActiveTab("recent")}>
              Recent & Completed
            </button>
            <button className={`tabButton ${activeTab === "upcoming" ? "active" : ""}`} onClick={() => setActiveTab("upcoming")}>
              Upcoming Campaigns
            </button>
          </div>

          <div className="campaignGrid">
            {campaignsToShow.map((campaign, idx) => {
              const images = Array.isArray(campaign.images) ? campaign.images : [campaign.images];
              const isExpanded = expandedCards.has(idx);

              return (
                <div className="campaignCard" key={idx}>
                  <ImageCarousel images={images} onImageClick={(i) => openLightbox(images, i)} />

                  <div className="campaignContent">
                    <span className={`campaignTag ${"tag" in campaign ? "completedTag" : ""}`}>
                      {"tag" in campaign ? campaign.tag : "Upcoming"}
                    </span>

                    <h3>{campaign.title}</h3>

                    <p className={`campaignDesc ${isExpanded ? "expanded" : ""}`}>
                      {campaign.desc}
                    </p>

                    {/* View More Button */}
                    {campaign.desc.split(" ").length > 20 && (
                      <button
                        className={`viewMoreBtn ${isExpanded ? "expanded" : ""}`}
                        onClick={() => toggleExpand(idx)}
                      >
                        {isExpanded ? "View Less" : "View More"}
                      </button>
                    )}

                    {"progress" in campaign && (
                      <>
                        {/* <div className="progressBar">
                          <div className="progressFill" style={{ width: `${campaign.progress}%` }} />
                        </div>
                        <p style={{ textAlign: "center", fontWeight: 600, color: "var(--v4c-blue)" }}>
                          {campaign.progress}% funded • {campaign.goal}
                        </p> */}
                        <a href="#form" className="volunteerBtn">
                          Volunteer for This Campaign
                        </a>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          startIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}