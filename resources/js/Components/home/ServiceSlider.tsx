import React, { useMemo } from 'react';
import Slider from 'react-slick';
import CardV3 from '../cardv3/CardV3';

const ServiceSlider = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
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
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <Slider {...settings}>
        {data.map((item, index) => (
          <CardV3 key={index} startColor="#1f1f1fff" endColor="#070707ff">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <span className="card-v3-icon">{item.icon}</span>
              <p className="card-v3-title">{item.title}</p>
              <p className="card-v3-sub-title">{item.subtitle}</p>
            </div>
          </CardV3>
        ))}
      </Slider>
    </div>
  );
};

export default ServiceSlider;
