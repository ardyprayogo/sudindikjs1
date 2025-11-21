import React from 'react';
import './BannerCarousel.css'; // Pastikan Anda membuat file CSS ini juga

const BannerCarousel = () => {
  return (
    <div className="banner-container">
      <img
        src="https://cdn.rri.co.id/berita-foto/Jakarta/o/1729388678907-IMG_1934/gojwieiabhcqod8.jpeg"
        alt="Sudin Pendidikan Jakarta Selatan"
        className="banner-image"
      />
      <div className="banner-overlay">
        <div className="banner-content">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Sudin Pendidikan</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            Kota Jakarta Selatan Wilayah 1
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerCarousel;
