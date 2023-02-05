import PropTypes from 'prop-types';

const BtnClose = ({ children, type, onClick }) => (
  <button
    type="button"
    aria-label="button-close-cart"
    className={type}
    onClick={onClick}
  >
    {children}
  </button>
);

BtnClose.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BtnClose;
