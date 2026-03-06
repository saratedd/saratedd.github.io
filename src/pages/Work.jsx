import { useParams } from "react-router-dom";
import Animations    from "./Animations";
import Photography   from "./Photography";
import Illustrations from "./Illustrations";

const VALID = ["animations", "illustrations", "photography"];

export default function Work({ t, cols }) {
  const { section = "animations" } = useParams();
  const active = VALID.includes(section) ? section : "animations";

  return (
    <div style={{ padding:"2rem 2rem 5rem" }}>
      {active === "animations"    && <Animations  t={t} cols={cols} embedded />}
      {active === "photography"   && <Photography t={t} cols={cols} embedded />}
      {active === "illustrations" && <Illustrations t={t} cols={cols} embedded />}
    </div>
  );
}
