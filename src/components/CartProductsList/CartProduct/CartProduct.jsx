import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteProductCart } from 'redux/cart/slice';
import { Link } from 'react-router-dom';
import { MdDeleteForever } from 'react-icons/md';
import './CartProduct.scss';

const CartProduct = ({
  id,
  name,
  img1x,
  img2x,
  size,
  oldPrice,
  newPrice,
  onToggle,
}) => {
  const dispatch = useDispatch();
  const handleDelete = productId => {
    dispatch(deleteProductCart(productId));
  };
  return (
    <div className="cart-product-card">
      <div className="box-content">
        <div className="box-img">
          <img
            srcSet={`${img1x} 1x, ${img2x} 2x`}
            src={img1x}
            alt={`Ортопедичний матрац ${name}`}
          />
        </div>
        <div className="box-info">
          <Link
            to={`/products/${name}`}
            className="cart-product-title"
            onClick={onToggle}
          >
            Ортопедичний матрац {name} <span className="size">{size} см</span>
          </Link>
          <span className="old-price">{oldPrice} грн.</span>
          <span className="new-price">{newPrice} грн.</span>
        </div>
      </div>
      <button
        type="button"
        className="delete-btn"
        aria-label="delete-cart-product"
        onClick={() => handleDelete(id)}
      >
        <MdDeleteForever className="icon" />
      </button>
    </div>
  );
};

CartProduct.propTypes = {};

export default CartProduct;
