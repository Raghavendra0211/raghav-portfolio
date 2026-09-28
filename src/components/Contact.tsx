import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { useRef, useState } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const SOCIALS = [
  { label: "GitHub",    href: "https://github.com/Raghavendra0211" },
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/raghav-832134300" },
  { label: "Instagram", href: "https://www.instagram.com/theraghavvvvv" },
  { label: "Threads",   href: "https://www.threads.com/@theraghavvvvv" },
  { label: "YouTube",   href: "https://www.youtube.com/@raghavvvvv01" },
  { label: "Portfolio", href: "http://theraghavvv.pixieset.com" },
];

const fieldStyle: React.CSSProperties = {
  width: "100%",
  padding: "15px 18px",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.03)",
  color: "#F5F0E8",
  fontSize: "0.9375rem",
  fontFamily: "'DM Sans', sans-serif",
  outline: "none",
  transition: "border-color 0.2s, background 0.2s",
};

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sub = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:raghavb889@gmail.com?subject=${sub}&body=${body}`;
  };

  const focus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "rgba(200,169,107,0.35)";
    e.target.style.background  = "rgba(200,169,107,0.04)";
  };
  const blur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "rgba(255,255,255,0.08)";
    e.target.style.background  = "rgba(255,255,255,0.03)";
  };

  return (
    <section id="contact" className="border-top">
      <div className="wrap" ref={ref}>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "clamp(40px,7vw,100px)", alignItems: "start" }}
          className="contact-grid">

          {/* LEFT */}
          <div>
            <motion.p className="eyebrow" style={{ marginBottom: "20px" }}
              initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}>
              Contact
            </motion.p>

            <motion.h2 className="heading" style={{ marginBottom: "16px" }}
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.08, ease }}>
              Have an idea?
            </motion.h2>

            <motion.p className="body" style={{ marginBottom: "44px" }}
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.18 }}>
              Let's build something meaningful.
            </motion.p>

            <motion.div style={{ display: "flex", flexDirection: "column", gap: "16px" }}
              initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.26, ease }}>

              <a href="mailto:raghavb889@gmail.com"
                style={{ display: "inline-flex", alignItems: "center", gap: "12px", textDecoration: "none", color: "rgba(245,240,232,0.5)", transition: "color 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold-lt)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(245,240,232,0.5)"; }}>
                <span style={{ width: "38px", height: "38px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Mail size={15} />
                </span>
                raghavb889@gmail.com
              </a>

              <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", color: "rgba(245,240,232,0.35)" }}>
                <span style={{ width: "38px", height: "38px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <MapPin size={15} />
                </span>
                Mangaluru, Karnataka, India
              </div>
            </motion.div>

            {/* Socials */}
            <motion.div style={{ marginTop: "40px", display: "flex", flexWrap: "wrap", gap: "8px" }}
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}>
              {SOCIALS.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  style={{ padding: "6px 14px", borderRadius: "100px", border: "1px solid rgba(255,255,255,0.08)", fontSize: "0.8rem", color: "rgba(245,240,232,0.38)", textDecoration: "none", transition: "all 0.2s", display: "inline-flex", alignItems: "center", gap: "4px" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = "var(--gold)"; el.style.borderColor = "var(--border-g)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = "rgba(245,240,232,0.38)"; el.style.borderColor = "rgba(255,255,255,0.08)"; }}>
                  {s.label} <ArrowUpRight size={10} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Form */}
          <motion.form onSubmit={onSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
            initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.15, ease }}>

            <input name="name" type="text" required placeholder="Your name"
              value={form.name} onChange={onChange} onFocus={focus} onBlur={blur}
              style={fieldStyle} />
            <input name="email" type="email" required placeholder="Your email"
              value={form.email} onChange={onChange} onFocus={focus} onBlur={blur}
              style={fieldStyle} />
            <textarea name="message" required rows={6} placeholder="Tell me about your idea..."
              value={form.message} onChange={onChange} onFocus={focus} onBlur={blur}
              style={{ ...fieldStyle, resize: "none" }} />

            <button type="submit" className="btn btn-primary" style={{ justifyContent: "center" }}>
              Send Message <ArrowUpRight size={14} />
            </button>
          </motion.form>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
