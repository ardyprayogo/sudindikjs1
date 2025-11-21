import React, { useMemo } from 'react';
import Slider from 'react-slick';
import GradientCard from './GradientCard';

export interface ICommonSlider {
  data: {
    icon: string;
    title: string;
    subtitle: string;
  }[];
  borderColor?: string;
  textColor?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

const CommonSlider = ({
  data,
  borderColor,
  textColor,
  gradientFrom,
  gradientTo,
}: ICommonSlider) => {
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

  return (
    <Slider {...settings}>
      {/* Item 1 */}
      {data.map((item, index) => (
        <GradientCard
          icon={item.icon}
          title={item.title}
          subtitle={item.subtitle}
          isTransparent={true}
          hasBorder={true}
          borderColor={borderColor || 'border-purple-500'}
          textColor={textColor || 'text-white'}
          gradientFrom={gradientFrom || 'from-blue-700'}
          gradientTo={gradientTo || 'to-purple-700'}
        />
      ))}
    </Slider>
  );
};

export default CommonSlider;
