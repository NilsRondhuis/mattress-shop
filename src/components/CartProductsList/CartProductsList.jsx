import React from 'react';
import PropTypes from 'prop-types';
import BtnLink from 'components/common/BtnLink/BtnLink';
import CartProduct from './CartProduct/CartProduct';
import './CartProductsList.scss';

const CartProductsList = ({ productsCart, onToggle }) => {
  const amount = productsCart.reduce((acc, item) => {
    acc += item.newPrice;
    return acc;
  }, 0);

  return (
    <>
      <ul className="cart-product-list">
        {productsCart.map(
          ({ id, name, img1x, img2x, size, oldPrice, newPrice }) => (
            <li key={id} className="item">
              <CartProduct
                id={id}
                name={name}
                img1x={img1x}
                img2x={img2x}
                size={size}
                oldPrice={oldPrice}
                newPrice={newPrice}
                onToggle={onToggle}
              />
            </li>
          )
        )}
      </ul>
      <p className="cart-amount">
        Всього разом: <span className="cart-price">{amount} грн.</span>
      </p>
      <BtnLink to="/" type="cart-order-btn" text="Оформити замовлення" />
    </>
  );
};

CartProductsList.propTypes = {};

export default CartProductsList;
