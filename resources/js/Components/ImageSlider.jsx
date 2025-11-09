// ImageSlider.jsx
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const [slides] = useState([
    {
      id: 1,
      title: 'SARWOKO',
      image: 'https://source.unsplash.com/random/800x600/?bali,beach',
      description: 'Kepala Suku Dinas Pendidikan Wilayah I Kota Administrasi Jakarta Selatan',
    },
    {
      id: 2,
      title: 'IBNU HAJAR',
      image: 'https://source.unsplash.com/random/800x600/?bromo,volcano',
      description: 'Subbagian Tata Usaha',
    },
    {
      id: 3,
      title: 'TRI WIDODO BEN SANTOSO',
      image: 'https://source.unsplash.com/random/800x600/?komodo,dragon',
      description: 'Seksi Pendidikan Anak Usia Dini, Pendidikan Masyarakat dan Pendidikan Khusus',
    },
    {
      id: 4,
      title: 'LINA PURNAMAASIH',
      image: 'https://source.unsplash.com/random/800x600/?nusa,penida',
      description: 'Seksi Sekolah Menengah Pertama dan Sekolah Menengah Atas',
    },
    {
      id: 5,
      title: 'MUHAMMAD ZULFADLI',
      image: 'https://source.unsplash.com/random/800x600/?nusa,penida',
      description: 'Plt. Seksi Pendidik dan Tenaga Kependidikan',
    },
    {
      id: 6,
      title: 'WIJI KUSRINI',
      image: 'https://source.unsplash.com/random/800x600/?nusa,penida',
      description: 'Seksi Sekolah Menengah Kejuruan, Kursus dan Pelatihan',
    }
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
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
      <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
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
