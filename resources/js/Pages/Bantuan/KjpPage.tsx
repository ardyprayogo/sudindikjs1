import React from 'react';
import HeaderFooter from '../../Layout/HeaderFooter';
import KjpBannerSection from './kjp/KjpBannerSection';
import PersyaratanKhususSection from './kjp/PersyaratanKhususSection';
import PersyaratanUmumSection from './kjp/PersyaratanUmumSection';

export default function KjpPage() {
  return (
    <>
      <HeaderFooter>
        <KjpBannerSection />
        <PersyaratanKhususSection />
        <PersyaratanUmumSection />
      </HeaderFooter>
    </>
  );
}
