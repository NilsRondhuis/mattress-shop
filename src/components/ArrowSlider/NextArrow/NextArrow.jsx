import PropTypes from "prop-types";
import { HiArrowNarrowRight } from "react-icons/hi";
import "./NextArrow.scss";

const NextArrow = ({ className, style, onClick }) => {
  return (
    <div className="slider-next-arrow" onClick={onClick}>
      <HiArrowNarrowRight />
    </div>
  );
};

NextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default NextArrow;
