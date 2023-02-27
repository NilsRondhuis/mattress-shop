import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import './PolicyLink.scss';

const PolicyLink = ({ text }) => {
  const location = useLocation();

  return (
    <Link to="/policy" className="policy-link" state={{ from: location }}>
      {text}
    </Link>
  );
};

PolicyLink.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PolicyLink;
