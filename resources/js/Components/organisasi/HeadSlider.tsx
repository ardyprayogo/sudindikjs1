import React, { useMemo } from 'react';
import Slider from 'react-slick';
import PersonCard from '../PersonCardV2';

const HeadSlider = () => {
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
        name: 'Santoso', // Ikon berjabat tangan atau dua orang bersatu bisa melambangkan akses yang merata dan keadilan.
        title: 'Kepala Sudin Pendidikan JS 1',
        imgPath: '/Images/Picture1.png',
      },
      {
        name: 'Ibnu Hajar', // Ikon berjabat tangan atau dua orang bersatu bisa melambangkan akses yang merata dan keadilan.
        title: 'Subbagian Tata Usaha',
        imgPath: '/Images/Picture2.png',
      },
      {
        name: 'Yuni Suryaningsih', // Ikon berjabat tangan atau dua orang bersatu bisa melambangkan akses yang merata dan keadilan.
        title: 'Seksi PAUD, PM dan PK',
        imgPath: '/Images/Picture3.png',
      },
      {
        name: 'Esih Setiati', // Ikon berjabat tangan atau dua orang bersatu bisa melambangkan akses yang merata dan keadilan.
        title: 'Seksi SD',
        imgPath: '/Images/Picture4.png',
      },
      {
        name: 'Aziza', // Ikon berjabat tangan atau dua orang bersatu bisa melambangkan akses yang merata dan keadilan.
        title: 'Seksi SMP & SMA',
        imgPath: '/Images/Picture5.png',
      },
      {
        name: 'Indra Ariesto', // Ikon berjabat tangan atau dua orang bersatu bisa melambangkan akses yang merata dan keadilan.
        title: 'Seksi SMK',
        imgPath: '/Images/Picture6.png',
      },
      {
        name: 'Yuliyati Nurmaya', // Ikon berjabat tangan atau dua orang bersatu bisa melambangkan akses yang merata dan keadilan.
        title: 'Seksi PTK',
        imgPath: '/Images/Picture7.png',
      },
      {
        name: 'Dadang Sunandar', // Ikon berjabat tangan atau dua orang bersatu bisa melambangkan akses yang merata dan keadilan.
        title: 'Satlak Dikcam Cilandak',
        imgPath: '/Images/satlak/Picture1.png',
      },
      {
        name: 'Sri Yuniati', // Ikon berjabat tangan atau dua orang bersatu bisa melambangkan akses yang merata dan keadilan.
        title: 'Satlak Dikcam Jagakarsa',
        imgPath: '/Images/satlak/Picture2.png',
      },
      {
        name: 'Maksum Hizbullah', // Ikon berjabat tangan atau dua orang bersatu bisa melambangkan akses yang merata dan keadilan.
        title: 'Satlak Dikcam Kebayaoran Lama',
        imgPath: '/Images/satlak/Picture3.png',
      },
      {
        name: 'Kosar', // Ikon berjabat tangan atau dua orang bersatu bisa melambangkan akses yang merata dan keadilan.
        title: 'Satlak Dikcam Pesanggrahan',
        imgPath: '/Images/satlak/Picture4.png',
      },
    ],
    []
  );

  return (
    <Slider {...settings}>
      {/* Item 1 */}
      {data.map((item, index) => (
        <PersonCard
          name={item.name}
          title={item.title}
          imageSrc={item.imgPath}
          imageWidth={'w-[230px]'}
          imageHeight={'h-[310px]'}
        />
      ))}
    </Slider>
  );
};

export default HeadSlider;
