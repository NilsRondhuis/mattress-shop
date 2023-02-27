import Slider from 'react-slick';
import HeroSlide from 'components/HeroSlide/HeroSlide';
import NextArrow from 'components/ArrowSlider/NextArrow/NextArrow';
import PrevArrow from 'components/ArrowSlider/PrevArrow/PrevArrow';
import { Dots, PagingSlider } from 'components/PagingSlider/PagingSlider';
import heroConfig from 'data/hero-config';

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => <Dots dots={dots} />,
    customPaging: (i, onClick) => <PagingSlider onClick={onClick} />,
  };
  return (
    <Slider {...settings}>
      {heroConfig.map(({ id, title, text, bgi }) => (
        <div key={id}>
          <HeroSlide title={title} text={text} bgi={bgi} />
        </div>
      ))}
    </Slider>
  );
};

export default HeroSlider;
