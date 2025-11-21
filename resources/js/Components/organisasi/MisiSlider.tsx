import React, { useMemo } from 'react';
import Slider from 'react-slick';
import GradientCard from '../GradientCard';

const MisiSlider = () => {
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
        icon: '🤝', // Ikon berjabat tangan atau dua orang bersatu bisa melambangkan akses yang merata dan keadilan.
        title: '',
        subtitle: 'Mewujudkan akses yang merata dan berkeadilan',
      },
      {
        icon: '🌟', // Bintang sering melambangkan kualitas atau keunggulan.
        title: '',
        subtitle: 'Mewujudkan Pembelajaran yang bermutu',
      },
      {
        icon: '⚙️', // Roda gigi menunjukkan mekanisme atau operasional yang efektif, cocok untuk efektivitas birokrasi.
        title: '',
        subtitle: 'Mewujudkan efektivitas birokrasi dalam pelayanan Pendidikan',
      },
      {
        icon: '🏗️', // Konstruksi atau bangunan bisa melambangkan sarana dan prasarana.
        title: '',
        subtitle: 'Meningkatkan kualitas dan kuantitas sarana dan prasarana Pendidikan',
      },
      {
        icon: '🌱', // Tunas atau pertumbuhan bisa melambangkan peran ekosistem yang berkembang.
        title: '',
        subtitle: 'Meningkatkan peran ekosistem Pendidikan',
      },
      {
        icon: '📊', // Grafik atau papan klip bisa melambangkan tata kelola, akuntabilitas, dan transparansi.
        title: '',
        subtitle: 'Mewujudkan tata Kelola, akuntabilitas dan transparansi pendidikan',
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

export default MisiSlider;
