import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

function FadeUp({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease }}>
      {children}
    </motion.div>
  );
}

const PILLARS = [
  { n: "01", title: "AI / ML",       desc: "Building intelligent applications and AI-powered systems." },
  { n: "02", title: "Full-Stack",    desc: "Designing and developing modern web applications." },
  { n: "03", title: "Photography",   desc: "Portrait, lifestyle, travel and event photography." },
  { n: "04", title: "Creative",      desc: "Videography, editing and graphic design." },
];

export default function About() {
  return (
    <section id="about" className="border-top">
      <div className="wrap">

        <FadeUp><p className="eyebrow" style={{ marginBottom: "20px" }}>About</p></FadeUp>

        <FadeUp delay={0.07}>
          <h2 className="heading" style={{ marginBottom: "28px" }}>A little about me.</h2>
        </FadeUp>

        <FadeUp delay={0.14}>
          <p className="body" style={{ maxWidth: "680px", marginBottom: "72px" }}>
            AI/ML Engineering student at AJ Institute of Engineering &amp; Technology, Mangaluru —
            building AI-powered applications and full-stack web applications. Alongside technology,
            I work professionally in photography, videography, video editing and graphic design,
            with 2+ years of freelance experience.
          </p>
        </FadeUp>

        {/* 4 pillars */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1px", borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(200,169,107,0.08)" }}
          className="pillars">
          {PILLARS.map((p, i) => (
            <FadeUp key={p.n} delay={0.06 * i}>
              <div
                style={{ padding: "44px 32px", background: "var(--surface)", height: "100%", cursor: "default", transition: "background 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "var(--surface2)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "var(--surface)"; }}
              >
                <span style={{ display: "block", fontFamily: "monospace", fontSize: "0.75rem", color: "rgba(200,169,107,0.4)", marginBottom: "36px" }}>
                  {p.n}
                </span>
                <h3 className="subheading" style={{ marginBottom: "14px", fontSize: "1.35rem" }}>{p.title}</h3>
                <p className="caption">{p.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) { .pillars { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 480px) { .pillars { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
