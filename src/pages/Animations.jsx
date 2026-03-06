import { useState } from "react";
import { ANIMS } from "../data/content";
import { SecHead, Tag } from "../components/UI";
import { PlayIcon, DownloadSmall } from "../components/Icons";

function VideoCard({ item, t }) {
  const [err,    setErr]    = useState(false);
  const [hov,    setHov]    = useState(false);
  const [tapped, setTapped] = useState(false);
  const open = hov || tapped;
  const ext = item.projectFile ? item.projectFile.split(".").pop().toUpperCase() : "AEP";

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => { setHov(false); setTapped(false); }}
      onClick={() => { setHov(false); setTapped(o => !o); }}
      style={{
        breakInside:"avoid", marginBottom:"1.2rem",
        background:t.card, border:`1px solid ${t.border}`,
        borderRadius:4, overflow:"hidden", position:"relative",
        transition:"all .25s", cursor:"pointer",
        boxShadow: open ? "0 8px 28px rgba(139,26,26,.18)" : "none",
        transform: open ? "translateY(-3px)" : "translateY(0)",
      }}
    >
      {/* Video or placeholder */}
      {err ? (
        <div style={{background:t.ph, padding:"2.5rem 2rem", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:".5rem", color:t.muted, fontSize:".72rem", letterSpacing:".1em", textTransform:"uppercase"}}>
          <span style={{opacity:.32}}><PlayIcon/></span>
          {item.src.split("/").pop()}
        </div>
      ) : (
        <video autoPlay muted loop playsInline src={item.src} onError={() => setErr(true)} style={{width:"100%", display:"block", verticalAlign:"bottom"}}/>
      )}

      {/* Hover overlay */}
      <div style={{
        position:"absolute", inset:0,
        background: open ? t.overlayBg : "rgba(0,0,0,0)",
        backdropFilter: open ? "blur(1px)" : "none",
        display:"flex", flexDirection:"column",
        justifyContent:"center", alignItems:"center",
        padding:"1.4rem", gap:"1rem",
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

        {item.projectFile && (
          <a
            href={item.projectFile}
            download
            onClick={e => e.stopPropagation()}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,.26)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,.14)"}
            style={{
              display:"inline-flex", alignItems:"center", gap:".45rem",
              background:"rgba(255,255,255,.14)",
              border:"1.5px solid rgba(255,255,255,.4)",
              color:t.overlayText, borderRadius:2,
              padding:".5rem 1rem", fontSize:".75rem",
              fontWeight:700, letterSpacing:".12em", textTransform:"uppercase",
              textDecoration:"none", backdropFilter:"blur(4px)",
              transition:"background .2s", cursor:"pointer", whiteSpace:"nowrap",
            }}
          >
            <DownloadSmall/> Download .{ext} project
          </a>
        )}
      </div>

      {/* Tags */}
      {item.tags?.length > 0 && (
        <div style={{padding:".7rem .9rem", display:"flex", flexWrap:"wrap", gap:".4rem"}}>
          {item.tags.map(tag => <Tag key={tag} label={tag} t={t}/>)}
        </div>
      )}
    </div>
  );
}

export default function Animations({ t, cols, embedded }) {
  return (
    <div style={embedded ? {} : {maxWidth:1100, margin:"0 auto", padding:"4rem 1.5rem 5rem"}}>
      {!embedded && <SecHead title="Animations" sub="Selected Work" t={t}/>}
      <p style={{fontSize:".86rem", color:t.muted, marginBottom:"2rem", lineHeight:1.7}}>
        Hover or tap any animation to read about the project and download the source file.
      </p>
      <div style={{columns:cols, columnGap:"1.2rem"}}>
        {ANIMS.map((item, i) => <VideoCard key={i} item={item} t={t}/>)}
      </div>
    </div>
  );
}
