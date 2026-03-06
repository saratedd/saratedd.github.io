import { WORK, VOLUNTEER } from "../data/content";
import { SecHead, ExpSection } from "../components/UI";

export default function Experience({ t }) {
  return (
    <div style={{maxWidth:1100, margin:"0 auto", padding:"2rem 1.5rem 5rem"}}>
      <SecHead title="Experience" sub="Background" t={t}/>
      <ExpSection title="Work Experience"      items={WORK}      t={t}/>
      <ExpSection title="Volunteer Experience" items={VOLUNTEER} t={t}/>
    </div>
  );
}
