import React from 'react';
import Section from '../section/SectionV2';
import CardV1 from '../cardv1/CardV1';

export default function ContactListSection() {
  const dummyContacts = [
    {
      id: 1,
      type: 'Alamat',
      value: 'Jl. Prapanca Raya No.9, RT.1/RW.1, Petogogan',
      icon: '📍', // Emoji untuk alamat
      emojiGradientColors: ['#FFC0CB', '#FFDAB9'], // Gradasi pastel pink-peach
      backgroundColor: ['#FFE4E1', '#F0F8FF'], // Background pastel mistyrose-aliceblue
    },
    {
      id: 2,
      type: 'Email',
      value: 'Sudin Pendidikan JS I',
      icon: '📧', // Emoji untuk email
      emojiGradientColors: ['#B0E0E6', '#ADD8E6'], // Gradasi pastel powderblue-lightblue
      backgroundColor: ['#E0FFFF', '#F5FFFA'], // Background pastel azure-mintcream
    },
    {
      id: 3,
      type: 'Telepon',
      value: 'Sudin Pendidikan JS I',
      icon: '📞', // Emoji untuk telepon
      emojiGradientColors: ['#D8BFD8', '#E6E6FA'], // Gradasi pastel thistle-lavender
      backgroundColor: ['#F0F8FF', '#FAEBD7'], // Background pastel aliceblue-antiquewhite
    },
    {
      id: 4,
      type: 'Instagram',
      value: 'Sudin Pendidikan JS I',
      icon: '📸', // Emoji untuk Instagram
      emojiGradientColors: ['#FFB6C1', '#FF69B4'], // Gradasi pastel lightpink-hotpink
      backgroundColor: ['#FFF0F5', '#FFE4E1'], // Background pastel lavenderblush-mistyrose
    },
    {
      id: 5,
      type: 'Website',
      value: 'Sudin Pendidikan JS I',
      icon: '🌐', // Emoji untuk website
      emojiGradientColors: ['#98FB98', '#90EE90'], // Gradasi pastel palegreen-lightgreen
      backgroundColor: ['#F0FFF0', '#F5FFFA'], // Background pastel honeydew-mintcream
    },
    {
      id: 6,
      type: 'Twitter',
      value: 'Sudin Pendidikan JS I',
      icon: '🐦', // Emoji untuk Twitter
      emojiGradientColors: ['#B0C4DE', '#ADD8E6'], // Gradasi pastel lightsteelblue-lightblue
      backgroundColor: ['#F0F8FF', '#E6E6FA'], // Background pastel aliceblue-lavender
    },
  ];

  return (
    <Section
      title="Kontak Kami"
      subtitle="Alamat, Sosial Media & Telepon"
      gradientBackground={['#fff']}
      gradientTitle={['#2b2a2aff', '#282828ff']}
      gradientSubTitle={['#2b2a2aff', '#282828ff']}
    >
      <div className="container mx-auto px-4 py-8 sm:px-8 md:px-16 lg:px-24">
        <div className="grid place-items-center gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {dummyContacts.map((item, index) => (
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
