import React from 'react';
import Section from '@/Components/section/SectionV2';
import CommonSlider from '@/Components/CommonSlider';
import { ICommonSlider } from '@/Components/CommonSlider';

export default function PersyaratanUmumSection() {
  const data: ICommonSlider = {
    data: [
      {
        title: 'Status',
        subtitle:
          'Tidak menerima beasiswa/bantuan pendidikan lain yang bersumber dari APBN dan/atau APBD',
        icon: '🎓', // Emoji untuk email
      },
      {
        title: 'DTKS',
        subtitle:
          'Terdaftar dalam Data Terpadu Kesejahteraan Sosial (DTKS) dan/atau Data Terpadu Kesejahteraan Sosial (DTKS) Daerah',
        icon: '📝', // Emoji untuk telepon
      },
      {
        title: 'KTP',
        subtitle: 'Berdomisili dan memiliki Kartu Tanda Penduduk serta Kartu Keluarga DKI Jakarta',
        icon: '💳', // Emoji untuk Instagram
      },
    ],
  };
  return (
    <Section
      title="Persyaratan"
      subtitle="Umum"
      gradientBackground={['#2159a2ff', '#4c146cff']}
      gradientTitle={['#fff']}
      gradientSubTitle={['#fff']}
    >
      <CommonSlider data={data.data} />
    </Section>
  );
}
