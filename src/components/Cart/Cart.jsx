import React from "react";
// import PropTypes from "prop-types";
import { FaShoppingCart } from "react-icons/fa";
import "./Cart.scss";

const Cart = (props) => {
  return (
    <button type="button" className="cart">
      <FaShoppingCart className="icon-cart" color="#584d5d" />
    </button>
  );
};

Cart.propTypes = {};

export default Cart;
