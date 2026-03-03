import { EDU } from "../data/content";
import { SecHead, ExpSection } from "../components/UI";

export default function Education({ t }) {
  return (
    <div style={{maxWidth:1100, margin:"0 auto", padding:"4rem 1.5rem 5rem"}}>
      <SecHead title="Education" sub="Academic Background" t={t}/>
      <ExpSection title="Degrees & Courses" items={EDU} t={t}/>
    </div>
  );
}
