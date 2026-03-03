import { useState } from "react";
import { PHOTOS } from "../data/content";
import { SecHead } from "../components/UI";
import { ImageIcon } from "../components/Icons";

function PhotoCard({ item, t }) {
  const [err, setErr] = useState(false);
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        breakInside:"avoid", marginBottom:"1.2rem",
        border:`1px solid ${t.border}`, borderRadius:4, overflow:"hidden",
        transition:"all .25s",
        boxShadow: hov ? "0 8px 28px rgba(139,26,26,.18)" : "none",
        transform: hov ? "translateY(-3px)" : "translateY(0)",
      }}
    >
      {err ? (
        <div style={{background:t.ph, height:item.h, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:".4rem", color:t.muted, fontSize:".72rem", letterSpacing:".1em", textTransform:"uppercase"}}>
          <span style={{opacity:.32}}><ImageIcon/></span>
          {item.src.split("/").pop()}
        </div>
      ) : (
        <img src={item.src} alt="" onError={() => setErr(true)} style={{width:"100%", height:item.h, objectFit:"cover", display:"block"}}/>
      )}
    </div>
  );
}

export default function Photography({ t, cols }) {
  return (
    <div style={{maxWidth:1100, margin:"0 auto", padding:"4rem 1.5rem 5rem"}}>
      <SecHead title="Photography" sub="Visual Work" t={t}/>
      <div style={{columns:cols, columnGap:"1.2rem"}}>
        {PHOTOS.map((item, i) => <PhotoCard key={i} item={item} t={t}/>)}
      </div>
    </div>
  );
}
