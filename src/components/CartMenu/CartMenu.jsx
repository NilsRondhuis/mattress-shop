import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCalculateAmount } from 'redux/cart/selectors';
import CheckoutProductsList from 'components/CheckoutProductsList/CheckoutProductsList';
import CartAmount from 'components/CartAmount/CartAmount';
import BtnLink from 'components/common/BtnLink/BtnLink';
import BtnClose from 'components/common/BtnClose/BtnClose';
import CartNoProduct from 'components/CartNoProduct/CartNoProduct';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './CartMenu.scss';

const CartMenu = ({ isOpen, onToggle, productsCart }) => {
  const location = useLocation();
  const amount = useSelector(selectCalculateAmount);

  return (
    <div className={isOpen ? 'cart-menu' : 'cart-menu is-hidden'}>
      <div className="cart-header">
        <h4 className="cart-title">Ваш кошик</h4>
        <BtnClose type="btn-close-cart" onClick={onToggle}>
          <AiOutlineCloseCircle className="icon" />
        </BtnClose>
      </div>
      {productsCart.length > 0 ? (
        <>
          <CheckoutProductsList
            productsCart={productsCart}
            onToggle={onToggle}
          />
          <CartAmount
            type="cart-amount"
            text="Всього разом"
            cost={amount.cost}
            sale={amount.sale}
          />
          <BtnLink
            to="/checkout"
            type="cart-order-btn"
            text="Оформити замовлення"
            state={{ from: location }}
          />
        </>
      ) : (
        <CartNoProduct text="У кошику немає товарів" />
      )}
    </div>
  );
};

CartMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func,
  productsCart: PropTypes.array,
};

export default CartMenu;
