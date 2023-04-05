import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logoLight from 'images/logo/mobile/logo-light.jpg';
import logoDark from 'images/logo/mobile/logo-dark.jpg';
import logoMenu from 'images/logo/mobile/logo-menu.jpg';
import logoLight2x from 'images/logo/mobile/logo-light@2x.jpg';
import logoDark2x from 'images/logo/mobile/logo-dark@2x.jpg';
import logoMenu2x from 'images/logo/mobile/logo-menu@2x.jpg';
import './Logo.scss';

const checkImgType = place => {
  const img1x = {
    img: null,
    imgSet: null,
  };

  if (place === 'header') {
    img1x.img = logoLight;
    img1x.imgSet = `${logoLight} 1x, ${logoLight2x} 2x`;
  }
  if (place === 'footer') {
    img1x.img = logoDark;
    img1x.imgSet = `${logoDark} 1x, ${logoDark2x} 2x`;
  }
  if (place === 'other') {
    img1x.img = logoMenu;
    img1x.imgSet = `${logoMenu} 1x, ${logoMenu2x} 2x`;
  }

  return img1x;
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
