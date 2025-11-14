// ImageSlider.jsx
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const [slides] = useState([
    {
      id: 1,
      title: 'SANTOSO',
      image: '/images/Picture1.png',
      description: 'Kepala Suku Dinas Pendidikan Wilayah I Kota Administrasi Jakarta Selatan',
    },
    {
      id: 2,
      title: 'IBNU HAJAR',
      image: '/images/Picture2.png',
      description: 'Subbagian Tata Usaha',
    },
    {
      id: 3,
      title: 'YUNI SURYANINGSIH',
      image: '/images/Picture3.png',
      description: 'Seksi Pendidikan Anak Usia Dini, Pendidikan Masyarakat dan Pendidikan Khusus',
    },
    {
      id: 4,
      title: 'ESIH SETIATI',
      image: '/images/Picture4.png',
      description: 'Seksi Sekolah Menengah Pertama dan Sekolah Menengah Atas',
    },
    {
      id: 5,
      title: 'AZIZA',
      image: '/images/Picture5.png',
      description: 'Plt. Seksi Pendidik dan Tenaga Kependidikan',
    },
    {
      id: 6,
      title: 'INDRA ARIESTO',
      image: '/images/Picture6.png',
      description: 'Seksi Sekolah Menengah Kejuruan, Kursus dan Pelatihan',
    },
    {
      id: 7,
      title: 'YULIATI NURMAYA',
      image: '/images/Picture7.png',
      description: 'Seksi Pendidik dan Tenaga Kependidikan',
    },
    // {
    //   id: 8,
    //   title: 'DADANG SUNANDAR',
    //   image: 'https://source.unsplash.com/random/800x600/?nusa,penida',
    //   description: 'SATLAK DIKCAM KEC. CILANDAK',
    // },
    // {
    //   id: 9,
    //   title: 'SRI YUNIATI',
    //   image: 'https://source.unsplash.com/random/800x600/?nusa,penida',
    //   description: 'SATLAK DIKCAM KEC. JAGAKARSA',
    // },
    // {
    //   id: 10,
    //   title: 'MAKSUM HIZBULLAH',
    //   image: 'https://source.unsplash.com/random/800x600/?nusa,penida',
    //   description: 'SATLAK DIKCAM KEC. KEBAYORAN LAMA',
    // },
    // {
    //   id: 11,
    //   title: 'KOSAR',
    //   image: 'https://source.unsplash.com/random/800x600/?nusa,penida',
    //   description: 'SATLAK DIKCAM KEC. PESANGGRAHAN',
    // }
  ]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Organisasi</h2>
      <div className="overflow-hidden">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="p-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-64 object-cover rounded-t-md"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-blue-700 mb-1">{slide.title}</h3>
                  <p className="text-gray-600">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
