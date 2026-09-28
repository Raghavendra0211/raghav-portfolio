import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const CATS = [
  { label: "Programming", skills: ["Python","C","C++","Java","JavaScript","TypeScript","SQL"] },
  { label: "Frontend",    skills: ["React","Next.js","TypeScript","Tailwind CSS","Bootstrap","Vite"] },
  { label: "Backend",     skills: ["Node.js","Express","Flask","FastAPI","REST APIs"] },
  { label: "AI / ML",     skills: ["Machine Learning","NLP","Computer Vision","PyTorch","TensorFlow","Gemini API","OpenAI API","Hugging Face"] },
  { label: "Databases",   skills: ["MySQL","MongoDB","Firebase","Supabase"] },
  { label: "Tools",       skills: ["Git","GitHub","VS Code","Vercel","AWS"] },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" className="border-top">
      <div className="wrap" ref={ref}>

        <motion.p className="eyebrow" style={{ marginBottom: "20px" }}
          initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          Capabilities
        </motion.p>

        <motion.h2 className="heading" style={{ marginBottom: "64px" }}
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.08, ease }}>
          Skills &amp; Technologies
        </motion.h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px" }}
          className="skills-grid">
          {CATS.map((cat, i) => (
            <motion.div key={cat.label} className="card"
              style={{ padding: "32px" }}
              initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.05 * i, ease }}>
              <p className="eyebrow" style={{ marginBottom: "20px", color: "rgba(200,169,107,0.65)" }}>
                {cat.label}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {cat.skills.map(s => (
                  <span key={s} style={{
                    padding: "5px 13px", borderRadius: "100px",
                    border: "1px solid rgba(255,255,255,0.07)",
                    fontSize: "0.8125rem", color: "rgba(245,240,232,0.5)",
                  }}>
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .skills-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 560px) { .skills-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
