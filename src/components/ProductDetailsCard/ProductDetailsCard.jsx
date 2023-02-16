import PropTypes from 'prop-types';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { selectProductInCart } from 'redux/cart/selectors';
import { addProductToCart } from 'redux/cart/slice';
import SizeOption from './SizeOption/SizeOption';
import DeliveryInfo from './DeliveryInfo/DeliveryInfo';
import AdditionalInfo from './AdditionalInfo/AdditionalInfo';
import ProductInfo from './ProductInfo/ProductInfo';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import './ProductDetailsCard.scss';

const ProductDetailsCard = ({ product }) => {
  const dispatch = useDispatch();
  const productsCart = useSelector(selectProductInCart);
  const [size, setSize] = useState(product.sizes[0]);
  const chekProductInCart = productsCart.some(
    productCart =>
      productCart.size === size && productCart.name === product.name
  );

  const onUpdateSize = newSize => {
    setSize(newSize);
  };

  const addToCart = () => {
    const productToCart = {
      ...product,
      id: nanoid(),
      size,
    };
    dispatch(addProductToCart(productToCart));
    toast.success('Товар у кошику 😊');
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
      <button
        type="button"
        className="btn-add-cart"
        onClick={() => addToCart(product.id)}
        disabled={chekProductInCart}
      >
        {chekProductInCart ? (
          <>
            <BsFillCartCheckFill className="icon" />
            Товар у кошику
          </>
        ) : (
          <>
            <FaShoppingCart className="icon" />
            Додати у кошик
          </>
        )}
      </button>

      <DeliveryInfo />
      <AdditionalInfo />
      <ProductInfo product={product} />
    </div>
  );
};

ProductDetailsCard.propTypes = {
  product: PropTypes.shape({
    sizes: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
    img1x: PropTypes.string,
    img2x: PropTypes.string,
    newPrice: PropTypes.number,
    oldPrice: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};

export default ProductDetailsCard;
