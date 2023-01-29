import React from "react";
import PropTypes from "prop-types";
import { BsFillChatRightQuoteFill } from "react-icons/bs";
import "./ReviewSlide.scss";
import FlexContainer from "components/common/FlexContainer/FlexContainer";

const ReviewSlide = ({ img, img2x, name, text }) => {
  return (
    <div className="review-slide">
      <div className="box">
        <FlexContainer type="review-flex-container">
          <div className="img-box">
            <img srcSet={`${img} 1x, ${img2x} 2x`} src={img} alt={name} />
          </div>
          <p className="author-name">{name}</p>
        </FlexContainer>
        <p>{text}</p>
        <BsFillChatRightQuoteFill className="icon" />
      </div>
    </div>
  );
};

ReviewSlide.propTypes = {
  img: PropTypes.string.isRequired,
  img2x: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ReviewSlide;
