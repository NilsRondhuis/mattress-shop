import "./Address.scss";

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
          <a href="tel:+380681995425" className="tel-link">
            068 199 54 25
          </a>
        </li>
      </ul>
    </address>
  );
};

export default Address;
