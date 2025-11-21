import React, { useMemo } from 'react';
import Slider from 'react-slick';
import GradientCard from '../GradientCard';
import CardV2 from '../cardv2/CardV2';

const BansosSliderV2 = () => {
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
        icon: '🏫',
        title: 'Sekolah Swasta Gratis',
        subtitle:
          'Bantuan biaya pendidikan untuk siswa Sekolah Menengah Pertama (SMP) dan Sekolah Menengah Atas (SMA) swasta dari keluarga tidak mampu.',
      },
      {
        icon: '🎓',
        title: 'KJP+',
        subtitle:
          'Bantuan tunai bulanan untuk mahasiswa tingkat perguruan tinggi di Jakarta yang berasal dari keluarga kurang mampu.',
      },
      {
        icon: '📘',
        title: 'BPMS',
        subtitle:
          'Bantuan Pendidikan Mahasiswa Swasta untuk memberikan dukungan biaya pendidikan bagi mahasiswa di perguruan tinggi swasta di Jakarta.',
      },
      {
        icon: '🎒',
        title: 'KJMU',
        subtitle:
          'Bantuan biaya pendidikan bagi mahasiswa dari keluarga tidak mampu yang menempuh studi di perguruan tinggi di wilayah Jakarta Utara.',
      },
      {
        icon: '📋',
        title: 'MBG',
        subtitle:
          'Makan Bergizi Gratis demi memperkuat pembangunan sumber daya manusia unggul di Jakarta.',
      },
    ],
    []
  );
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
          borderColor="border-purple-500"
          textColor="text-white"
          gradientFrom="from-blue-700"
          gradientTo="to-purple-700"
        />
      ))}
    </Slider>
  );
};

export default BansosSliderV2;
