import PropTypes from 'prop-types';
import { HiArrowNarrowRight } from 'react-icons/hi';
import './NextArrow.scss';

const NextArrow = ({ onClick }) => {
  return (
    <button
      className="slider-next-arrow"
      aria-label="next-arrow"
      onClick={onClick}
    >
      <HiArrowNarrowRight />
    </button>
  );
};

NextArrow.propTypes = {
  onClick: PropTypes.func,
};

export default NextArrow;
