import React from 'react';
import Section from '@/Components/section/SectionV2';
import CommonSlider from '@/Components/CommonSlider';
import { ICommonSlider } from '@/Components/CommonSlider';

export default function PersyaratanUmumSection() {
  const data: ICommonSlider = {
    data: [
      {
        title: 'Umur',
        subtitle: 'Murid dengan usia 6-21 tahun',
        icon: '🕰️',
      },
      {
        title: 'Status',
        subtitle: 'Terdaftar sebagai murid baru di sekolah/madrasah swasta di Provinsi DKI Jakarta',
        icon: '🧑‍🎓',
      },
      {
        title: 'Domisili',
        subtitle: 'Berdomisili dan memiliki NIK Provinsi DKI Jakarta',
        icon: '💳',
      },
      {
        title: 'DTKS',
        subtitle: 'Anak dari keluarga tidak mampu yang terdaftar dalam DTKS dan/atau DTKS daerah',
        icon: '📝',
      },
      {
        title: 'Panti',
        subtitle: 'Anak panti sosial berdasarkan SK Kepala Dinas Sosial',
        icon: '🚼',
      },
    ],
  };
  return (
    <Section
      title="Persyaratan"
      subtitle="Umum"
      gradientBackground={['#373738ff', '#201e21ff']}
      gradientTitle={['#fff']}
      gradientSubTitle={['#fff']}
    >
      <CommonSlider data={data.data} />
    </Section>
  );
}
