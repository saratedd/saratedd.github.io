import { useState } from "react";
import { PHOTOS } from "../data/content";
import { SecHead, Tag } from "../components/UI";
import { ImageIcon } from "../components/Icons";

function PhotoCard({ item, t }) {
  const [err,    setErr]    = useState(false);
  const [hov,    setHov]    = useState(false);
  const [tapped, setTapped] = useState(false);
  const open = (hov || tapped) && (item.desc || item.tags?.length > 0);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => { setHov(false); setTapped(false); }}
      onClick={() => { setHov(false); setTapped(o => !o); }}
      style={{
        breakInside:"avoid", marginBottom:"1.2rem",
        border:`1px solid ${t.border}`, borderRadius:4, overflow:"hidden",
        position:"relative", transition:"all .25s", cursor: open || (item.desc || item.tags?.length > 0) ? "pointer" : "default",
        boxShadow: open ? "0 8px 28px rgba(139,26,26,.18)" : "none",
        transform: open ? "translateY(-3px)" : "translateY(0)",
      }}
    >
      {err ? (
        <div style={{background:t.ph, height:200, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:".4rem", color:t.muted, fontSize:".72rem", letterSpacing:".1em", textTransform:"uppercase"}}>
          <span style={{opacity:.32}}><ImageIcon/></span>
          {item.src.split("/").pop()}
        </div>
      ) : (
        <img src={item.src} alt="" onError={() => setErr(true)} style={{width:"100%", height:"auto", display:"block"}}/>
      )}

      {item.desc && (
        <div style={{
          position:"absolute", inset:0,
          background: open ? t.overlayBg : "rgba(0,0,0,0)",
          backdropFilter: open ? "blur(1px)" : "none",
          display:"flex", flexDirection:"column",
          justifyContent:"center", alignItems:"center",
          padding:"1.4rem",
          opacity: open ? 1 : 0,
          transition:"opacity .3s ease, background .3s ease",
          pointerEvents: open ? "auto" : "none",
        }}>
          <p style={{
            color:t.overlayText, fontSize:".9rem", lineHeight:1.7,
            textAlign:"center", fontFamily:"'Inter',sans-serif",
            fontWeight:400, maxWidth:300, textShadow:"0 1px 4px rgba(0,0,0,.4)",
          }}>
            {item.desc}
          </p>
        </div>
      )}

      {item.tags?.length > 0 && (
        <div style={{padding:".7rem .9rem", display:"flex", flexWrap:"wrap", gap:".4rem"}}>
          {item.tags.map(tag => <Tag key={tag} label={tag} t={t}/>)}
        </div>
      )}
    </div>
  );
}

export default function Photography({ t, cols, embedded }) {
  return (
    <div style={embedded ? {} : {maxWidth:1100, margin:"0 auto", padding:"4rem 1.5rem 5rem"}}>
      {!embedded && <SecHead title="Photography" sub="Visual Work" t={t}/>}
      <div style={{columns:cols, columnGap:"1.2rem"}}>
        {PHOTOS.map((item, i) => <PhotoCard key={i} item={item} t={t}/>)}
      </div>
    </div>
  );
}
