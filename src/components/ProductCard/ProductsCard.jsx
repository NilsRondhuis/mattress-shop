import React from "react";
import PropTypes from "prop-types";
import "./ProductsCard.scss";

const ProductCard = ({ name, img1x, img2x, oldPrice, newPrice, sale }) => {
  return (
    <div className="product-card">
      <div className="img-box">
        <img
          src={img1x}
          srcSet={`${img1x} 1x, ${img2x} 2x`}
          alt={`Матрац ${name}`}
        />
      </div>
      <div>
        <h3 className="product-name">{name}</h3>
        <p className="old-price">{oldPrice} грн.</p>
        <p className="new-price">{newPrice} грн.</p>
      </div>
      {sale && <span className="product-sale">sale</span>}
    </div>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  img1x: PropTypes.string.isRequired,
  img2x: PropTypes.string.isRequired,
  oldPrice: PropTypes.number.isRequired,
  newPrice: PropTypes.number.isRequired,
  sale: PropTypes.bool.isRequired,
};

export default ProductCard;
