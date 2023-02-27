import Slider from 'react-slick';
import ReviewSlide from 'components/ReviewSlide/ReviewSlide';
import reviewsConfig from 'data/reviews-config';

const ReviewsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <div style={{ padding: '20px 0', overflow: 'hidden' }}>
      <Slider {...settings}>
        {reviewsConfig.map(({ id, img, img2x, name, text }) => (
          <div key={id}>
            <ReviewSlide img={img} img2x={img2x} name={name} text={text} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewsSlider;
