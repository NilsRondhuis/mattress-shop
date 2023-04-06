import PropTypes from 'prop-types';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import './PrevArrow.scss';

const PrevArrow = ({ onClick }) => {
  return (
    <button
      className="slider-prev-arrow"
      aria-label="prev-arrow"
      onClick={onClick}
    >
      <HiArrowNarrowLeft />
    </button>
  );
};

PrevArrow.propTypes = {
  onClick: PropTypes.func,
};

export default PrevArrow;
