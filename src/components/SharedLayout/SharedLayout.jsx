import { useLocation } from 'react-router-dom';
import { useState, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { selectProductInCart } from 'redux/cart/selectors';
import { Outlet } from 'react-router-dom';
import Container from 'components/common/Container/Container';
import FlexContainer from 'components/common/FlexContainer/FlexContainer';
import Backdrop from 'components/common/Backdrop/Backdrop';
import CartMenu from 'components/CartMenu/CartMenu';
import NavMenu from 'components/NavMenu/NavMenu';
import BtnMenu from 'components/BtnMenu/BtnMenu';
import Logo from 'components/common/Logo/Logo';
import Cart from 'components/Cart/Cart';
import Footer from 'components/Footer/Footer';
import PageLoader from 'components/common/PageLoader/PageLoader';
import './SharedLayout.scss';

const SharedLayout = () => {
  const location = useLocation();
  const [openCart, setOpenCart] = useState(
    location.state?.backFromCheckout ?? false
  );
  const [openNavMenu, setOpenNavMenu] = useState(false);
  const productsCart = useSelector(selectProductInCart);
  const quantityProductsInCart = productsCart.length;

  const toggleCart = () => {
    setOpenCart(!openCart);
  };

  const toggleNavMenu = () => {
    setOpenNavMenu(!openNavMenu);
  };

  return (
    <>
      <header className="header">
        <Container>
          <FlexContainer type="flex-container">
            <BtnMenu onToggle={toggleNavMenu} />
            <Logo place="header" type="logo-header" />
            <Cart onToggleCart={toggleCart} quantity={quantityProductsInCart} />
          </FlexContainer>
        </Container>
      </header>
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
      <Footer />

      <Backdrop isOpen={openCart} onClose={toggleCart}>
        <CartMenu
          isOpen={openCart}
          onToggle={toggleCart}
          productsCart={productsCart}
        />
      </Backdrop>
      <Backdrop isOpen={openNavMenu} onClose={toggleNavMenu}>
        <NavMenu isOpen={openNavMenu} onToggle={toggleNavMenu} />
      </Backdrop>
    </>
  );
};

export default SharedLayout;
