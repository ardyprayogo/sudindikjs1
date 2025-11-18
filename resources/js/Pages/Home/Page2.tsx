import React from 'react';
import Header from '@/Components/header/Header';
import StatisticSection from '@/Components/home/StatisticSection';
import BansosSection from '@/Components/home/BansosSection';
import ServiceSection from '@/Components/home/ServiceSection';
import BannerCarousel from '@/Components/banner/BannerCarrousel';

export default function Page2() {
  return (
    <>
      <Header />
      <BannerCarousel />
      <ServiceSection />
      <StatisticSection />
      <BansosSection />
    </>
  );
}
