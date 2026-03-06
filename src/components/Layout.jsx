import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { yourName, yourMail, yourLinkedin } from "../data/content";
import { Hamburger, Close } from "./Icons";
import { ThemeToggle } from "./UI";
import { D } from "../data/content";

const TABS = [
  ["home",       "About"],
  ["work",       "My Work"],
  ["experience", "Experience"],
  ["education",  "Education"],
  ["skills",     "Skills"],
];

export default function Layout({ children, t, isDark, setDark }) {
  const [mOpen, setMOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [workHover, setWorkHover] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const path = location.pathname.replace(/^\/+/, "");
  const tab  = path === "" ? "home" : path.split("/")[0];
  const workSection = path.startsWith("work/") ? path.split("/")[1] : null;

  return (
    <div style={{background:t.bg, minHeight:"100vh", color:t.text, fontFamily:"'Inter',sans-serif", transition:"background .3s,color .3s", overflowX:"hidden", display:"flex", flexDirection:"column"}}>
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
        .subnav-scroll{scrollbar-width:none}
        .subnav-scroll::-webkit-scrollbar{display:none}
        @keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
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
              <li key={id} style={{position:"relative"}}
                onMouseEnter={() => id === "work" && setWorkHover(true)}
                onMouseLeave={() => id === "work" && setWorkHover(false)}
              >
                <button
                  onClick={() => navigate(id === "home" ? "/" : id === "work" ? "/work/animations" : `/${id}`)}
                  style={{
                    background:"none", border:"none", cursor:"pointer",
                    color: tab === id ? t.navActive : t.navText,
                    fontFamily:"'Inter',sans-serif", fontSize:".85rem", fontWeight:500,
                    letterSpacing:".1em", textTransform:"uppercase",
                    padding:"1.3rem 1.1rem", position:"relative",
                    transition:"color .2s", whiteSpace:"nowrap",
                    display:"flex", alignItems:"center", gap:".35rem",
                  }}
                >
                  {label}
                  {id === "work" && (
                    <span style={{fontSize:".6rem", opacity:.7, transition:"transform .2s", display:"inline-block", transform: workHover ? "rotate(180deg)" : "rotate(0deg)"}}>▼</span>
                  )}
                  <span style={{
                    position:"absolute", bottom:0,
                    left:  tab === id ? "1rem" : "50%",
                    right: tab === id ? "1rem" : "50%",
                    height:3, background:t.navActive,
                    borderRadius:"2px 2px 0 0", transition:"left .25s,right .25s",
                  }}/>
                </button>

                {/* Work dropdown */}
                {id === "work" && workHover && (
                  <div style={{
                    position:"absolute", top:"100%", left:0,
                    background:t.nav, borderTop:`1px solid rgba(255,255,255,.08)`,
                    borderRadius:"0 0 6px 6px",
                    boxShadow:"0 8px 24px rgba(0,0,0,.25)",
                    minWidth:160, zIndex:200,
                    overflow:"hidden",
                  }}>
                    {[["animations","Animations"],["illustrations","Illustrations"],["photography","Photography"]].map(([sid, slabel]) => (
                      <button
                        key={sid}
                        onClick={() => { navigate(`/work/${sid}`); setWorkHover(false); }}
                        style={{
                          display:"block", width:"100%", textAlign:"left",
                          background: workSection === sid ? "rgba(255,255,255,.08)" : "none",
                          border:"none", cursor:"pointer",
                          color: workSection === sid ? t.navActive : t.navText,
                          fontFamily:"'Inter',sans-serif", fontSize:".78rem", fontWeight:500,
                          letterSpacing:".1em", textTransform:"uppercase",
                          padding:".75rem 1.2rem", transition:"background .15s",
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,.08)"}
                        onMouseLeave={e => e.currentTarget.style.background = workSection === sid ? "rgba(255,255,255,.08)" : "none"}
                      >
                        {slabel}
                      </button>
                    ))}
                  </div>
                )}
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

        {/* Mobile menu backdrop */}
        {mOpen && (
          <div
            onClick={() => { setMOpen(false); setWorkOpen(false); }}
            style={{position:"fixed", inset:0, zIndex:99}}
          />
        )}

        {/* Mobile menu */}
        {mOpen && (
          <div style={{background:t.nav, borderTop:`1px solid rgba(255,255,255,.08)`, padding:".4rem 0", position:"relative", zIndex:101}}>
            {TABS.map(([id, label]) => {
              if (id === "work") {
                return (
                  <div key={id}>
                    {/* My Work expandable row */}
                    <button
                      onClick={() => setWorkOpen(o => !o)}
                      style={{
                        display:"flex", width:"100%", textAlign:"left", alignItems:"center", justifyContent:"space-between",
                        background: tab === id ? "rgba(255,255,255,.08)" : "none",
                        border:"none", cursor:"pointer",
                        color: tab === id ? t.navActive : t.navText,
                        fontFamily:"'Inter',sans-serif", fontSize:".88rem", fontWeight:500,
                        letterSpacing:".1em", textTransform:"uppercase",
                        padding:".85rem 1.5rem", transition:"background .15s",
                      }}
                    >
                      {label}
                      <span style={{fontSize:".7rem", opacity:.7, marginLeft:".5rem"}}>{workOpen ? "▲" : "▼"}</span>
                    </button>
                    {workOpen && (
                      <div>
                        {[["animations","Animations"],["illustrations","Illustrations"],["photography","Photography"]].map(([sid, slabel]) => (
                          <button
                            key={sid}
                            onClick={() => { navigate(`/work/${sid}`); setMOpen(false); setWorkOpen(false); }}
                            style={{
                              display:"block", width:"100%", textAlign:"left",
                              background: workSection === sid ? "rgba(255,255,255,.06)" : "none",
                              border:"none", cursor:"pointer",
                              color: workSection === sid ? t.navActive : t.navText,
                              fontFamily:"'Inter',sans-serif", fontSize:".82rem", fontWeight:400,
                              letterSpacing:".08em", textTransform:"uppercase",
                              padding:".7rem 1.5rem .7rem 2.8rem", transition:"background .15s",
                              opacity: workSection === sid ? 1 : 0.75,
                            }}
                          >
                            {slabel}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
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
              );
            })}
            <div style={{padding:".6rem 1.5rem .8rem"}}>
              <ThemeToggle isDark={isDark} setDark={setDark} t={t}/>
            </div>
          </div>
        )}
      </nav>

      {/* ── Page content ── */}
      <main style={{flex:1}}>{children}</main>

      {/* ── Footer ── */}
      <footer style={{background:t.nav, color:"rgba(249,245,239,.6)", textAlign:"center", padding:"1.5rem", fontSize:".79rem", letterSpacing:".08em", transition:"background .3s"}}>
        © 2026 {yourName} &nbsp;·&nbsp;
        <a href={`mailto:${yourMail}`} style={{color:t.navActive, textDecoration:"none"}}>{yourMail}</a>
        &nbsp;·&nbsp;
        <a href={yourLinkedin} target="_blank" rel="noopener noreferrer" style={{color:t.navActive, textDecoration:"none"}}>LinkedIn</a>
      </footer>
    </div>
  );
}
