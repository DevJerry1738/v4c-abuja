// src/components/sections/VolunteerForm.tsx
import { useState } from "react";
import "./VolunteerForm.css";
import { MessageCircle } from "lucide-react";

export default function VolunteerForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "",
    skills: "",
    availability: "",
    message: "",
  });

  const [phoneError, setPhoneError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "phone") {
      const cleaned = value.replace(/\D/g, "");
      const isValid =
        cleaned.length === 11 && cleaned.startsWith("0") ||
        cleaned.length === 13 && cleaned.startsWith("234") ||
        (cleaned.length === 10 && ["7", "8", "9"].includes(cleaned[0]));

      setPhoneError(value && !isValid
        ? "Please enter a valid Nigerian number (e.g. 0803 123 4567)"
        : ""
      );
    }
  };

  const sendToWhatsApp = () => {
    const { name, phone, area, skills, availability, message } = formData;

    // Properly encode the entire message
    const text = encodeURIComponent(
      `*New Volunteer Registration*%0A%0A` +
      `*Name:* ${name}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Area:* ${area}%0A` +
      `*Skills:* ${skills || "Not specified"}%0A` +
      `*Availability:* ${availability || "Not specified"}%0A` +
      `*Message:* ${message || "No message"}%0A%0A` +
      `_Sent from Volunteers4Cause Abuja website_`
    );

    const waNumber = "2348144076082"; // ← Your official number

    // This will now open WhatsApp with FULLY FILLED MESSAGE
    window.open(`https://wa.me/${waNumber}?text=${text}`, "_blank");

    // Reset form
    setFormData({
      name: "",
      phone: "",
      area: "",
      skills: "",
      availability: "",
      message: "",
    });
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

  return (
    <section className="formSection" id="form">
      <div className="formContainer">
        <h2 className="formTitle">Join Our Volunteer Team</h2>
        <p className="formSubtitle">
          Be part of real change in Abuja. We’ll reach you on WhatsApp within 24 hours!
        </p>

        <form className="form" onSubmit={(e) => { e.preventDefault(); isFormValid && sendToWhatsApp(); }}>
          <div className="formGrid">
            <div className="formGroup">
              <label>Full Name *</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="e.g. Fatima Yusuf" required />
            </div>

            <div className="formGroup">
              <label>Phone Number (WhatsApp) *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="0803 123 4567"
                required
                style={{ borderColor: phoneError ? "#ef4444" : undefined }}
              />
              {phoneError && (
                <p style={{ color: "#ef4444", fontSize: "0.95rem", marginTop: "0.6rem" }}>
                  {phoneError}
                </p>
              )}
            </div>

            <div className="formGroup">
              <label>Area in Abuja *</label>
              <select name="area" value={formData.area} onChange={handleChange} required>
                <option value="" disabled hidden>Select your area</option>
                <option>Garki</option><option>Wuse</option><option>Maitama</option>
                <option>Asokoro</option><option>Gwarinpa</option><option>Kubwa</option>
                <option>Nyanya</option><option>Lugbe</option><option>Other</option>
              </select>
            </div>

            <div className="formGroup">
              <label>Skills / Interests</label>
              <input type="text" name="skills" value={formData.skills} onChange={handleChange} placeholder="e.g. Teaching, Medical, Photography" />
            </div>

            <div className="formGroup fullWidth">
              <label>Availability</label>
              <select name="availability" value={formData.availability} onChange={handleChange}>
                <option value="" disabled hidden>When can you volunteer?</option>
                <option>Weekends only</option>
                <option>Weekdays after 5pm</option>
                <option>Flexible / Full-time</option>
                <option>One-time events only</option>
              </select>
            </div>

            <div className="formGroup fullWidth">
              <label>Message (Optional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Why do you want to join V4C Abuja?"
                rows={4}
              />
            </div>
          </div>

          <button type="submit" disabled={!isFormValid} className="submitBtn">
            <MessageCircle size={28} />
            Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}