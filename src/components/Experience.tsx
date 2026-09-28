import { motion, useInView } from "framer-motion";
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

export default function Experience() {
  return (
    <section id="experience" className="border-top">
      <div className="wrap">

        <FadeUp>
          <p className="eyebrow" style={{ marginBottom: "20px" }}>Experience</p>
        </FadeUp>
        <FadeUp delay={0.07}>
          <h2 className="heading" style={{ marginBottom: "60px" }}>
            Two years of{" "}
            <em style={{ color: "rgba(245,240,232,0.28)", fontStyle: "italic" }}>creative work.</em>
          </h2>
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="exp-grid">

          {/* Freelance card */}
          <FadeUp delay={0.1}>
            <div className="card" style={{ padding: "44px" }}>
              <p className="eyebrow" style={{ marginBottom: "12px" }}>2022 — Present</p>
              <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "20px" }}>
                <span style={{ fontFamily: "'DM Serif Display',serif", fontSize: "4rem", lineHeight: 1, color: "var(--gold)", opacity: 0.8 }}>2+</span>
                <span style={{ fontSize: "1rem", color: "rgba(245,240,232,0.45)" }}>Years</span>
              </div>
              <h3 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "1.4rem", marginBottom: "16px", color: "var(--ivory)" }}>
                Freelance Creative
              </h3>
              <p className="caption" style={{ marginBottom: "24px" }}>
                Photography · Videography · Video Editing · Graphic Design
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["After Effects","Photoshop","Lightroom","CapCut","Canva"].map(t => (
                  <span key={t} style={{ padding: "4px 12px", borderRadius: "100px", border: "1px solid rgba(255,255,255,0.07)", fontSize: "0.775rem", color: "rgba(245,240,232,0.38)" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Education card */}
          <FadeUp delay={0.18}>
            <div className="card" style={{ padding: "44px" }}>
              <p className="eyebrow" style={{ marginBottom: "12px" }}>2024 — 2028</p>
              <h3 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "1.4rem", marginBottom: "14px", color: "var(--ivory)" }}>
                B.E. Artificial Intelligence &amp; Machine Learning
              </h3>
              <p className="body" style={{ fontSize: "0.9375rem", marginBottom: "20px" }}>
                AJ Institute of Engineering &amp; Technology, Mangaluru
              </p>
              <div style={{ display: "flex", gap: "28px", flexWrap: "wrap" }}>
                <div>
                  <p className="eyebrow" style={{ fontSize: "0.6rem", marginBottom: "4px" }}>CGPA</p>
                  <p style={{ fontFamily: "'DM Serif Display',serif", fontSize: "2rem", color: "var(--gold)", lineHeight: 1 }}>9.0</p>
                  <p className="caption" style={{ fontSize: "0.75rem" }}>/ 10.0</p>
                </div>
                <div>
                  <p className="eyebrow" style={{ fontSize: "0.6rem", marginBottom: "4px" }}>Graduation</p>
                  <p style={{ fontFamily: "'DM Serif Display',serif", fontSize: "1.5rem", color: "rgba(245,240,232,0.7)", lineHeight: 1 }}>May 2028</p>
                </div>
              </div>
            </div>
          </FadeUp>

        </div>
      </div>

      <style>{`
        @media (max-width: 720px) { .exp-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
