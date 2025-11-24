import React from 'react';
import Section from '../../Components/section/SectionV2';
import HeaderFooter from '../../Layout/HeaderFooter';

export default function RehabPage() {
  return (
    <HeaderFooter>
      <Section
        title="Rehab"
        subtitle="Sekolah"
        gradientBackground={['#ac0f7aff', '#126f88ff']}
        gradientTitle={['#fff']}
        gradientSubTitle={['#fff']}
      ></Section>
    </HeaderFooter>
  );
}
