// import PropTypes from "prop-types";
import Section from 'components/common/Section/Section';
import Container from 'components/common/Container/Container';
import HeroSlider from 'components/HeroSlider/HeroSlider';
import FlexContainer from 'components/common/FlexContainer/FlexContainer';
import mainTitle from 'images/main-title/mobile/main-title.jpg';
import mainTitle2x from 'images/main-title/mobile/main-title@2x.jpg';
import './HeroSection.scss';

const Hero = props => {
  return (
    <Section type="section-hero">
      <Container>
        <FlexContainer type="hero-flex-container">
          <h1 className="main-title">
            <span className="visually-hidden">Ортопедичні матраци</span>
            <img
              src={mainTitle}
              srcSet={`${mainTitle} 1x, ${mainTitle2x} 2x`}
              alt="title"
              width="380"
              height="40"
            />
          </h1>
          <div className="box-slider">
            <HeroSlider />
          </div>
        </FlexContainer>
      </Container>
    </Section>
  );
};

Hero.propTypes = {};

export default Hero;
