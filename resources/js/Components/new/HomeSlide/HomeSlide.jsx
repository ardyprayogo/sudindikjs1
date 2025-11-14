// HomeSlide.jsx
import React from 'react';
import Slider from 'react-slick'; 
import './HomeSlide.css'; 

const HomeSlide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
    arrows: false,
  };

  const images = [
      'https://asset.kompas.com/crops/4mrbWWFX3ECNmDvhkH7Yo9TVtzE=/0x0:0x0/1200x800/data/photo/2020/09/30/5f741954eab58.jpeg',
      'https://cdn.rri.co.id/berita-foto/Jakarta/o/1729388678907-IMG_1934/gojwieiabhcqod8.jpeg',
      'https://selatan.jakarta.go.id/upload/thumbnail/202310010954_Before_20231001_095322_0000.png',

  ];

  const statsData = [
    { number: '20+', label: 'Tahun Pengalaman' },
    { number: '150+', label: 'Sekolah Binaan' }
  ];

  return (
    <div className="home-slide-container">
      {/* Bagian Kiri */}
      <div className="home-slide-left">
        <h1 className="main-title">Suku Dinas Pendidikan</h1>
        <h2 className="sub-title">Jakarta Selatan Wilayah 1</h2>
        <p className="description">
          Visi dan Misi kami untuk memajukan pendidikan di wilayah Jakarta Selatan.
        </p>
        <div className="button-group">
          <button className="cta-button primary">Lihat Program</button>
          <button className="cta-button secondary">Tentang Kami</button>
        </div>

        {/* Bagian Card Statistik */}
        <div className="stats-cards-container">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-card glassmorphism">
              <span className="statistic-number">{stat.number}</span>
              <span className="statistic-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bagian Kanan - Slideshow */}
      <div className="home-slide-right">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="slider-item">
              <img src={img} alt={`Slide ${index + 1}`} className="slider-image" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeSlide;

