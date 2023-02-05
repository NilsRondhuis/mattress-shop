import { GiPostOffice } from 'react-icons/gi';
import { BsBoxSeam } from 'react-icons/bs';
import './DeliveryInfo.scss';

const DeliveryInfo = () => {
  return (
    <div className="delivery-info">
      <p className="subhead">Доставка по Україні - Нова Пошта</p>
      <ul className="list-info">
        <li className="item">
          <GiPostOffice className="icon" />
          <span>Самовивіз з віділення Нової Пошти. Самовивіз зі складу.</span>
        </li>
        <li className="item">
          <BsBoxSeam className="icon" />
          <span>Доставка кур'єром.</span>
        </li>
      </ul>
    </div>
  );
};

export default DeliveryInfo;
