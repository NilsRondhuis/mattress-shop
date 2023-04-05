import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { deleteProductCart } from 'redux/cart/slice';
import { checkAtOwnSize } from 'services/checkAtOwnSize';
import Counter from '../Counter/Counter';
import { MdDeleteForever } from 'react-icons/md';
import './CheckoutProduct.scss';

const CheckoutProduct = ({
  id,
  name,
  img1x,
  img2x,
  size,
  oldPrice,
  newPrice,
  onToggle,
  quantity,
  sale,
}) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const checkingOnCheckoutPage = location.pathname.includes('checkout');
  const sizeText = checkAtOwnSize(size) ? 'розмір під замовлення' : size;

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
            Ортопедичний матрац {name} <span className="size">{sizeText}</span>
          </Link>

          {!checkAtOwnSize(size) && (
            <div>
              {sale && <span className="old-price">{oldPrice} грн.</span>}
              <span className="new-price">{newPrice} грн.</span>
            </div>
          )}
        </div>

        {!checkAtOwnSize(size) && <Counter id={id} quantity={quantity} />}
      </div>

      {!checkingOnCheckoutPage && (
        <button
          type="button"
          className="delete-btn"
          aria-label="delete-cart-product"
          onClick={() => handleDelete(id)}
        >
          <MdDeleteForever className="icon" />
        </button>
      )}
    </div>
  );
};

CheckoutProduct.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img1x: PropTypes.string.isRequired,
  img2x: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  oldPrice: PropTypes.number,
  newPrice: PropTypes.number,
  onToggle: PropTypes.func,
  quantity: PropTypes.number.isRequired,
};

export default CheckoutProduct;
