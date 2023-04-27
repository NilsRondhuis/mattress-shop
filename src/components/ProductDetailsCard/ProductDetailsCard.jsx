import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { selectProductInCart } from 'redux/cart/selectors';
import { addProductToCart } from 'redux/cart/slice';
import { checkAtOwnSize } from 'services/checkAtOwnSize';
import SizeOption from './SizeOption/SizeOption';
import DeliveryInfo from './DeliveryInfo/DeliveryInfo';
import AdditionalInfo from './AdditionalInfo/AdditionalInfo';
import ProductInfo from './ProductInfo/ProductInfo';
import SizeInfo from './SizeInfo/SizeInfo';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import './ProductDetailsCard.scss';

import { createOldPrice } from 'services/createOldPrice';

const ProductDetailsCard = ({ product }) => {
  const dispatch = useDispatch();
  const productsCart = useSelector(selectProductInCart);
  const [newPrice, setNewPrice] = useState(product.newPrice);
  const [oldPrice, setOldPrice] = useState(
    createOldPrice(20, product.newPrice)
  );
  const [size, setSize] = useState(product.sizes[0]);
  const chekProductInCart = productsCart.some(
    productCart =>
      productCart.size === size && productCart.name === product.name
  );

  useEffect(() => {
    setNewPrice(product.newPriceList[size]);
    setOldPrice(createOldPrice(20, product.newPriceList[size]));
    window.dataLayer.push({ event: 'sawProduct', name: product.name });
  }, [size, product.newPriceList, product.oldPriceList, product.name]);

  const onUpdateSize = newSize => {
    setSize(newSize);
  };

  const addToCart = () => {
    const productToCart = {
      ...product,
      id: nanoid(),
      size,
      newPrice,
      oldPrice,
      initialOldPrice: oldPrice,
      initialNewPrice: newPrice,
    };
    window.dataLayer.push({ event: 'addToCart' });
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
          width="360"
          height="250"
          loading="lazy"
        />
      </div>

      <SizeOption
        product={product}
        currentSize={size}
        onUpdateSize={onUpdateSize}
      />

      {!checkAtOwnSize(size) && (
        <div>
          <span className="new-price">{newPrice} грн.</span>
          {product.sale && <span className="old-price">{oldPrice} грн.</span>}
        </div>
      )}

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

      <SizeInfo />
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
