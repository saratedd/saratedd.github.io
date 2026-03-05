import { useNavigate, useParams } from "react-router-dom";
import Animations    from "./Animations";
import Photography   from "./Photography";
import Illustrations from "./Illustrations";

const SECTIONS = [
  { id: "animations",    label: "Animations"    },
  { id: "photography",   label: "Photography"   },
  { id: "illustrations", label: "Illustrations" },
];

function SubNav({ active, t, onSelect }) {
  return (
    <div style={{ display:"flex", gap:0, borderBottom:`2px solid ${t.border}`, marginBottom:"2.5rem" }}>
      {SECTIONS.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => onSelect(id)}
            style={{
              background:"none", border:"none", cursor:"pointer",
              fontFamily:"'Inter',sans-serif", fontSize:".88rem", fontWeight:500,
              letterSpacing:".08em", textTransform:"uppercase",
              padding:".75rem 1.4rem",
              color: isActive ? t.accent : t.muted,
              position:"relative", transition:"color .2s",
              borderBottom: isActive ? `2px solid ${t.accent}` : "2px solid transparent",
              marginBottom:"-2px",
            }}
          >
            {label}
          </button>
        );
      })}
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
