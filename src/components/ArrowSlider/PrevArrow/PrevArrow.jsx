import PropTypes from "prop-types";
import { HiArrowNarrowLeft } from "react-icons/hi";
import "./PrevArrow.scss";

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div className="slider-prev-arrow" onClick={onClick}>
      <HiArrowNarrowLeft />
    </div>
  );
};

PrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default PrevArrow;
