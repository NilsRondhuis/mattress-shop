import PropTypes from 'prop-types';
import './CartAmount.scss';

const CartAmount = ({ type, text, cost, sale }) => (
  <div className={type ?? ''}>
    <p className="amount-sale">
      Знижка: <span className="sale">{sale} грн.</span>
    </p>
    <p className="amount-cost">
      {text}: <span className="cost">{cost} грн.</span>
    </p>
  </div>
);

CartAmount.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  sale: PropTypes.number.isRequired,
};

export default CartAmount;
