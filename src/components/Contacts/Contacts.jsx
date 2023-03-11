import PropTypes from 'prop-types';
import './Contacts.scss';

const Contacts = ({ color }) => {
  return (
    <ul className="contacts-list">
      <li className="item">
        <a
          href="tel:+380982200025"
          className={color ? `${color} tel-link` : 'tel-link'}
        >
          +380 (98) 220 00 25
        </a>
      </li>
      <li className="item">
        <a
          href="tel:+380932174935"
          className={color ? `${color} tel-link` : 'tel-link'}
        >
          +380 (93) 217 49 35
        </a>
      </li>
    </ul>
  );
};

Contacts.propTypes = {
  color: PropTypes.string,
};

export default Contacts;
