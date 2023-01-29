import { useState } from "react";
// import PropTypes from "prop-types";
import { FaShoppingCart } from "react-icons/fa";
import "./ProductDetailsCard.scss";
import SizeOption from "./SizeOption/SizeOption";
import DeliveryInfo from "./DeliveryInfo/DeliveryInfo";
import AdditionalInfo from "./AdditionalInfo/AdditionalInfo";
import ProductInfo from "./ProductInfo/ProductInfo";

const ProductDetailsCard = ({ product }) => {
  const [size, setSize] = useState(product.sizes[0]);

  const onUpdateSize = (newSize) => {
    setSize(newSize);
  };

  return (
    <div className="product-details">
      <h2 className="section-title details-title">Матрац {product.name}</h2>
      <div className="box-img">
        <img
          srcSet={`${product.img1x} 1x, ${product.img2x} 2x`}
          src={product.img1x}
          alt={`Матрац ${product.name}`}
        />
      </div>

      <SizeOption
        product={product}
        currentSize={size}
        onUpdateSize={onUpdateSize}
      />

      <span className="new-price">{product.newPrice} грн.</span>
      <span className="old-price">{product.oldPrice} грн.</span>
      <button type="button" className="btn-add-cart">
        <FaShoppingCart className="icon" />
        Додати у кошик
      </button>

      <DeliveryInfo />
      <AdditionalInfo />
      <ProductInfo product={product} />
    </div>
  );
};

ProductDetailsCard.propTypes = {};

export default ProductDetailsCard;
