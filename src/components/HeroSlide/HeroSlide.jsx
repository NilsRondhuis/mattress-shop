import PropTypes from 'prop-types';
import './HeroSlide.scss';

const HeroSlide = ({ title, text, bgi }) => {
  return (
    <div className="hero-slide">
      <div className={`box-img ${bgi}`}></div>
      <div className="box-content">
        <h2 className="title">{title}</h2>
        <p className="text">{text}</p>
      </div>
    </div>
  );
};

HeroSlide.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  bgi: PropTypes.string.isRequired,
};

export default HeroSlide;
