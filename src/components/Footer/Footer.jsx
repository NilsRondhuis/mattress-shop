import Container from 'components/common/Container/Container';
import FlexContainer from 'components/common/FlexContainer/FlexContainer';
import DesignLine from 'components/common/DesignLine/DesignLine';
import Logo from 'components/common/Logo/Logo';
import Address from 'components/Address/Address';
import Contacts from 'components/Contacts/Contacts';
import Socials from 'components/common/Socials/Socials';
import Copy from 'components/Copy/Copy';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <FlexContainer type="footer-flex-container">
          <div className="logo-container">
            <Logo place="footer" />
          </div>
          <Address />
          <DesignLine />
          <Contacts />

          <p className="time-work">з 8:00 до 21:00 без вихідних</p>
          <DesignLine />

          <Socials title="Ми в соціальних мережах" colorIcon="color-icon" />
          <DesignLine />
          <Copy />
        </FlexContainer>
      </Container>
    </footer>
  );
};

export default Footer;
