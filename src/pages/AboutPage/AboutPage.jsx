import Section from 'components/common/Section/Section';
import Container from 'components/common/Container/Container';
import Tagline from 'components/common/Tagline/Tagline';
import sectionImg from 'images/about/mobile/item-1.jpg';
import sectionImg2x from 'images/about/mobile/item-1@2x.jpg';
import './AboutPage.scss';

const AboutPage = () => {
  return (
    <main>
      <Section type="section-about">
        <Container>
          <h2 className="section-title">Про нас</h2>
          <p className="text">
            <span className="bold">Markiz Company</span> виробництво та продаж
            ортопедичних матраців Relax. Наша спеціалізація – виробництво
            матраців на основі традиційного пружинного блоку «Бонель»,
            незалежного пружинного блоку «Pocketspring», а також безпружинних
            матраців із застосуванням у наповненні високоякісних матеріалів та
            високоміцних оббивних тканин.
          </p>
          <div className="box-img">
            <img
              src={sectionImg}
              srcSet={`${sectionImg} 1x, ${sectionImg2x} 2x`}
              alt="Робочий процес Markiz Company"
              width="450"
              height="297"
            />
          </div>
          <p className="text">
            Матраси нашого виробництва забезпечують найкраще співвідношення
            ціна/якість, комфорт та довговічність. Ми раді запропонувати Вам
            ортопедичні матраци різного ступеня жорсткості, з навантаженням на
            одне спальне місце від 50кг до 130кг. У нас кожен покупець зможе
            вибрати та купити ортопедичний матрац, який не тільки відповідатиме
            бажаним характеристикам, але й приємно порадує відносно невеликою
            вартістю.
          </p>

          <Tagline />
        </Container>
      </Section>
    </main>
  );
};

export default AboutPage;
