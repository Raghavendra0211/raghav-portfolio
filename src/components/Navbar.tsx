import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV = [
  { label: "About",      id: "about"      },
  { label: "Skills",     id: "skills"     },
  { label: "Projects",   id: "projects"   },
  { label: "Creative",   id: "creative"   },
  { label: "Experience", id: "experience" },
  { label: "Contact",    id: "contact"    },
];

interface Props { scrollTo: (id: string) => void; }

export default function Navbar({ scrollTo }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      transition: "background 0.45s ease, border-color 0.45s ease",
      background: scrolled ? "rgba(8,8,8,0.9)" : "transparent",
      borderBottom: `1px solid ${scrolled ? "rgba(200,169,107,0.08)" : "transparent"}`,
      backdropFilter: scrolled ? "blur(18px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
    }}>
      <div className="wrap" style={{ height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <button onClick={() => scrollTo("home")}
          style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'DM Serif Display',serif", fontSize: "1.1rem", color: "var(--ivory)" }}>
          RAGHAV<span style={{ color: "var(--gold)" }}>.</span>
        </button>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "32px" }} className="desktop-nav">
          {NAV.map(n => (
            <button key={n.id} onClick={() => scrollTo(n.id)}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.8125rem", letterSpacing: "0.04em", color: "rgba(245,240,232,0.42)", transition: "color 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = "var(--ivory)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = "rgba(245,240,232,0.42)"; }}>
              {n.label}
            </button>
          ))}
        </nav>

        {/* Resume + hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <a href="/assets/resume/Raghav-Resume.pdf" download
            className="btn btn-outline desktop-nav"
            style={{ padding: "8px 18px", fontSize: "0.75rem" }}>
            <Download size={12} /> Resume
          </a>
          <button onClick={() => setOpen(o => !o)} aria-label="Menu"
            className="mobile-menu-btn"
            style={{ background: "none", border: "1px solid rgba(200,169,107,0.22)", borderRadius: "10px", width: "38px", height: "38px", display: "none", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--gold)" }}>
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25, ease: "easeOut" }}
            style={{ overflow: "hidden", background: "rgba(8,8,8,0.97)", borderTop: "1px solid rgba(200,169,107,0.07)" }}>
            <div className="wrap" style={{ paddingTop: "16px", paddingBottom: "24px", display: "flex", flexDirection: "column" }}>
              {NAV.map((n, i) => (
                <motion.button key={n.id}
                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => { scrollTo(n.id); setOpen(false); }}
                  style={{ background: "none", border: "none", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "14px 0", textAlign: "left", cursor: "pointer", fontSize: "0.9375rem", color: "rgba(245,240,232,0.5)" }}>
                  {n.label}
                </motion.button>
              ))}
              <a href="/assets/resume/Raghav-Resume.pdf" download
                className="btn btn-primary" style={{ alignSelf: "flex-start", marginTop: "16px" }}>
                <Download size={13} /> Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
