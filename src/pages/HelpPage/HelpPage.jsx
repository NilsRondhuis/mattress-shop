// import PropTypes from "prop-types";
import Section from 'components/common/Section/Section';
import Container from 'components/common/Container/Container';
import BtnLink from 'components/common/BtnLink/BtnLink';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import HelpArticle from 'components/HelpArticle/HelpArticle';
import './HelpPage.scss';

const HelpPage = props => {
  return (
    <main>
      <Section type="section-help-page">
        <Container>
          <BtnLink
            to="/"
            text="назад на головну"
            type="btn-back"
            icon={<HiArrowNarrowLeft className="icon" />}
          />
          <HelpArticle />
        </Container>
      </Section>
    </main>
  );
};

HelpPage.propTypes = {};

export default HelpPage;
