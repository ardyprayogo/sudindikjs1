import React from 'react';
import Section from '@/Components/section/Section';
import BansosSlider from './BansosSlider';

export default function BansosSection() {
  return (
    <Section
      title="Bantuan Sosial Pendidikan"
      subtitle="Sekolah Swasta Gratis, KJP+, BPMS, KJMU, MBG"
      gradientBackground={['#2159a2ff', '#4c146cff']}
      gradientTitle={['#fff']}
      gradientSubTitle={['#fff']}
    >
      <BansosSlider />
    </Section>
  );
}
