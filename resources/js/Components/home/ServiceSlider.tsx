import React, { useMemo } from 'react';
import Slider from 'react-slick';
import GradientCard from '../GradientCard';

const ServiceSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Desktop
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Medium (Tablet)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // Small (Mobile)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = useMemo(
    () => [
      {
        icon: '📊',
        title: 'OCS',
        subtitle: 'One Click Service untuk layanan pendidikan',
      },
      {
        icon: '🤝',
        title: 'CRM',
        subtitle: 'Customer Relationship Management untuk institusi pendidikan',
      },
      {
        icon: '💾',
        title: 'Data Center',
        subtitle: 'Data Center untuk penyimpanan data pendidikan',
      },
    ],
    []
  );

  return (
    <Slider {...settings}>
      {/* Item 1 */}
      {data.map((el, index) => (
        <GradientCard
          icon={el.icon}
          title={el.title}
          subtitle={el.subtitle}
          isTransparent={false}
          hasBorder={false}
          textColor="text-black"
          gradientFrom={'from-red-500'}
          gradientTo={'to-yellow-500'}
        />
      ))}
    </Slider>
  );
};

export default ServiceSlider;
