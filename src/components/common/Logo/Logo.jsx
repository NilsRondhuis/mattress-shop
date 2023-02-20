import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logoLight from 'images/logo/logo-light.jpg';
import logoDark from 'images/logo/logo-dark.jpg';
import logoMenu from 'images/logo/logo-menu.jpg';
import logoLight2x from 'images/logo/logo-light@2x.jpg';
import logoDark2x from 'images/logo/logo-dark@2x.jpg';
import logoMenu2x from 'images/logo/logo-menu@2x.jpg';
import './Logo.scss';

const checkImgType = place => {
  const images = {
    img: null,
    imgSet: null,
  };

  if (place === 'header') {
    images.img = logoLight;
    images.imgSet = `${logoLight} 1x, ${logoLight2x} 2x`;
  }
  if (place === 'footer') {
    images.img = logoDark;
    images.imgSet = `${logoDark} 1x, ${logoDark2x} 2x`;
  }
  if (place === 'menu') {
    images.img = logoMenu;
    images.imgSet = `${logoMenu} 1x, ${logoMenu2x} 2x`;
  }

  return images;
};

const Logo = ({ place, type }) => {
  const { img, imgSet } = checkImgType(place);
  return (
    <Link to="/" className={type ? `logo-company ${type}` : 'logo-company'}>
      <img
        src={img}
        srcSet={imgSet}
        alt="Логотип сайту"
        width="200"
        height="100"
      />
    </Link>
  );
};

Logo.propTypes = {
  place: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Logo;
