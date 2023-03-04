import './Address.scss';

const Address = () => {
  return (
    <address className="address">
      <ul className="address-list">
        <li className="item">
          <a href="/" className="address-link">
            м. Біла Церква вул. Таращанська 197
          </a>
        </li>
        <li className="item">
          <a href="tel:+380982200025" className="tel-link">
            +380 (98) 220 00 25
          </a>
        </li>
        <li className="item">
          <a href="tel:+380932174935" className="tel-link">
            +380 (93) 217 49 35
          </a>
        </li>
      </ul>
    </address>
  );
};

export default Address;
