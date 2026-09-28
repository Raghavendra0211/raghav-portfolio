import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease }}>
      {children}
    </motion.div>
  );
}

const DISCIPLINES = [
  {
    label: "Photography",
    sub: "Portrait · Lifestyle · Travel · Events",
    desc: "Professional photography with a cinematic sensibility.",
    color: "#1a1208",
    accent: "rgba(200,169,107,0.3)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
        <circle cx="12" cy="13" r="4"/>
      </svg>
    ),
  },
  {
    label: "Videography",
    sub: "Events · Brands · Cinematic",
    desc: "Cinematic video production for events and brand content.",
    color: "#0f0a16",
    accent: "rgba(160,100,255,0.2)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="23 7 16 12 23 17 23 7"/>
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
      </svg>
    ),
  },
  {
    label: "Video Editing",
    sub: "Reels · Films · Promotional",
    desc: "After Effects, CapCut, Lightroom — colour grading and motion.",
    color: "#0d1218",
    accent: "rgba(60,160,240,0.2)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="23 4 23 10 17 10"/>
        <polyline points="1 20 1 14 7 14"/>
        <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
      </svg>
    ),
  },
  {
    label: "Graphic Design",
    sub: "Posters · Branding · Social",
    desc: "Poster design, visual identity and digital art.",
    color: "#121008",
    accent: "rgba(200,180,60,0.2)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
      </svg>
    ),
  },
];

export default function Creative() {
  return (
    <section id="creative" className="border-top" style={{ background: "#090909" }}>
      <div className="wrap">

        <FadeUp>
          <p className="eyebrow" style={{ marginBottom: "20px" }}>Creative Work</p>
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "clamp(40px,6vw,100px)", alignItems: "start", marginBottom: "72px" }}
          className="creative-top">
          <FadeUp delay={0.07}>
            <h2 className="heading">Beyond the code.</h2>
          </FadeUp>
          <FadeUp delay={0.14}>
            <p className="body" style={{ maxWidth: "480px" }}>
              Photography, videography, editing and graphic design — visual work with the same
              attention to detail I bring to technology. 2+ years of freelance experience.
            </p>
            <a href="http://theraghavvv.pixieset.com" target="_blank" rel="noreferrer"
              className="btn btn-primary" style={{ marginTop: "28px", display: "inline-flex" }}>
              View Photography Portfolio <ArrowUpRight size={14} />
            </a>
          </FadeUp>
        </div>

        {/* 4 discipline cards — no individual CTAs */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "14px" }}
          className="creative-grid">
          {DISCIPLINES.map((d, i) => (
            <FadeUp key={d.label} delay={0.07 * i}>
              <div
                style={{
                  display: "block", borderRadius: "20px", overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.07)", transition: "border-color 0.25s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-g)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)"; }}
              >
                {/* Visual block */}
                <div style={{
                  height: "160px", background: d.color, position: "relative", overflow: "hidden",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <div style={{
                    position: "absolute", inset: 0,
                    background: `radial-gradient(circle at 40% 50%, ${d.accent} 0%, transparent 65%)`,
                  }} />
                  <div style={{ position: "relative", color: "rgba(245,240,232,0.45)" }}>
                    {d.icon}
                  </div>
                </div>
                {/* Text — no CTA link */}
                <div style={{ padding: "22px 20px", background: "var(--surface)" }}>
                  <h3 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "1.1rem", color: "var(--ivory)", marginBottom: "6px" }}>
                    {d.label}
                  </h3>
                  <p style={{ fontSize: "0.75rem", color: "var(--gold)", letterSpacing: "0.05em", marginBottom: "10px" }}>
                    {d.sub}
                  </p>
                  <p className="caption" style={{ fontSize: "0.8125rem" }}>{d.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 1024px) { .creative-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 560px)  { .creative-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 720px)  { .creative-top  { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
