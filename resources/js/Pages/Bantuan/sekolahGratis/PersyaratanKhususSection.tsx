import React from 'react';
import Section from '../../../Components/section/SectionV2';
import CardV1 from '../../../Components/cardv1/CardV1';

export default function PersyaratanKhususSection() {
  const data = [
    {
      id: 1,
      type: 'Disabilitas',
      value:
        'Anak penyandang disabilitas dan anak dari penyandang disabilitas (harus terdaftar dalam DTKS)',
      icon: '👩‍🦽',
      emojiGradientColors: ['#FFC0CB', '#FFDAB9'],
      backgroundColor: ['#FFE4E1', '#F0F8FF'],
    },
    {
      id: 2,
      type: 'Pengemudi',
      value:
        'Anak dari pengemudi Jaklingko yang mengemudikan Mikrotrans (harus terdaftar dalam DTKS)',
      icon: '🚌',
      emojiGradientColors: ['#B0E0E6', '#ADD8E6'],
      backgroundColor: ['#E0FFFF', '#F5FFFA'],
    },
    {
      id: 3,
      type: 'KPJ',
      value: 'Anak dari penerima Kartu Pekerja Jakarta (harus terdaftar dalam DTKS)',
      icon: '👷‍♂️',
      emojiGradientColors: ['#D8BFD8', '#E6E6FA'],
      backgroundColor: ['#F0F8FF', '#FAEBD7'],
    },
    {
      id: 4,
      type: 'Putus Sekolah',
      value: 'Anak tidak sekolah (harus terdaftar dalam DTKS)',
      icon: '🔗',
      emojiGradientColors: ['#bfd2d8ff', '#E6E6FA'],
      backgroundColor: ['#fff0fcff', '#FAEBD7'],
    },
    {
      id: 5,
      type: 'SPMB',
      value: 'Anak yang mengikuti SPMB Bersama (harus terdaftar dalam DTKS)',
      icon: '🙋‍♂️',
      emojiGradientColors: ['#D8BFD8', '#faf8e6ff'],
      backgroundColor: ['#f0fff2ff', '#FAEBD7'],
    },
  ];

  return (
    <Section
      title="Persyaratan"
      subtitle="Khusus"
      gradientBackground={['#fff']}
      gradientTitle={['#126f88ff', '#59b1c9ff']}
      gradientSubTitle={['#000']}
    >
      <div className="container mx-auto px-4 py-8 sm:px-8 md:px-16 lg:px-24">
        <div className="grid place-items-center gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item, index) => (
            <CardV1
              key={index}
              emoji={item.icon}
              title={item.type}
              desc={item.value}
              emojiGradientColors={item.emojiGradientColors}
              backgroundColor={item.backgroundColor}
              hasBorder={false}
              borderColor={''}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
