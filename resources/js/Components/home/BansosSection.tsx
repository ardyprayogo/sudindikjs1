import React from 'react';
import Section from '@/Components/section/SectionV2';
import BansosSlider from './BansosSliderV2';

export default function BansosSection() {
  return (
    <Section
      title="Bantuan Sosial Pendidikan"
      subtitle="Sekolah Swasta Gratis, KJP+, BPMS, KJMU, MBG"
      gradientBackground={['#2159a2ff', '#4c146cff']}
      gradientTitle={['#fff']}
      gradientSubTitle={['#fff']}
    >
      <div className="px-[15px]">
        <BansosSlider />
      </div>
    </Section>
  );
}
