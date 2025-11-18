import React from 'react';
import Section from '@/Components/section/Section';
import ServiceSlider from './ServiceSlider';

export default function ServiceSection() {
  return (
    <Section
      title="Layanan Pendidikan"
      subtitle="CRM, One ClIck Service, Data Center, dan Layanan Pendidikan lainnya"
      gradientBackground={['#232325ff', '#070707ff']}
      gradientTitle={['#fff']}
      gradientSubTitle={['#fff']}
    >
      <ServiceSlider />
    </Section>
  );
}
