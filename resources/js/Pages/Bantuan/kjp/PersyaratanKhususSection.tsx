import React from 'react';
import Section from '../../../Components/section/SectionV2';
import CardV1 from '../../../Components/cardv1/CardV1';

export default function PersyaratanKhususSection() {
  const data = [
    {
      id: 1,
      type: 'DTKS',
      value: 'Terdaftar dalam Data Terpadu Kesejahteraan Sosial (DTKS) DKI Jakarta',
      icon: '📊', // Emoji untuk grafik/data
      emojiGradientColors: ['#FFC0CB', '#FFDAB9'], // Gradasi pastel pink-peach
      backgroundColor: ['#FFE4E1', '#F0F8FF'], // Background pastel mistyrose-aliceblue
    },
    {
      id: 2,
      type: 'Status',
      value: 'Anak panti sosial berdasarkan SK Kepala Dinas Sosial',
      icon: '🏠', // Emoji untuk rumah/panti
      emojiGradientColors: ['#B0E0E6', '#ADD8E6'], // Gradasi pastel powderblue-lightblue
      backgroundColor: ['#E0FFFF', '#F5FFFA'], // Background pastel azure-mintcream
    },
    {
      id: 3,
      type: 'Disabilitas',
      value:
        'Anak penyandang disabilitas dan anak dari penyandang disabilitas yang terdaftar dalam DTKS',
      icon: '♿', // Emoji untuk disabilitas
      emojiGradientColors: ['#D8BFD8', '#E6E6FA'], // Gradasi pastel thistle-lavender
      backgroundColor: ['#F0F8FF', '#FAEBD7'], // Background pastel aliceblue-antiquewhite
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
