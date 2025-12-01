// src/components/sections/VolunteerModal.tsx
import { X, MessageCircle } from "lucide-react";
import { useState } from "react";
import "./VolunteerModal.css";

export default function VolunteerModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "",
    skills: "",
    availability: "",
    message: "",
  });

  const [phoneError, setPhoneError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "phone") {
      const cleaned = value.replace(/\D/g, "");
      const isValid =
        cleaned.length === 11 && cleaned.startsWith("0") ||
        cleaned.length === 13 && cleaned.startsWith("234") ||
        (cleaned.length === 10 && ["7", "8", "9"].includes(cleaned[0]));

      setPhoneError(value && !isValid ? "Invalid Nigerian number" : "");
    }
  };

  const sendToWhatsApp = () => {
    const { name, phone, area, skills, availability, message } = formData;
    const text = encodeURIComponent(
      `*New Volunteer Registration*%0A%0A` +
      `*Name:* ${name}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Area:* ${area}%0A` +
      `*Skills:* ${skills || "Not specified"}%0A` +
      `*Availability:* ${availability || "Flexible"}%0A` +
      `*Message:* ${message || "None"}%0A%0A` +
      `_From V4C Abuja website_`
    );

    window.open(`https://wa.me/2348144076082?text=${text}`, "_blank");
    onClose();
  };

  const isPhoneValid = () => {
    const cleaned = formData.phone.replace(/\D/g, "");
    return (
      (cleaned.length === 11 && cleaned.startsWith("0")) ||
      (cleaned.length === 13 && cleaned.startsWith("234")) ||
      (cleaned.length === 10 && ["7", "8", "9"].includes(cleaned[0]))
    );
  };

  const isFormValid = formData.name && formData.phone && formData.area && isPhoneValid();

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={32} />
        </button>

        <h2 className="modal-title">Join Volunteers4Cause Abuja</h2>
        <p className="modal-subtitle">Fill in your details, we’ll contact you via WhatsApp!</p>

        <form className="modal-form" onSubmit={(e) => { e.preventDefault(); isFormValid && sendToWhatsApp(); }}>
          <div className="modal-grid">
            <input type="text" name="name" placeholder="Full Name *" value={formData.name} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Phone (WhatsApp) *" value={formData.phone} onChange={handleChange} required style={{ borderColor: phoneError ? "#ef4444" : undefined }} />
            {phoneError && <p className="error-text">{phoneError}</p>}

            <select name="area" value={formData.area} onChange={handleChange} required>
              <option value="">Area in Abuja *</option>
              <option>Garki</option><option>Wuse</option><option>Maitama</option>
              <option>Asokoro</option><option>Gwarinpa</option><option>Kubwa</option>
              <option>Nyanya</option><option>Lugbe</option><option>Other</option>
            </select>

            <input type="text" name="skills" placeholder="Skills / Interests" value={formData.skills} onChange={handleChange} />
            
            <select name="availability" value={formData.availability} onChange={handleChange}>
              <option value="">When can you volunteer?</option>
              <option>Weekends only</option>
              <option>Weekdays after 5pm</option>
              <option>Flexible</option>
              <option>One-time events</option>
            </select>

            <textarea
              name="message"
              placeholder="Why do you want to join? (Optional)"
              value={formData.message}
              onChange={handleChange}
              rows={3}
            />
          </div>

          <button type="submit" disabled={!isFormValid} className="modal-submit">
            <MessageCircle size={26} />
            Send via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}