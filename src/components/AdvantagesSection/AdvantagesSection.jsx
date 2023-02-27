import Section from 'components/common/Section/Section';
import Container from 'components/common/Container/Container';
import advantagesConfig from 'data/advantages-config';
import './AdvantagesSection.scss';

const AdvantagesSection = () => {
  return (
    <Section>
      <Container>
        <h3 className="section-title">Нас обирають тому, що:</h3>

        <ul className="advantages-list">
          {advantagesConfig.map(({ icon, title, text }) => (
            <li key={title} className="item">
              <div className="box-icon">
                <img
                  src={icon}
                  alt="Check"
                  width="23"
                  height="23"
                  loading="lazy"
                />
              </div>

              <div className="content-box">
                <h4 className="title">{title}</h4>
                <p className="text">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};

export default AdvantagesSection;
