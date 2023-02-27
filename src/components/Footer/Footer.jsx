import Address from 'components/Address/Address';
import Container from 'components/common/Container/Container';
import FlexContainer from 'components/common/FlexContainer/FlexContainer';
import Logo from 'components/common/Logo/Logo';
import Socials from 'components/common/Socials/Socials';
import Copy from 'components/Copy/Copy';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <FlexContainer type="footer-flex-container">
          <Logo place="footer" />
          <Address />
          <div className="content-box">
            <p className="time-work">з 8:00 до 21:00 без вихідних</p>
          </div>
          <div className="footer-socials-container">
            <Socials title="Ми в соціальних мережах" colorIcon="color-icon" />
          </div>
          <Copy />
        </FlexContainer>
      </Container>
    </footer>
  );
};

export default Footer;
