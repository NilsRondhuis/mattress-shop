import React from "react";
import { BsWallet2 } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import "./AdditionalInfo.scss";

const AdditionalInfo = () => {
  return (
    <div className="additional-info">
      <ul className="additional-list">
        <li className="item">
          <BsWallet2 className="icon" />
          <p className="payment-text">
            <span className="subhead">Оплата.</span> Оплата під час отримання
            товару. Повна оплата на карту. Передплата на карту продавця.
          </p>
        </li>
        <li className="item">
          <CgFileDocument className="icon" />
          <p className="guarantee-text">
            <span className="subhead">Гарантія.</span>
            18 місяців офіційної гарантії від виробника.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default AdditionalInfo;
