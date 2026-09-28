import { motion } from "framer-motion";
import { Download, Mail, MoveRight } from "lucide-react";
import { lazy, Suspense } from "react";

const HeroCanvas = lazy(() => import("./HeroCanvas"));

interface Props { scrollTo: (id: string) => void; }

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero({ scrollTo }: Props) {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        paddingTop: "80px",
      }}
    >
      {/* Subtle particle backdrop */}
      <Suspense fallback={null}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <HeroCanvas />
        </div>
      </Suspense>

      {/* Ambient gold orb */}
      <div style={{
        position: "absolute", top: "15%", right: "20%",
        width: "700px", height: "700px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(200,169,107,0.04) 0%, transparent 65%)",
        pointerEvents: "none", zIndex: 1,
      }} />

      <div className="wrap" style={{ position: "relative", zIndex: 10, width: "100%", paddingTop: "40px", paddingBottom: "80px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px, 7vw, 100px)",
          alignItems: "center",
        }} className="hero-grid">

          {/* ── LEFT ── */}
          <div>
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              style={{ marginBottom: "24px" }}
            >
              AI/ML Engineer · Full-Stack Developer · Visual Creator
            </motion.p>

            <motion.h1
              className="display serif"
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease }}
              style={{ marginBottom: "20px" }}
            >
              Raghav
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease }}
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(1rem, 1.8vw, 1.35rem)",
                lineHeight: 1.45,
                color: "rgba(245,240,232,0.38)",
                fontStyle: "italic",
                marginBottom: "16px",
              }}
            >
              Building intelligent systems.{" "}
              <span style={{ display: "inline-block" }}>Creating visual experiences.</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.62, ease }}
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                color: "rgba(245,240,232,0.45)",
                maxWidth: "400px",
                marginBottom: "12px",
              }}
            >
              Mangaluru, Karnataka, India
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.68 }}
              style={{ marginBottom: "44px" }}
            >
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "7px",
                fontSize: "0.8125rem", color: "rgba(200,169,107,0.7)",
                border: "1px solid rgba(200,169,107,0.18)",
                borderRadius: "100px", padding: "5px 14px",
              }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--gold)", flexShrink: 0 }} />
                Open to collaborations
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8, ease }}
              style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
            >
              <button className="btn btn-primary" onClick={() => scrollTo("projects")}>
                View Work <MoveRight size={14} />
              </button>
              <a href="/assets/resume/Raghav-Resume.pdf" download className="btn btn-outline">
                <Download size={14} /> Resume
              </a>
              <button
                className="btn btn-outline"
                onClick={() => scrollTo("contact")}
                style={{ gap: "7px" }}
              >
                <Mail size={14} /> Contact
              </button>
            </motion.div>
          </div>

          {/* ── RIGHT: Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.3, ease }}
            style={{ position: "relative", display: "flex", justifyContent: "center" }}
          >
            {/* Glow ring */}
            <div style={{
              position: "absolute", inset: "-20px", borderRadius: "28px",
              background: "radial-gradient(ellipse at 60% 40%, rgba(200,169,107,0.09) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />

            {/* Gold-bordered frame */}
            <div style={{
              position: "relative", width: "100%", maxWidth: "420px",
              borderRadius: "26px", padding: "1.5px",
              background: "linear-gradient(145deg, rgba(200,169,107,0.4), rgba(255,255,255,0.04), rgba(200,169,107,0.15))",
            }}>
              <div style={{ borderRadius: "24.5px", overflow: "hidden", background: "#0e0e0e" }}>
                <img
                  src="/assets/images/raghav-profile.jpg?v=2"
                  alt="Raghav — AI/ML Engineer & Full-Stack Developer"
                  style={{
                    display: "block", width: "100%",
                    aspectRatio: "3/4", objectFit: "cover", objectPosition: "top center",
                  }}
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = "none";
                    const wrap = img.parentElement!;
                    wrap.style.minHeight = "480px";
                    wrap.style.display = "flex";
                    wrap.style.alignItems = "center";
                    wrap.style.justifyContent = "center";
                    wrap.style.flexDirection = "column";
                    wrap.style.gap = "8px";
                    wrap.innerHTML = `<div style="width:64px;height:64px;border-radius:50%;border:1px solid rgba(200,169,107,0.3);display:flex;align-items:center;justify-content:center;color:rgba(200,169,107,0.4);font-size:24px">R</div><p style="color:rgba(200,169,107,0.3);font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase">Photo not found</p>`;
                  }}
                />
                {/* Vignette overlay */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0, height: "45%",
                  background: "linear-gradient(to bottom, transparent, rgba(8,8,8,0.55))",
                  pointerEvents: "none",
                }} />
                {/* Location chip */}
                <div style={{
                  position: "absolute", bottom: "18px", left: "16px", right: "16px",
                  padding: "12px 16px", borderRadius: "14px",
                  background: "rgba(8,8,8,0.78)", backdropFilter: "blur(18px)",
                  border: "1px solid rgba(200,169,107,0.13)",
                }}>
                  <p style={{ fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 500 }}>
                    Based in
                  </p>
                  <p style={{ marginTop: "3px", fontSize: "0.875rem", color: "rgba(245,240,232,0.7)" }}>
                    Mangaluru, Karnataka, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2, duration: 1 }}
        style={{
          position: "absolute", bottom: "28px", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", zIndex: 10,
        }}
      >
        <div style={{ width: "1px", height: "36px", background: "linear-gradient(to bottom, transparent, rgba(200,169,107,0.28))" }} />
        <span style={{ fontSize: "0.6rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(200,169,107,0.28)" }}>scroll</span>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-grid > div:last-child { order: -1; }
        }
      `}</style>
    </section>
  );
}
