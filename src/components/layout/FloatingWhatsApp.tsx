// FloatingWhatsApp.tsx
import "./FloatingWhatsApp.css";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const phone = "2348144076082"; // ← change to real number
  const text = "Hi! I want to volunteer with V4C Abuja Chapter";

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(text)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="floatingWa"
    >
      <MessageCircle size={36} />
      <div className="pulse"></div>
    </a>
  );
}