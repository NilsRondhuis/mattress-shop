import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./BtnLink.scss";

const BtnLink = ({ to, type, text, icon, state }) => {
  return (
    <Link to={to} className={type ?? "link"} state={state}>
      {icon && icon}
      <span>{text}</span>
    </Link>
  );
};

BtnLink.propTypes = {
  to: PropTypes.string.isRequired,
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  icon: PropTypes.node,
  state: PropTypes.object,
};

export default BtnLink;
