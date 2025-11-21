import React from 'react';
import HeaderFooter from '../../Layout/HeaderFooter';
import KjmuBannerSection from './kjmu/KjmuBannerSection';
import PersyaratanKhususSection from './kjmu/PersyaratanKhususSection';
import PersyaratanUmumSection from './kjmu/PersyaratanUmumSection';

export default function KjmuPage() {
  return (
    <>
      <HeaderFooter>
        <KjmuBannerSection />
        <PersyaratanKhususSection />
        <PersyaratanUmumSection />
      </HeaderFooter>
    </>
  );
}
