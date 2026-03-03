import { useState } from "react";
import { SKILLS_CATEGORIES } from "../data/content";
import { SecHead } from "../components/UI";
import { SkillIcon } from "../components/Icons";

function SkillChip({ name, color, t }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display:"inline-flex", alignItems:"center", gap:".55rem",
        background: hov ? `${color}18` : t.surface,
        border:`1.5px solid ${hov ? color : t.border}`,
        borderRadius:4, padding:".6rem 1rem",
        transition:"all .2s", cursor:"default",
        transform: hov ? "translateY(-2px)" : "none",
        boxShadow: hov ? `0 4px 14px ${color}22` : "none",
      }}
    >
      <SkillIcon name={name} size={18} color={hov ? color : t.muted}/>
      <span style={{
        fontSize:".82rem", fontWeight:600, letterSpacing:".07em",
        color: hov ? color : t.text,
        transition:"color .2s", whiteSpace:"nowrap",
      }}>
        {name}
      </span>
    </div>
  );
}

export default function Skills({ t }) {
  return (
    <div style={{maxWidth:1100, margin:"0 auto", padding:"4rem 1.5rem 5rem"}}>
      <SecHead title="Skills" sub="Tools & Expertise" t={t}/>
      <div style={{display:"flex", flexDirection:"column", gap:"3rem"}}>
        {SKILLS_CATEGORIES.map(({ category, color, skills }) => (
          <div key={category}>
            {/* Category header */}
            <div style={{display:"flex", alignItems:"center", gap:".75rem", marginBottom:"1.4rem"}}>
              <span style={{
                fontSize:".7rem", fontWeight:700, letterSpacing:".22em", textTransform:"uppercase",
                color, background:`${color}18`, border:`1.5px solid ${color}40`,
                padding:".3rem .85rem", borderRadius:20,
              }}>
                {category}
              </span>
              <div style={{flex:1, height:1, background:t.border}}/>
            </div>

            {/* Skill chips */}
            <div style={{display:"flex", flexWrap:"wrap", gap:".75rem"}}>
              {skills.map(({ name }) => (
                <SkillChip key={name} name={name} color={color} t={t}/>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
