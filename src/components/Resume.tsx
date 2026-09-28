import { motion, useInView } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Resume() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="resume" className="border-top">
      <div className="wrap" ref={ref}>
        <motion.div
          className="card"
          style={{ padding: "clamp(36px,5vw,60px)", position: "relative", overflow: "hidden" }}
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, ease }}>

          {/* Ambient */}
          <div style={{
            position: "absolute", top: "-40px", right: "-40px", width: "200px", height: "200px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(200,169,107,0.05) 0%, transparent 70%)", pointerEvents: "none",
          }} />

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "28px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
              <div style={{
                width: "48px", height: "48px", borderRadius: "14px", flexShrink: 0,
                border: "1px solid rgba(200,169,107,0.22)", background: "rgba(200,169,107,0.07)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <FileText size={20} style={{ color: "var(--gold)" }} />
              </div>
              <div>
                <p className="eyebrow" style={{ marginBottom: "6px" }}>Resume</p>
                <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(1.5rem,3vw,2rem)", color: "var(--ivory)", marginBottom: "6px" }}>
                  Raghav's CV
                </h2>
                <p className="caption">AI/ML Engineer · Full-Stack Developer · Creative Professional</p>
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <a href="/assets/resume/Raghav-Resume.pdf" target="_blank" rel="noreferrer"
                className="btn btn-outline">
                <FileText size={14} /> View Resume
              </a>
              <a href="/assets/resume/Raghav-Resume.pdf" download
                className="btn btn-primary">
                <Download size={14} /> Download PDF
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
