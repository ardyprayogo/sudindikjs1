import React, { useMemo } from 'react';
import Slider from 'react-slick';
import CardV2 from '../cardv2/CardV2';

const BansosSlider = () => {
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
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <Slider {...settings}>
        {data.map((item, index) => (
          <CardV2 key={index} startColor="#2159a2ff" endColor="#14646cff">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '10px',
              }}
            >
              <span className="card-v2-icon">{item.icon}</span>
              <p className="card-v2-title">{item.title}</p>
              <p className="card-v2-sub-title">{item.subtitle}</p>
            </div>
          </CardV2>
        ))}
      </Slider>
    </div>
  );
};

export default BansosSlider;
