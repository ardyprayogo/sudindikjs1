import React, { FC } from 'react';
import Slider from 'react-slick';
import { motion, AnimatePresence } from 'framer-motion';

// Pastikan Anda sudah menginstal react-slick dan slick-carousel
// npm install react-slick slick-carousel
// npm install @types/react-slick (jika menggunakan TypeScript)
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

interface BannerItem {
  imageSrc: string;
  title: string;
  link?: string; // Menambahkan properti link opsional untuk tombol
}

interface BannerCarouselProps {
  banners: BannerItem[];
}

const BannerCarousel: FC<BannerCarouselProps> = ({ banners }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    // Menambahkan responsive settings jika diperlukan lebih lanjut
  };

  return (
    <div className="relative w-full overflow-hidden">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className="relative">
            {/* fixed height untuk container gambar */}
            <div className="relative h-[300px] w-full sm:h-[400px] md:h-[500px] lg:h-[600px]">
              <img
                src={banner.imageSrc}
                alt={banner.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              {/* Wrapper gelap rgba dengan transparansi 50% */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              {/* Kontainer untuk teks title dan tombol - pastikan di tengah */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-5 sm:p-10">
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={banner.title}
                    initial={{ opacity: 0, y: -50 }} // Mengubah x menjadi y untuk efek dari atas/bawah
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="/* Menambah margin bawah agar ada jarak dengan tombol */ mb-6 max-w-xl text-center text-3xl font-bold leading-tight text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl"
                  >
                    {banner.title}
                  </motion.h2>
                </AnimatePresence>

                {/* Tombol "Lebih Lanjut" */}
                {banner.link && ( // Hanya tampilkan tombol jika ada link
                  <AnimatePresence mode="wait">
                    <motion.a
                      key={`${banner.title}-button`}
                      href={banner.link}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }} // sedikit delay agar muncul setelah judul
                      className="/* Latar belakang transparan */ /* Border putih setebal 2px */ /* Warna teks putih */ /* Teks semi-bold */ /* Padding untuk ukuran tombol */ /* Bentuk tombol bulat */ /* Efek hover: latar belakang putih */ /* Efek hover: teks hitam */ /* Transisi halus */ /* Ukuran teks tombol */ /* Ukuran teks tombol responsive */ rounded-full border-2 border-white bg-transparent px-6 py-3 text-lg font-semibold text-white transition duration-300 ease-in-out hover:bg-white hover:text-black md:text-xl"
                    >
                      Baca Lebih Lanjut
                    </motion.a>
                  </AnimatePresence>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerCarousel;
