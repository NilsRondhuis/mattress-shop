import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import './CartNoProduct.scss';

const CartNoProduct = ({ text }) => {
  return (
    <div className="cart-no-product-container">
      <p className="text">
        {text} <BsSearch className="icon" />
      </p>
    </div>
  );
};

CartNoProduct.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CartNoProduct;
