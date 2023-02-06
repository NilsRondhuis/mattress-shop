// import PropTypes from "prop-types";
import Section from 'components/common/Section/Section';
import Container from 'components/common/Container/Container';
import BtnLink from 'components/common/BtnLink/BtnLink';
import './HelpSection.scss';

const Help = props => {
  return (
    <Section>
      <Container>
        <h2 className="visually-hidden">Як вибрати матрас</h2>
        <div className="help-card">
          <h3 className="title">Не знаєте як вибрати матрац?</h3>
          <BtnLink to="help" text="Читати далі" />
        </div>
      </Container>
    </Section>
  );
};

Help.propTypes = {};

export default Help;
