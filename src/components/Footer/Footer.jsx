// import PropTypes from "prop-types";
import Address from 'components/Address/Address';
import Container from 'components/common/Container/Container';
import FlexContainer from 'components/common/FlexContainer/FlexContainer';
import Logo from 'components/common/Logo/Logo';
import Socials from 'components/common/Socials/Socials';
import Copy from 'components/Copy/Copy';
import './Footer.scss';

const Footer = props => {
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
