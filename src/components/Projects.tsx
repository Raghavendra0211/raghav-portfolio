import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

function GH({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

/* ── SVG project visuals ─────────────────────────── */

function VisualNeighborAid() {
  const cx = [80, 160, 240, 115, 205, 160];
  const cy = [90, 55, 90, 155, 155, 110];
  const edges: [number,number][] = [[0,1],[1,2],[2,4],[4,3],[3,0],[0,5],[1,5],[2,5],[3,5],[4,5]];
  return (
    <svg viewBox="0 0 320 210" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <radialGradient id="n1" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#0E1B2E"/>
          <stop offset="100%" stopColor="#070D18"/>
        </radialGradient>
      </defs>
      <rect width="320" height="210" fill="url(#n1)"/>
      {edges.map(([a,b],i) => (
        <line key={i} x1={cx[a]} y1={cy[a]} x2={cx[b]} y2={cy[b]}
          stroke="rgba(80,150,240,0.18)" strokeWidth="1.5"/>
      ))}
      {cx.map((x,i) => (
        <g key={i}>
          <circle cx={x} cy={cy[i]} r={i===5?13:7}
            fill={i===5?"rgba(70,160,255,0.15)":"none"}
            stroke={i===5?"rgba(80,160,255,0.65)":"rgba(80,150,240,0.4)"} strokeWidth="1.5"/>
          <circle cx={x} cy={cy[i]} r={i===5?5:3}
            fill={i===5?"rgba(90,170,255,0.9)":"rgba(80,150,240,0.55)"}/>
        </g>
      ))}
      <text x="160" y="196" textAnchor="middle" fill="rgba(70,140,240,0.3)"
        fontSize="8" letterSpacing="3" fontFamily="DM Sans, sans-serif">AI · COMMUNITY · NETWORK</text>
    </svg>
  );
}

function VisualAlgoRhythms() {
  const bars = [22,40,58,32,68,48,76,42,62,34,72,50,28,60,44];
  return (
    <svg viewBox="0 0 320 210" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <linearGradient id="a1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#120B22"/>
          <stop offset="100%" stopColor="#080512"/>
        </linearGradient>
        <linearGradient id="bgrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(180,90,255,0.9)"/>
          <stop offset="100%" stopColor="rgba(120,40,200,0.2)"/>
        </linearGradient>
      </defs>
      <rect width="320" height="210" fill="url(#a1)"/>
      {bars.map((h,i) => (
        <rect key={i} x={18+i*20} y={130-h} width="13" height={h}
          rx="4" fill="url(#bgrad)" opacity={0.55+i*0.02}/>
      ))}
      <path d={`M8 105 ${Array.from({length:32},(_,j)=>`L${j*10} ${105+Math.sin(j*0.55)*28}`).join(' ')}`}
        stroke="rgba(200,120,255,0.22)" strokeWidth="1.5" fill="none"/>
      <text x="160" y="196" textAnchor="middle" fill="rgba(180,90,255,0.3)"
        fontSize="8" letterSpacing="3" fontFamily="DM Sans, sans-serif">ALGORITHM · AI · HACKATHON</text>
    </svg>
  );
}

function VisualSevaSphere() {
  return (
    <svg viewBox="0 0 320 210" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <radialGradient id="s1" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#0C2018"/>
          <stop offset="100%" stopColor="#060E0A"/>
        </radialGradient>
        <radialGradient id="sg" cx="40%" cy="38%" r="65%">
          <stop offset="0%" stopColor="rgba(60,200,120,0.55)"/>
          <stop offset="100%" stopColor="rgba(30,110,70,0.15)"/>
        </radialGradient>
      </defs>
      <rect width="320" height="210" fill="url(#s1)"/>
      <circle cx="160" cy="100" r="52" fill="url(#sg)" stroke="rgba(60,200,120,0.3)" strokeWidth="1.5"/>
      <ellipse cx="160" cy="100" rx="52" ry="18" fill="none" stroke="rgba(60,200,120,0.2)" strokeWidth="1" strokeDasharray="3 3"/>
      <ellipse cx="160" cy="100" rx="78" ry="20" fill="none" stroke="rgba(60,200,120,0.1)" strokeWidth="1" strokeDasharray="4 5"/>
      {[[197,78],[123,122],[188,126],[132,74]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r={3+i%2} fill="rgba(60,210,120,0.7)"/>
      ))}
      <text x="160" y="196" textAnchor="middle" fill="rgba(60,190,110,0.3)"
        fontSize="8" letterSpacing="3" fontFamily="DM Sans, sans-serif">FULL-STACK · COMMUNITY</text>
    </svg>
  );
}

function VisualHealVision() {
  return (
    <svg viewBox="0 0 320 210" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <radialGradient id="h1" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="rgba(0,200,180,0.08)"/>
          <stop offset="100%" stopColor="transparent"/>
        </radialGradient>
      </defs>
      <rect width="320" height="210" fill="#060E0E"/>
      <rect width="320" height="210" fill="url(#h1)"/>
      {Array.from({length:9},(_,i)=>(
        <line key={`v${i}`} x1={i*38} y1="0" x2={i*38} y2="210" stroke="rgba(0,200,180,0.05)" strokeWidth="1"/>
      ))}
      {Array.from({length:7},(_,i)=>(
        <line key={`h${i}`} x1="0" y1={i*34} x2="320" y2={i*34} stroke="rgba(0,200,180,0.05)" strokeWidth="1"/>
      ))}
      <ellipse cx="160" cy="98" rx="56" ry="34" fill="none" stroke="rgba(0,210,180,0.5)" strokeWidth="1.5"/>
      <circle cx="160" cy="98" r="20" fill="none" stroke="rgba(0,220,190,0.6)" strokeWidth="1.5"/>
      <circle cx="160" cy="98" r="8" fill="rgba(0,230,200,0.85)"/>
      <circle cx="168" cy="91" r="3" fill="rgba(255,255,255,0.55)"/>
      <line x1="55" y1="98" x2="96" y2="98" stroke="rgba(0,210,180,0.35)" strokeWidth="1" strokeDasharray="4 3"/>
      <line x1="224" y1="98" x2="265" y2="98" stroke="rgba(0,210,180,0.35)" strokeWidth="1" strokeDasharray="4 3"/>
      <text x="160" y="196" textAnchor="middle" fill="rgba(0,200,180,0.3)"
        fontSize="8" letterSpacing="3" fontFamily="DM Sans, sans-serif">HEALTHCARE · AI · VISION</text>
    </svg>
  );
}

function VisualPathfinderAI() {
  const pts: [number,number][] = [[30,168],[65,140],[100,118],[140,128],[180,92],[220,104],[262,68],[295,85]];
  const d = pts.map((p,i)=>`${i===0?"M":"L"}${p[0]} ${p[1]}`).join(" ");
  return (
    <svg viewBox="0 0 320 210" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <linearGradient id="p1" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#15110A"/>
          <stop offset="100%" stopColor="#0A0905"/>
        </linearGradient>
        <linearGradient id="rg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(200,169,107,0.2)"/>
          <stop offset="100%" stopColor="rgba(200,169,107,0.85)"/>
        </linearGradient>
      </defs>
      <rect width="320" height="210" fill="url(#p1)"/>
      {Array.from({length:9},(_,r)=>Array.from({length:14},(_,c)=>(
        <circle key={`${r}-${c}`} cx={c*24+8} cy={r*23+6} r="1" fill="rgba(200,169,107,0.07)"/>
      )))}
      <path d={d} stroke="url(#rg)" strokeWidth="2" strokeDasharray="6 4" fill="none"/>
      {pts.map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y}
          r={i===0||i===pts.length-1?8:4}
          fill={i===0||i===pts.length-1?"rgba(200,169,107,0.9)":"rgba(200,169,107,0.5)"}/>
      ))}
      <text x="38" y="186" fill="rgba(200,169,107,0.45)" fontSize="9" fontFamily="DM Sans">A</text>
      <text x="290" y="100" fill="rgba(200,169,107,0.8)" fontSize="9" fontFamily="DM Sans">B</text>
      <text x="160" y="196" textAnchor="middle" fill="rgba(200,169,107,0.3)"
        fontSize="8" letterSpacing="3" fontFamily="DM Sans, sans-serif">EDTECH · AI · GUIDANCE</text>
    </svg>
  );
}

function VisualTealogy() {
  return (
    <svg viewBox="0 0 320 210" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <linearGradient id="t1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#180E08"/>
          <stop offset="100%" stopColor="#0C0805"/>
        </linearGradient>
        <linearGradient id="cup" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(190,120,55,0.65)"/>
          <stop offset="100%" stopColor="rgba(140,80,30,0.25)"/>
        </linearGradient>
      </defs>
      <rect width="320" height="210" fill="url(#t1)"/>
      {/* Cup */}
      <path d="M128 78 L137 158 Q160 168 183 158 L192 78 Z" fill="url(#cup)" stroke="rgba(190,120,55,0.45)" strokeWidth="1.5"/>
      {/* Handle */}
      <path d="M190 98 Q214 98 214 122 Q214 146 190 142" fill="none" stroke="rgba(190,120,55,0.5)" strokeWidth="2"/>
      {/* Saucer */}
      <ellipse cx="160" cy="162" rx="50" ry="8" fill="rgba(150,90,35,0.25)" stroke="rgba(190,120,55,0.3)" strokeWidth="1"/>
      {/* Steam */}
      {[[-20,0],[ 0,0],[20,0]].map(([dx],i)=>(
        <path key={i} d={`M${160+dx} 70 Q${157+dx} 56 ${162+dx} 42 Q${167+dx} 28 ${164+dx} 16`}
          fill="none" stroke="rgba(190,120,55,0.28)" strokeWidth="1.8" strokeLinecap="round"/>
      ))}
      {/* Brand */}
      <text x="160" y="128" textAnchor="middle" fill="rgba(200,140,80,0.55)"
        fontSize="13" letterSpacing="5" fontFamily="DM Serif Display, serif">TEALOGY</text>
      <text x="160" y="196" textAnchor="middle" fill="rgba(190,120,55,0.3)"
        fontSize="8" letterSpacing="3" fontFamily="DM Sans, sans-serif">WEB · BRAND · IDENTITY</text>
    </svg>
  );
}

/* ── Data ──────────────────────────────────────────── */
const PROJECTS = [
  { num:"01", name:"NeighborAid",   cat:"AI / Community",       desc:"AI-powered community coordination system connecting people with local assistance, resource sharing and emergency support.", tech:["Python","GenAI","FastAPI","React","MongoDB"],   Visual: VisualNeighborAid },
  { num:"02", name:"AlgoRhythms",   cat:"AI / Hackathon",       desc:"AI-driven project combining algorithms, machine learning and generative technology.",                                      tech:["Python","ML","React","Node.js"],                Visual: VisualAlgoRhythms },
  { num:"03", name:"SevaSphere",    cat:"Full-Stack / Community",desc:"Full-stack platform for volunteer coordination, service requests and community support.",                                  tech:["React","Node.js","MongoDB","Tailwind"],          Visual: VisualSevaSphere  },
  { num:"04", name:"HealVision",    cat:"Healthcare AI",         desc:"Computer-vision based healthcare project focused on intelligent visual analysis and diagnostic assistance.",               tech:["Python","TensorFlow","CV","Flask"],              Visual: VisualHealVision  },
  { num:"05", name:"Pathfinder AI", cat:"EdTech / AI",           desc:"AI-powered guidance system designed to help users navigate learning and career paths intelligently.",                     tech:["Python","NLP","FastAPI","React","Supabase"],     Visual: VisualPathfinderAI},
  { num:"06", name:"TEALOGY Café",  cat:"Web / Brand",           desc:"Modern digital experience for a café brand — immersive UI, strong visual identity and premium presentation.",            tech:["React","TypeScript","Framer Motion","Tailwind"], Visual: VisualTealogy     },
];

const GH_URL = "https://github.com/Raghavendra0211";

function Card({ p, idx }: { p: typeof PROJECTS[0]; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} className="card"
      style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}
      initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: (idx % 2) * 0.1, ease }}>
      {/* Visual */}
      <div style={{ width: "100%", aspectRatio: "16/9", flexShrink: 0 }}>
        <p.Visual />
      </div>
      {/* Body */}
      <div style={{ padding: "26px", display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "10px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
              <span style={{ fontFamily: "monospace", fontSize: "0.7rem", color: "rgba(200,169,107,0.38)" }}>{p.num}</span>
              <span className="eyebrow" style={{ fontSize: "0.6rem", color: "rgba(200,169,107,0.52)" }}>{p.cat}</span>
            </div>
            <h3 className="subheading" style={{ fontSize: "1.2rem" }}>{p.name}</h3>
          </div>
          <a href={GH_URL} target="_blank" rel="noreferrer" aria-label="GitHub"
            style={{ flexShrink:0, width:32, height:32, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", border:"1px solid rgba(255,255,255,0.08)", color:"rgba(245,240,232,0.28)", transition:"all 0.2s" }}
            onMouseEnter={e=>{const el=e.currentTarget as HTMLAnchorElement;el.style.color="var(--gold)";el.style.borderColor="var(--border-g)";}}
            onMouseLeave={e=>{const el=e.currentTarget as HTMLAnchorElement;el.style.color="rgba(245,240,232,0.28)";el.style.borderColor="rgba(255,255,255,0.08)";}}
          ><GH size={13}/></a>
        </div>
        <p className="caption" style={{ lineHeight: 1.65 }}>{p.desc}</p>
        <div style={{ display:"flex", flexWrap:"wrap", gap:"6px", marginTop:"auto", paddingTop:"8px" }}>
          {p.tech.map(t=>(
            <span key={t} style={{ padding:"4px 11px", borderRadius:"100px", border:"1px solid rgba(255,255,255,0.07)", fontSize:"0.75rem", color:"rgba(245,240,232,0.35)" }}>{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="projects" className="border-top">
      <div className="wrap">
        <div ref={ref}>
          <motion.p className="eyebrow" style={{ marginBottom:"20px" }}
            initial={{ opacity:0, y:14 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.6 }}>
            Selected Work
          </motion.p>
          <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", flexWrap:"wrap", gap:"16px", marginBottom:"56px" }}>
            <motion.h2 className="heading"
              initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.75, delay:0.08, ease }}>
              Things I've built.
            </motion.h2>
            <motion.a href={GH_URL} target="_blank" rel="noreferrer"
              initial={{ opacity:0 }} animate={inView?{opacity:1}:{}} transition={{ duration:0.6, delay:0.2 }}
              style={{ display:"inline-flex", alignItems:"center", gap:"6px", fontSize:"0.8125rem", color:"rgba(245,240,232,0.32)", textDecoration:"none", transition:"color 0.2s" }}
              onMouseEnter={e=>{(e.currentTarget as HTMLAnchorElement).style.color="var(--gold)";}}
              onMouseLeave={e=>{(e.currentTarget as HTMLAnchorElement).style.color="rgba(245,240,232,0.32)";}}>
              <GH size={14}/> GitHub Profile <ArrowUpRight size={12}/>
            </motion.a>
          </div>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"18px" }} className="proj-grid">
          {PROJECTS.map((p,i)=><Card key={p.name} p={p} idx={i}/>)}
        </div>
      </div>
      <style>{`
        @media (max-width: 720px) { .proj-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
