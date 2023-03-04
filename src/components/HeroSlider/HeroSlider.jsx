import { useState } from 'react';
import Slider from 'react-slick';
import HeroSlide from 'components/HeroSlide/HeroSlide';
import NextArrow from 'components/ArrowSlider/NextArrow/NextArrow';
import PrevArrow from 'components/ArrowSlider/PrevArrow/PrevArrow';
import { Dots, PagingSlider } from 'components/PagingSlider/PagingSlider';
import heroConfig from 'data/hero-config';

const HeroSlider = () => {
  const [slider, setSlider] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    onSwipe: () => slider.slickPause(),
    appendDots: dots => <Dots dots={dots} />,
    customPaging: (i, onClick) => <PagingSlider onClick={onClick} />,
  };
  return (
    <Slider ref={slider => setSlider(slider)} {...settings}>
      {heroConfig.map(({ id, title, text, bgi }) => (
        <div key={id}>
          <HeroSlide title={title} text={text} bgi={bgi} />
        </div>
      ))}
    </Slider>
  );
};

export default HeroSlider;
