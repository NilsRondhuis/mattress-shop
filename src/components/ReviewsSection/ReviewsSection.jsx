import Section from 'components/common/Section/Section';
import Container from 'components/common/Container/Container';
import ReviewsSlider from 'components/ReviewsSlider/ReviewsSlider';
import './ReviewsSection.scss';

const Reviews = () => {
  return (
    <Section type="review-section">
      <Container>
        <h3 className="section-title review-title">Відгуки про нас</h3>
        <ReviewsSlider />
      </Container>
    </Section>
  );
};

export default Reviews;
