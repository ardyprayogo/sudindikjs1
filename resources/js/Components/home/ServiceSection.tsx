import React from 'react';
import Section from '@/Components/section/SectionV2';
import ServiceSlider from './ServiceSlider';
import ResponsiveSlider from '../../ResponsiveSlider';

export default function ServiceSection() {
  return (
    <Section
      title="Layanan Pendidikan"
      subtitle="CRM, One ClIck Service, Data Center, dan Layanan Pendidikan lainnya"
      gradientBackground={['#232325ff', '#070707ff']}
      gradientTitle={['#fff']}
      gradientSubTitle={['#fff']}
    >
      <div style={{ padding: '0px 15px' }}>
        <ServiceSlider />
      </div>
    </Section>
  );
}
