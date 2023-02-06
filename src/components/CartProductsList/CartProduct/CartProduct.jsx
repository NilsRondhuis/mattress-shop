import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProductCart } from 'redux/cart/slice';
import CartCounter from '../CartCounter/CartCounter';
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
  quantity,
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

        <CartCounter id={id} quantity={quantity} />
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

CartProduct.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img1x: PropTypes.string.isRequired,
  img2x: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  oldPrice: PropTypes.number.isRequired,
  newPrice: PropTypes.number.isRequired,
  onToggle: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CartProduct;
