import PropTypes from 'prop-types';
import { TfiMenu } from 'react-icons/tfi';
import './BtnMenu.scss';

const BtnMenu = ({ onToggle }) => {
  return (
    <button
      type="button"
      className="menu-btn"
      aria-label="menu"
      onClick={onToggle}
    >
      <TfiMenu className="menu" color="#584d5d" />
    </button>
  );
};

BtnMenu.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

export default BtnMenu;
