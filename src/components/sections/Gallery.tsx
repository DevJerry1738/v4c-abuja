// src/components/sections/Gallery.tsx
import { motion } from "framer-motion";
import "./Gallery.css";

// Add your real images here (from assets or public folder)
import img1 from "../../assets/pad-a-girl.webp";
import img2 from "../../assets/pad-a-girl-2.webp";
import img3 from "../../assets/green-legacy-1.webp";
import img4 from "../../assets/green-legacy-2.webp";
import img5 from "../../assets/world-cleanup-1.webp";
import img6 from "../../assets/millennium-1.webp";
import img7 from "../../assets/tree-planting-1.webp";
import img8 from "../../assets/pad-a-girl-3.webp";
import img9 from "../../assets/world-cleanup-3.webp";
import img10 from "../../assets/gallery-1.webp";
import img11 from "../../assets/gallery-2.webp";
import img12 from "../../assets/gallery-3.webp";
import img13 from "../../assets/gallery-5.webp";


const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13];

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="galleryContainer">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="galleryTitle"
        >
          Moments That Matter
        </motion.h2>
        <p className="gallerySubtitle">
          Real people. Real impact. See how together we’re changing Abuja, one volunteer at a time.
        </p>

        <div className="galleryGrid">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="galleryItem"
            >
              <img src={src} alt={`Campaign moment ${index + 1}`} loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}