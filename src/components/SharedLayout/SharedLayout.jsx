// import PropTypes from "prop-types";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectProductInCart } from 'redux/cart/selectors';
import { Outlet } from 'react-router-dom';
import Container from 'components/common/Container/Container';
import FlexContainer from 'components/common/FlexContainer/FlexContainer';
import Backdrop from 'components/common/Backdrop/Backdrop';
import CartMenu from 'components/CartMenu/CartMenu';
import BtnMenu from 'components/BtnMenu/BtnMenu';
import Logo from 'components/common/Logo/Logo';
import Cart from 'components/Cart/Cart';
import Footer from 'components/Footer/Footer';
import './SharedLayout.scss';

const SharedLayout = props => {
  const [openCart, setOpenCart] = useState(false);
  const productsCart = useSelector(selectProductInCart);
  const quantityProductsInCart = productsCart.length;

  const toggleCart = () => {
    setOpenCart(!openCart);
  };

  return (
    <>
      <header className="header">
        <Container>
          <FlexContainer type="flex-container">
            <BtnMenu />
            <Logo />
            <Cart onToggleCart={toggleCart} quantity={quantityProductsInCart} />
          </FlexContainer>
        </Container>
      </header>
      <Outlet />
      <Footer />

      <Backdrop isOpen={openCart} onClose={toggleCart}>
        <CartMenu
          isOpen={openCart}
          onToggle={toggleCart}
          productsCart={productsCart}
        />
      </Backdrop>
    </>
  );
};

export default SharedLayout;
