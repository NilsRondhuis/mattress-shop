import PropTypes from 'prop-types';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import CartProductsList from 'components/CartProductsList/CartProductsList';
import BtnClose from 'components/common/BtnClose/BtnClose';
import './CartMenu.scss';

const CartMenu = ({ isOpen, onToggle, productsCart }) => {
  return (
    <div className={isOpen ? 'cart-menu' : 'cart-menu is-hidden'}>
      <div className="cart-header">
        <h4 className="cart-title">Ваш кошик</h4>
        <BtnClose type="btn-close-cart" onClick={onToggle}>
          <AiOutlineCloseCircle className="icon" />
        </BtnClose>
      </div>
      {productsCart.length > 0 ? (
        <CartProductsList productsCart={productsCart} onToggle={onToggle} />
      ) : (
        <div className="cart-no-product-container">
          <p className="text">
            У кошику немає товарів <BsSearch className="icon" />
          </p>
        </div>
      )}
    </div>
  );
};

CartMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  productsCart: PropTypes.array,
};

export default CartMenu;