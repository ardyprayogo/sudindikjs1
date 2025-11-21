import React from 'react';
import HeaderFooter from '../../Layout/HeaderFooter';
import BannerOrganisasi from '../../Components/organisasi/BannerSection';
import MisiSection from '../../Components/organisasi/MisiSection';
import StructureSection from '../../Components/organisasi/StructureSection';
import HeadSection from '../../Components/organisasi/HeadSection';
import VisiSection from '../../Components/organisasi/VisiSection';

export default function ProfilePage() {
  return (
    <>
      <HeaderFooter>
        <BannerOrganisasi />
        <VisiSection />
        <MisiSection />
        <StructureSection />
        <HeadSection />
      </HeaderFooter>
    </>
  );
}
