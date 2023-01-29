import PropTypes from "prop-types";
import "./Section.scss";

const Section = ({ type, children }) => {
  return <section className={type ? `${type}` : "section"}>{children}</section>;
};

Section.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
