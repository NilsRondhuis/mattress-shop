// import PropTypes from "prop-types";
import Section from "components/common/Section/Section";
import Container from "components/common/Container/Container";
import HeroSlider from "components/HeroSlider/HeroSlider";
import "./HeroSection.scss";
import FlexContainer from "components/common/FlexContainer/FlexContainer";

const Hero = (props) => {
  return (
    <Section type="section-hero">
      <Container>
        <FlexContainer type="hero-flex-container">
          <h1 className="main-title">Ортопедичні матраци</h1>
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
