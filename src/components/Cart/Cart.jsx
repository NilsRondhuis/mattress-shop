import PropTypes from 'prop-types';
import { FaShoppingCart } from 'react-icons/fa';
import './Cart.scss';

const Cart = ({ onToggleCart, quantity }) => {
  return (
    <div className="cart-container">
      <button type="button" className="cart" onClick={onToggleCart}>
        <FaShoppingCart className="icon-cart" color="#584d5d" />
      </button>
      {quantity > 0 && <span className="cart-count">{quantity}</span>}
    </div>
  );
};

Cart.propTypes = {
  onToggleCart: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Cart;
