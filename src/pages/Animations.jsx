import { useState, useLayoutEffect, useRef } from "react";
import { ANIMS } from "../data/content";
import { SecHead, Tag } from "../components/UI";
import { PlayIcon, DownloadSmall } from "../components/Icons";

function VideoCard({ item, t, index }) {
  const [err,       setErr]       = useState(false);
  const [hov,       setHov]       = useState(false);
  const [tapped,    setTapped]    = useState(false);
  const [descSize,  setDescSize]  = useState(".9rem");
  const overlayRef  = useRef(null);
  const descRef     = useRef(null);
  const measured    = useRef(false);
  const open = hov || tapped;
  const ext = item.projectFile ? item.projectFile.split(".").pop().toUpperCase() : "AEP";

  useLayoutEffect(() => {
    if (!open || measured.current || !overlayRef.current || !descRef.current) return;
    measured.current = true;
    const overlay = overlayRef.current;
    const desc    = descRef.current;
    let size = 0.9;
    desc.style.fontSize = size + "rem";
    while (overlay.scrollHeight > overlay.clientHeight && size > 0.58) {
      size = parseFloat((size - 0.03).toFixed(2));
      desc.style.fontSize = size + "rem";
    }
    setDescSize(size + "rem");
  }, [open]);

  return (
    <div style={{
      breakInside:"avoid", marginBottom:"1.2rem",
      animation:"fadeUp .9s ease both",
      animationDelay:`${index * 0.12}s`,
    }}>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => { setHov(false); setTapped(false); }}
        onClick={() => { setHov(false); setTapped(o => !o); }}
        style={{
          borderRadius:8, overflow:"hidden", position:"relative",
          transition:"all .25s", cursor:"pointer",
          boxShadow: open ? "0 8px 28px rgba(139,26,26,.18)" : "none",
          transform: open ? "translateY(-3px)" : "translateY(0)",
        }}
      >
        {err ? (
          <div style={{background:t.ph, padding:"2.5rem 2rem", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:".5rem", color:t.muted, fontSize:".72rem", letterSpacing:".1em", textTransform:"uppercase"}}>
            <span style={{opacity:.32}}><PlayIcon/></span>
            {item.src.split("/").pop()}
          </div>
        ) : (
          <video autoPlay muted loop playsInline src={item.src} onError={() => setErr(true)} style={{width:"100%", display:"block", verticalAlign:"bottom"}}/>
        )}

        <div ref={overlayRef} style={{
          position:"absolute", inset:0,
          background: open ? t.overlayBg : "rgba(0,0,0,0)",
          backdropFilter: open ? "blur(1px)" : "none",
          display:"flex", flexDirection:"column",
          justifyContent:"center", alignItems:"center",
          padding:"1.4rem", gap:"1rem",
          opacity: open ? 1 : 0,
          transition:"opacity .3s ease, background .3s ease",
          pointerEvents: open ? "auto" : "none",
          overflow:"hidden",
        }}>
          <p ref={descRef} style={{
            color:t.overlayText, fontSize:descSize, lineHeight:1.7,
            textAlign:"center", fontFamily:"'Inter',sans-serif",
            fontWeight:400, maxWidth:300, textShadow:"0 1px 4px rgba(0,0,0,.4)",
          }}>
            {item.desc}
          </p>

          {item.tags?.length > 0 && (
            <div style={{display:"flex", flexWrap:"wrap", gap:".4rem", justifyContent:"center"}}>
              {item.tags.map(tag => <Tag key={tag} label={tag} t={t}/>)}
            </div>
          )}

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
      </div>
    </div>
  );
}

export default function Animations({ t, cols, embedded }) {
  return (
    <div style={embedded ? {} : {maxWidth:1100, margin:"0 auto", padding:"2rem 1.5rem 5rem"}}>
      {!embedded && <SecHead title="Animations" sub="Selected Work" t={t}/>}
      <p style={{fontSize:".86rem", color:t.muted, marginBottom:"2rem", lineHeight:1.7}}>
        Hover or tap any animation to read about the project and download the source file.
      </p>
      <div style={{columns:cols, columnGap:"1.2rem"}}>
        {ANIMS.map((item, i) => <VideoCard key={i} item={item} t={t} index={i}/>)}
      </div>
    </div>
  );
}
