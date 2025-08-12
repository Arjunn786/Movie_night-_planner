import { useState } from "react";
import Section from "./Section.jsx";

export default function PlanForm() {
  const [form, setForm] = useState({
    title: "",
    date: "",
    location: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  return (
    <div>
      <h3>Plan Your Movie Night</h3>
      <Section title="Movie Title">
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          maxLength={30}
          className="form-field"
        />
        <div className="char-count">{form.title.length}/30</div>
      </Section>

      <Section title="Date">
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="form-field"
        />
      </Section>

      <Section title="Location">
        <input
          type="text"
          name="location"
          value={form.location}
          onChange={handleChange}
          className="form-field"
        />
      </Section>

      <Section title="Preview">
        <p>🎬 {form.title || "Untitled Movie"} on {form.date || "TBD"} at {form.location || "Unknown Location"}</p>
      </Section>
    </div>
  );
}
