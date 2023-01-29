// import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Container from "components/common/Container/Container";
import FlexContainer from "components/common/FlexContainer/FlexContainer";
import BtnMenu from "components/BtnMenu/BtnMenu";
import Logo from "components/Logo/Logo";
import Cart from "components/Cart/Cart";
import Footer from "components/Footer/Footer";
import "./SharedLayout.scss";

const SharedLayout = (props) => {
  return (
    <>
      <header className="header">
        <Container>
          <FlexContainer type="flex-container">
            <BtnMenu />
            <Logo />
            <Cart />
          </FlexContainer>
        </Container>
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
