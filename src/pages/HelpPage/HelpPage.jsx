import React from "react";
// import PropTypes from "prop-types";
import { HiArrowNarrowLeft } from "react-icons/hi";
import Section from "components/common/Section/Section";
import Container from "components/common/Container/Container";
import BtnLink from "components/BtnLink/BtnLink";
import "./HelpPage.scss";

const HelpPage = (props) => {
  return (
    <main>
      <Section>
        <Container>
          <BtnLink
            to="/"
            text="назад на головну"
            type="btn-back"
            icon={<HiArrowNarrowLeft className="icon" />}
          />
        </Container>
      </Section>
    </main>
  );
};

HelpPage.propTypes = {};

export default HelpPage;
