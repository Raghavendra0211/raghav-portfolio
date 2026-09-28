import { motion, useInView } from "framer-motion";
import { Trophy } from "lucide-react";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const ITEMS = [
  { name: "NeighborAid",   role: "Team Member",  track: "Community AI / Multi-Agent" },
  { name: "AlgoRhythms",   role: "Participant",   track: "AI / Creative Tech" },
  { name: "SevaSphere",    role: "Team Lead",     track: "Social Impact / Full-Stack" },
  { name: "HealVision",    role: "Participant",   track: "Healthcare AI / Computer Vision" },
  { name: "Pathfinder AI", role: "Developer",     track: "EdTech / AI Guidance" },
];

export default function Hackathons() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="hackathons" className="border-top">
      <div className="wrap" ref={ref}>

        <motion.p className="eyebrow" style={{ marginBottom: "20px" }}
          initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          Competitive Work
        </motion.p>

        <motion.h2 className="heading" style={{ marginBottom: "56px" }}
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.08, ease }}>
          Building under pressure.
        </motion.h2>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute", left: "11px", top: "8px", bottom: "8px", width: "1px",
            background: "linear-gradient(to bottom, rgba(200,169,107,0.3), rgba(200,169,107,0.05))",
          }} />

          <div style={{ paddingLeft: "40px", display: "flex", flexDirection: "column", gap: "8px" }}>
            {ITEMS.map((item, i) => (
              <motion.div key={item.name}
                className="card"
                style={{ padding: "24px 28px", position: "relative" }}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.08 + i * 0.07, ease }}>
                {/* Dot */}
                <div style={{
                  position: "absolute", left: "-34px", top: "50%", transform: "translateY(-50%)",
                  width: "10px", height: "10px", borderRadius: "50%",
                  background: "rgba(200,169,107,0.5)", border: "1px solid rgba(200,169,107,0.3)",
                }} />

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <div style={{
                      width: "32px", height: "32px", borderRadius: "10px", flexShrink: 0,
                      border: "1px solid rgba(200,169,107,0.15)", background: "rgba(200,169,107,0.06)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Trophy size={13} style={{ color: "var(--gold)" }} />
                    </div>
                    <div>
                      <h3 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "1.05rem", color: "var(--ivory)" }}>{item.name}</h3>
                      <p className="caption" style={{ fontSize: "0.8125rem" }}>{item.role}</p>
                    </div>
                  </div>
                  <span className="eyebrow" style={{
                    fontSize: "0.6rem", padding: "4px 12px", borderRadius: "100px",
                    border: "1px solid rgba(200,169,107,0.15)", color: "rgba(200,169,107,0.55)",
                  }}>
                    {item.track}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
