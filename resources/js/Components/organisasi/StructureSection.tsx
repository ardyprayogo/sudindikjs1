import React from 'react';
import Section from '@/Components/section/SectionV2';

export default function StructureSection() {
  return (
    <Section
      title="Struktur Organisasi"
      subtitle="Sudin Pendidikan Wilayah I Jakarta Selatan"
      gradientBackground={['#fff', '#fff']}
      gradientTitle={['#3667a3ff', '#9b30aeff']}
      gradientSubTitle={['#1b1b1bff']}
    >
      <div style={{ padding: '0px 15px' }}>
        <img src="/images/structure.jpg" alt="" />
      </div>
    </Section>
  );
}
