import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { incrementProductCart, decrementProductCart } from 'redux/cart/slice';
import './Counter.scss';

const Counter = ({ id, quantity }) => {
  const dispatch = useDispatch();

  const handleIncrement = productId => {
    dispatch(incrementProductCart({ id: productId, increment: 1 }));
  };
  const handleDecrement = productId => {
    dispatch(decrementProductCart({ id: productId, increment: 1 }));
  };

  return (
    <div className="cart-counter">
      <button
        type="button"
        disabled={quantity === 1}
        onClick={() => handleDecrement(id)}
        className="counter-btn"
      >
        -
      </button>
      <span className="conter-value">{quantity}</span>
      <button
        type="button"
        onClick={() => handleIncrement(id)}
        className="counter-btn"
      >
        +
      </button>
    </div>
  );
};

Counter.propTypes = {
  id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Counter;
