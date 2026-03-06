import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Animations    from "./Animations";
import Photography   from "./Photography";
import Illustrations from "./Illustrations";

const SECTIONS = [
  { id: "animations",    label: "Animations"    },
  { id: "photography",   label: "Photography"   },
  { id: "illustrations", label: "Illustrations" },
];

function InactiveTab({ id, label, t, onSelect }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={() => onSelect(id)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? t.tagBg : "transparent",
        border: `1.5px solid ${hov ? t.accent : t.border}`,
        borderRadius: 2,
        cursor: "pointer",
        fontFamily: "'Inter',sans-serif",
        fontSize: ".72rem", fontWeight: 600,
        letterSpacing: ".13em", textTransform: "uppercase",
        color: hov ? t.accent : t.muted,
        padding: ".35rem .85rem",
        transition: "all .2s",
        transform: hov ? "scale(1.07)" : "scale(1)",
        transformOrigin: "center bottom",
      }}
    >
      {label}
    </button>
  );
}

function SubNav({ active, t, onSelect }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: ".6rem", flexWrap: "wrap",
      borderBottom: `2px solid ${t.accent}`,
      paddingBottom: "1.1rem", marginBottom: "2.8rem",
    }}>
      {SECTIONS.map(({ id, label }) =>
        active === id
          ? <span key={id} style={{
              background: t.accent,
              border: `1.5px solid ${t.accent}`,
              borderRadius: 2,
              fontFamily: "'Inter',sans-serif",
              fontSize: ".72rem", fontWeight: 600,
              letterSpacing: ".13em", textTransform: "uppercase",
              color: t.bg,
              padding: ".35rem .85rem",
              display: "inline-block",
            }}>{label}</span>
          : <InactiveTab key={id} id={id} label={label} t={t} onSelect={onSelect} />
      )}
    </div>
  );
}


export default function Work({ t, cols }) {
  const { section = "animations" } = useParams();
  const navigate = useNavigate();

  const active = SECTIONS.some(s => s.id === section) ? section : "animations";

  const handleSelect = (id) => navigate(`/work/${id}`);

  return (
    <div style={{ maxWidth:1100, margin:"0 auto", padding:"4rem 1.5rem 5rem" }}>
      <SubNav active={active} t={t} onSelect={handleSelect} />
      {active === "animations"    && <Animations  t={t} cols={cols} embedded />}
      {active === "photography"   && <Photography t={t} cols={cols} embedded />}
      {active === "illustrations" && <Illustrations t={t} cols={cols} embedded />}
    </div>
  );
}
