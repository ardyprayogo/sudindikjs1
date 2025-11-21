import React from 'react';
import Section from '@/Components/section/SectionV2';
import MisiSlider from './MisiSlider';

export default function MisiSection() {
  return (
    <Section
      title="Misi"
      subtitle="Dinas Pendidikan"
      gradientBackground={['#232325ff', '#070707ff']}
      gradientTitle={['#fff']}
      gradientSubTitle={['#fff']}
    >
      <div style={{ padding: '0px 15px' }}>
        <MisiSlider />
      </div>
    </Section>
  );
}
