import React from 'react';
import Slider from 'react-slick';

const SlickSlider = ({ children , option}) => {
  const settings = {
    dots: option?.dots ?? true,          // Show navigation dots
    infinite: true,      // Infinite loop sliding
    speed: 1000,          // Transition speed in ms
    slidesToShow: option?.desk || 3,     // Default number of slides on desktop
    slidesToScroll: 1,   // Number of slides to scroll at a time
    autoplay: false,      // Autoplay slides
    autoplaySpeed: 3000, // Autoplay speed in ms
    arrows:  true,
    responsive: [
      {
        breakpoint: 1024, // Desktop and above
        settings: {
          slidesToShow: option?.desk || 2,
        },
      },
      {
        breakpoint: 881, // Tablet
        settings: {
          slidesToShow: option?.tab || 2,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: option?.mob || 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {children}
    </Slider>
  );
};

export default SlickSlider;
