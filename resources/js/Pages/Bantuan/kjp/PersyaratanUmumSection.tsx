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
        icon: '⌛', // Emoji untuk alamat
      },
      {
        title: 'Murid',
        subtitle:
          'Terdaftar sebagai murid pada satuan pendidikan negeri atau swasta di DKI Jakarta',
        icon: '🎓', // Emoji untuk email
      },
      {
        title: 'Kriteria',
        subtitle: 'Memenuhi kriteria khusus sebagai penerima bantuan sosial',
        icon: '📝', // Emoji untuk telepon
      },
      {
        title: 'NIK',
        subtitle: 'Memiliki NIK sebagai penduduk DKI Jakarta dan berdomisili di DKI Jakarta',
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
