import { forwardRef } from "react";
import "./SectionRef.scss";

const SectionRef = forwardRef((props, ref) => (
  <section ref={ref} className={props.type ? `${props.type}` : "section"}>
    {props.children}
  </section>
));

export default SectionRef;
