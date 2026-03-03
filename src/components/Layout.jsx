import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { yourName } from "../data/content";
import { Hamburger, Close } from "./Icons";
import { ThemeToggle } from "./UI";
import { D } from "../data/content";

const TABS = [
  ["home",        "Home"],
  ["animations",  "Animations"],
  ["photography", "Photography"],
  ["experience",  "Experience"],
  ["education",   "Education"],
  ["skills",      "Skills"],
];

export default function Layout({ children, t, isDark, setDark }) {
  const [mOpen, setMOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const path = location.pathname.replace(/^\/+/, "");
  const tab  = path === "" ? "home" : path.split("/")[0];

  return (
    <div style={{background:t.bg, minHeight:"100vh", color:t.text, fontFamily:"'Inter',sans-serif", transition:"background .3s,color .3s", overflowX:"hidden"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        html,body,#root{width:100%;overflow-x:hidden}
        .desk{display:flex!important}
        .mob{display:none!important}
        @media(max-width:700px){
          .desk{display:none!important}
          .mob{display:flex!important}
        }
      `}</style>

      {/* ── Nav ── */}
      <nav style={{background:t.nav, position:"sticky", top:0, zIndex:100, boxShadow:"0 2px 16px rgba(0,0,0,.22)", transition:"background .3s"}}>
        <div style={{maxWidth:1100, margin:"0 auto", padding:"0 1.5rem", display:"flex", alignItems:"center", justifyContent:"space-between", gap:"1rem"}}>

          {/* Logo */}
          <button onClick={() => navigate("/")} style={{fontFamily:"'Playfair Display',serif", color:t.navActive, fontSize:"1.2rem", fontWeight:700, letterSpacing:".04em", padding:"1rem 0", flexShrink:0, background:"none", border:"none", cursor:"pointer"}}>
            {yourName}
          </button>

          {/* Desktop links */}
          <ul className="desk" style={{listStyle:"none", gap:0, flexShrink:1, display:"flex"}}>
            {TABS.map(([id, label]) => (
              <li key={id}>
                <button
                  onClick={() => navigate(id === "home" ? "/" : `/${id}`)}
                  style={{
                    background:"none", border:"none", cursor:"pointer",
                    color: tab === id ? t.navActive : t.navText,
                    fontFamily:"'Inter',sans-serif", fontSize:".85rem", fontWeight:500,
                    letterSpacing:".1em", textTransform:"uppercase",
                    padding:"1.3rem 1.1rem", position:"relative",
                    transition:"color .2s", whiteSpace:"nowrap",
                  }}
                >
                  {label}
                  <span style={{
                    position:"absolute", bottom:0,
                    left:  tab === id ? "1rem" : "50%",
                    right: tab === id ? "1rem" : "50%",
                    height:3, background:t.navActive,
                    borderRadius:"2px 2px 0 0", transition:"left .25s,right .25s",
                  }}/>
                </button>
              </li>
            ))}
          </ul>

          {/* Controls */}
          <div style={{display:"flex", alignItems:"center", gap:".6rem", flexShrink:0}}>
            <span className="desk" style={{display:"flex"}}>
              <ThemeToggle isDark={isDark} setDark={setDark} t={t}/>
            </span>
            <button
              className="mob"
              onClick={() => setMOpen(o => !o)}
              style={{background:"none", border:"none", cursor:"pointer", color:t.navActive, display:"flex", alignItems:"center", padding:".3rem"}}
            >
              {mOpen ? <Close/> : <Hamburger/>}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mOpen && (
          <div style={{background:t.nav, borderTop:`1px solid rgba(255,255,255,.08)`, padding:".4rem 0"}}>
            {TABS.map(([id, label]) => (
              <button
                key={id}
                onClick={() => { navigate(id === "home" ? "/" : `/${id}`); setMOpen(false); }}
                style={{
                  display:"block", width:"100%", textAlign:"left",
                  background: tab === id ? "rgba(255,255,255,.08)" : "none",
                  border:"none", cursor:"pointer",
                  color: tab === id ? t.navActive : t.navText,
                  fontFamily:"'Inter',sans-serif", fontSize:".88rem", fontWeight:500,
                  letterSpacing:".1em", textTransform:"uppercase",
                  padding:".85rem 1.5rem", transition:"background .15s",
                }}
              >
                {label}
              </button>
            ))}
            <div style={{padding:".6rem 1.5rem .8rem"}}>
              <ThemeToggle isDark={isDark} setDark={setDark} t={t}/>
            </div>
          </div>
        )}
      </nav>

      {/* ── Page content ── */}
      {children}

      {/* ── Footer ── */}
      <footer style={{background:t.nav, color:"rgba(249,245,239,.6)", textAlign:"center", padding:"1.5rem", fontSize:".79rem", letterSpacing:".08em", transition:"background .3s"}}>
        © 2025 {yourName} &nbsp;·&nbsp;
        <a href="mailto:you@email.com" style={{color:t.navActive, textDecoration:"none"}}>you@email.com</a>
        &nbsp;·&nbsp;
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" style={{color:t.navActive, textDecoration:"none"}}>LinkedIn</a>
      </footer>
    </div>
  );
}
