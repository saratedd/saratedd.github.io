import { useNavigate } from "react-router-dom";
import { yourName, yourCity, yourMail, yourLinkedin, yourCVpath, homeDescription } from "../data/content";
import { Btn } from "../components/UI";
import { Mail, LinkedIn, FileText } from "../components/Icons";

export default function Home({ t }) {
  const navigate = useNavigate();

  const cards = [
    { label:"Specialty", value:"Art",      sub:"Motion Graphics · Illustration · Video Editing · Photography" },
    { label:"Based in",  value:yourCity,   sub:"Open to remote" },
    { label:"Currently", value:"Available",sub:"Open to full-time & freelance roles" },
  ];

  return (
    <div style={{maxWidth:1100, margin:"0 auto", padding:"clamp(2.5rem,7vh,5rem) 1.5rem clamp(3rem,8vh,5rem)"}}>
      <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,320px),1fr))", gap:"clamp(2.5rem,6vw,5rem)", alignItems:"center"}}>

        {/* Left: intro */}
        <div>
          <p style={{fontSize:".76rem", fontWeight:600, letterSpacing:".2em", textTransform:"uppercase", color:t.accent, marginBottom:"1rem"}}>Artist &amp; Creative</p>
          <h1 style={{fontFamily:"'Playfair Display',serif", fontSize:"clamp(2.4rem,6vw,4.8rem)", lineHeight:1.08, marginBottom:"1.4rem", color:t.text}}>
            Hi, I'm<br/><span style={{color:t.accent}}>{yourName}</span>
          </h1>
          <p style={{fontSize:"1rem", lineHeight:1.82, color:t.muted, maxWidth:520, marginBottom:"2rem"}}>
            {homeDescription}
          </p>
          <div style={{display:"flex", flexWrap:"wrap", gap:".75rem", marginBottom:"1.8rem", alignItems:"center"}}>
            <Btn label="View My Work →" t={t} onClick={() => navigate("/animations")}/>
            <Btn icon={<Mail/>}     label="Email me"    href={`mailto:${yourMail}`}                       t={t} outline/>
            <Btn icon={<LinkedIn/>} label="LinkedIn"    href={yourLinkedin}                               t={t} outline/>
            <Btn icon={<FileText/>} label="View my CV" href={yourCVpath}                                 t={t} outline/>
          </div>
        </div>

        {/* Right: info cards */}
        <div style={{display:"flex", flexDirection:"column", gap:"1rem"}}>
          {cards.map(c => (
            <div key={c.label} style={{background:t.surface, border:`1px solid ${t.border}`, borderRadius:4, padding:"1.25rem 1.4rem", transition:"all .3s"}}>
              <div style={{fontSize:".7rem", fontWeight:600, letterSpacing:".18em", textTransform:"uppercase", color:t.accent, marginBottom:".4rem"}}>{c.label}</div>
              <div style={{fontFamily:"'Playfair Display',serif", fontSize:"1.4rem", color:t.text}}>{c.value}</div>
              <p style={{fontSize:".85rem", color:t.muted, marginTop:".3rem"}}>{c.sub}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
