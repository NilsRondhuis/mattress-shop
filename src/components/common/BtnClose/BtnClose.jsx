import PropTypes from 'prop-types';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './BtnClose.scss';

const BtnClose = ({ type, onClick }) => (
  <button
    type="button"
    aria-label="button-close"
    className={type ? `btn-close ${type}` : 'btn-close'}
    onClick={onClick}
  >
    <AiOutlineCloseCircle className="icon" />
  </button>
);

BtnClose.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default BtnClose;
