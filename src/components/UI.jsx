import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sun, Moon } from "./Icons";

// ─── Button ───────────────────────────────────────────────────────
export function Btn({ icon, label, href, t, outline, onClick, style: extraStyle }) {
  const [h, setH] = useState(false);
  const s = {
    display:"inline-flex", alignItems:"center", gap:".5rem",
    fontFamily:"'Inter',sans-serif", fontSize:".81rem", fontWeight:600,
    letterSpacing:".1em", textTransform:"uppercase",
    padding:".75rem 1.5rem", borderRadius:2, textDecoration:"none",
    cursor:"pointer", transition:"all .2s",
    border:`2px solid ${t.accent}`,
    background: outline ? (h ? t.accent : "transparent") : (h ? t.accentHov : t.accent),
    color: outline ? (h ? t.bg : t.accent) : t.bg,
    transform: h ? "translateY(-1px)" : "none",
    ...extraStyle,
  };
  if (href)
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer" style={s}
        onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
        {icon}{label}
      </a>
    );
  return (
    <button style={s} onClick={onClick}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
      {icon}{label}
    </button>
  );
}

// ─── Tag (navigates to /skills) ───────────────────────────────────
export function Tag({ label, t }) {
  const navigate = useNavigate();
  const s = {
    fontSize:".7rem", fontWeight:600, letterSpacing:".09em", textTransform:"uppercase",
    background:t.tagBg, border:`1px solid ${t.border}`, color:t.tagText,
    padding:".22rem .65rem", borderRadius:2, whiteSpace:"nowrap",
    transition:"all .25s", cursor:"pointer",
  };
  return <button onClick={() => navigate("/skills")} style={s}>{label}</button>;
}

// ─── Section heading ──────────────────────────────────────────────
export function SecHead({ title, sub, t }) {
  return (
    <div style={{marginBottom:"2.8rem", borderBottom:`2px solid ${t.accent}`, paddingBottom:"1.1rem", display:"flex", alignItems:"baseline", gap:"1rem"}}>
      <h2 style={{fontFamily:"'Playfair Display',serif", fontSize:"clamp(1.7rem,4vw,2.2rem)", color:t.text}}>{title}</h2>
      <span style={{fontSize:".76rem", fontWeight:600, letterSpacing:".18em", textTransform:"uppercase", color:t.accent}}>{sub}</span>
    </div>
  );
}

// ─── Theme toggle button ──────────────────────────────────────────
export function ThemeToggle({ isDark, setDark, t }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={() => setDark(d => !d)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        display:"flex", alignItems:"center", gap:".45rem",
        background: hov
          ? (isDark ? "#3a2e26" : "rgba(249,245,239,.18)")
          : (isDark ? "#2a2018" : "rgba(249,245,239,.1)"),
        border:`1.5px solid ${isDark ? "#4a3a2e" : "rgba(249,245,239,.22)"}`,
        borderRadius:20, cursor:"pointer", color:t.navActive,
        padding:".38rem .75rem .38rem .55rem",
        fontSize:".72rem", fontWeight:700, letterSpacing:".12em",
        textTransform:"uppercase", fontFamily:"'Inter',sans-serif",
        transition:"all .25s", whiteSpace:"nowrap",
      }}
    >
      <span style={{display:"flex", alignItems:"center", color:t.navActive}}>
        {isDark ? <Sun /> : <Moon />}
      </span>
      <span style={{color:t.navActive}}>{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}

// ─── Experience item row ──────────────────────────────────────────
export function ExpItem({ item, t, isLast }) {
  return (
    <div style={{
      display:"grid", gridTemplateColumns:"clamp(80px,16%,140px) 1fr",
      gap:"clamp(.8rem,3vw,2rem)", padding:"1.5rem 0",
      borderTop:`1px solid ${t.border}`,
      ...(isLast ? {borderBottom:`1px solid ${t.border}`} : {}),
    }}>
      <div style={{fontSize:".81rem", fontWeight:600, color:t.muted, paddingTop:".15rem"}}>{item.date}</div>
      <div>
        <h3 style={{fontFamily:"'Playfair Display',serif", fontSize:"1.1rem", color:t.text, marginBottom:".2rem"}}>{item.title}</h3>
        <div style={{fontSize:".87rem", fontWeight:600, color:t.accent, marginBottom:".55rem"}}>{item.company}</div>
        <p style={{fontSize:".89rem", lineHeight:1.7, color:t.muted}}>{item.desc}</p>
        <div style={{display:"flex", flexWrap:"wrap", gap:".4rem", marginTop:".75rem"}}>
          {item.tags.map(tag => <Tag key={tag} label={tag} t={t}/>)}
        </div>
      </div>
    </div>
  );
}

// ─── Experience section group ─────────────────────────────────────
export function ExpSection({ title, items, t }) {
  return (
    <div style={{marginBottom:"3.2rem"}}>
      <div style={{fontSize:".72rem", fontWeight:700, letterSpacing:".2em", textTransform:"uppercase", color:t.accent, marginBottom:"1.3rem"}}>{title}</div>
      {items.map((item, i) => (
        <ExpItem key={i} item={item} t={t} isLast={i === items.length - 1}/>
      ))}
    </div>
  );
}
