import React from 'react';
import HeaderFooter from '../../Layout/HeaderFooter';
import BannerCarousel from '../../Components/BannerCarousel';
import NewsList, { NewsArticle } from '../../Components/NewsList';

export default function Page() {
  const bannerData = [
    {
      imageSrc:
        'https://cdn.rri.co.id/berita-foto/Jakarta/o/1729388678907-IMG_1934/gojwieiabhcqod8.jpeg',
      title: 'Selamat Datang di Portal Pendidikan Jakarta Selatan',
      link: '#',
    },
    {
      imageSrc:
        'https://cdn.rri.co.id/berita-foto/Jakarta/o/1729388678907-IMG_1934/gojwieiabhcqod8.jpeg',
      title: 'Program Unggulan untuk Generasi Emas',
      link: '#',
    },
    {
      imageSrc:
        'https://cdn.rri.co.id/berita-foto/Jakarta/o/1729388678907-IMG_1934/gojwieiabhcqod8.jpeg',
      title: 'Berinovasi Bersama Menuju Pendidikan Berkualitas',
      link: '#',
    },
  ];

  const dummyNews: NewsArticle[] = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Berita ${i + 1}: Revolusi Teknologi Terbaru`,
    description: `Ini adalah deskripsi singkat untuk berita ${i + 1}. Beberapa inovasi menarik telah ditemukan yang akan mengubah dunia!`,
    imageUrl: `https://picsum.photos/seed/${i + 1}/600/400`,
  }));

  return (
    <HeaderFooter>
      <BannerCarousel banners={bannerData} />
      <NewsList initialArticles={dummyNews} articlesPerPage={5} />
    </HeaderFooter>
  );
}
