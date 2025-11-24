import React from 'react';
import './BannerCarousel.css'; // Pastikan Anda membuat file CSS ini juga

interface IBannerCaraousel {
  img: string;
  title: string;
  desc: string;
}

const BannerCarousel = ({ img, title, desc }: IBannerCaraousel) => {
  return (
    <div className="banner-container">
      <img src={img} alt="Sudin Pendidikan Jakarta Selatan" className="banner-image" />
      <div className="banner-overlay">
        <div className="banner-content">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">{title}</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default BannerCarousel;
