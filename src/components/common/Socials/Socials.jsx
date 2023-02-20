import PropTypes from 'prop-types';
import { BsFacebook } from 'react-icons/bs';
import './Socials.scss';

const Socials = ({ title, typeList, colorIcon }) => {
  return (
    <>
      {title && <h4 className="title-socials">{title}</h4>}
      <ul className={typeList ? `${typeList} list-social` : 'list-social'}>
        <li className="item">
          <a
            href="https://www.facebook.com/pages/%D0%A0%D0%B5%D0%BB%D0%B0%D0%BA%D1%81/277590729114064"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="facebook"
            className="link-social"
          >
            <BsFacebook className={`icon ${colorIcon}`} />
          </a>
        </li>
      </ul>
    </>
  );
};

Socials.propTypes = {
  title: PropTypes.string,
};

export default Socials;
