// import PropTypes from "prop-types";
import Address from "components/Address/Address";
import Container from "components/common/Container/Container";
import FlexContainer from "components/common/FlexContainer/FlexContainer";
import Copy from "components/Copy/Copy";
import Logo from "components/Logo/Logo";
import Socials from "components/Socials/Socials";
import "./Footer.scss";

const Footer = (props) => {
  return (
    <footer className="footer">
      <Container>
        <FlexContainer type="footer-flex-container">
          <Logo />
          <Address />
          <div className="content-box">
            <p className="time-work">з 8:00 до 21:00 без вихідних</p>
          </div>
          <Socials title="Ми в соціальних мережах" />
          <Copy />
        </FlexContainer>
      </Container>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
