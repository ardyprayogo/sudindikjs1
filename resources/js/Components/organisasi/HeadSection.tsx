import React from 'react';
import Section from '@/Components/section/SectionV2';
import HeadSlider from './HeadSlider';

export default function HeadSection() {
  return (
    <Section
      title="Jajaran Kepala Sudin Pendidikan"
      subtitle="Wilayah I Jakarta Selatan"
      gradientBackground={['#2159a2ff', '#4c146cff']}
      gradientTitle={['#fff']}
      gradientSubTitle={['#fff']}
    >
      <div style={{ padding: '0px 15px' }}>
        <HeadSlider />
      </div>
    </Section>
  );
}
