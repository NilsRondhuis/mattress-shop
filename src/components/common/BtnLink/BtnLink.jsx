import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './BtnLink.scss';

const BtnLink = ({ to, type, text, icon, state, id }) => {
  return (
    <Link id={id ?? ''} to={to} className={type ?? 'link'} state={state}>
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
  id: PropTypes.string,
};

export default BtnLink;
