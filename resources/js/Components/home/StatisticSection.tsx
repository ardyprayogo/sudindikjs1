import React, { useMemo } from 'react';
import Section from '@/Components/section/Section';
import CardV1 from '../cardv1/CardV1';

export default function StatisticSection() {
  const data = useMemo(
    () => [
      {
        emoji: '🏫',
        title: 'Sekolah Negeri',
        subTitle: 'Terdapat 150+ unit sekolah negeri yang tersebar.',
        emojiGradientColors: ['#ADD8E6', '#87CEEB'], // Biru muda gradasi
        backgroundColor: ['#ffe0b2', '#ffab91'], // Gradasi oranye untuk Card
        hasBorder: false,
        borderColor: '#ff7043',
      },
      {
        emoji: '🏢',
        title: 'Sekolah Swasta',
        subTitle: 'Lebih dari 230 sekolah swasta dengan beragam keunggulan.',
        emojiGradientColors: ['#b9ddfdff', '#98fcfcff'], // Biru muda gradasi
        backgroundColor: ['#f0f8ff', '#e0ffff'], // Gradasi oranye untuk Card
        hasBorder: false,
        borderColor: '#ff7043',
      },
      {
        emoji: '🧑‍🎓',
        title: 'Siswa',
        subTitle: 'Melayani sekitar 75.000 siswa aktif setiap tahunnya.',
        emojiGradientColors: ['#FFD700', '#FFA500'], // Biru muda gradasi
        backgroundColor: ['#dcdcdc', '#f5f5f5'], // Gradasi oranye untuk Card
        hasBorder: false,
        borderColor: '#ff7043',
      },
      {
        emoji: '👨‍🏫',
        title: 'Pendidik',
        subTitle: 'Didukung oleh 4.500+ pendidik profesional.',
        emojiGradientColors: ['#FFB6C1', '#FF69B4'], // Biru muda gradasi
        backgroundColor: ['#fff0f5', '#ffe4e1'], // Gradasi oranye untuk Card
        hasBorder: false,
        borderColor: '#ff7043',
      },
      {
        emoji: '👩‍💼',
        title: 'Tenaga Kependidikan',
        subTitle: 'Sebanyak 1.200+ tenaga kependidikan siap melayani.',
        emojiGradientColors: ['#b6deffff', '#FF69B4'], // Biru muda gradasi
        backgroundColor: ['#b6deffff', '#ffa2d0ff'], // Gradasi oranye untuk Card
        hasBorder: false,
        borderColor: '#ff7043',
      },
      {
        emoji: '👨‍💻',
        title: 'Staf Sudin',
        subTitle: 'Terdapat beberapa unit staf Sudin Pendidikan.',
        emojiGradientColors: ['#f6ffb6ff', '#69ffc3ff'], // Biru muda gradasi
        backgroundColor: ['#f6ffb6ff', '#acffdeff'], // Gradasi oranye untuk Card
        hasBorder: false,
        borderColor: '#ff7043',
      },
    ],
    []
  );
  return (
    <Section
      title="Statistik Pendidikan"
      subtitle="Sekolah, siswa, pendidik dan tenaga kependidikan"
      gradientBackground={['#fff']}
      gradientTitle={['#2a2f36ff', '#3c608eff', '#2374dfff']}
    >
      {data.map((item, index) => (
        <CardV1
          key={index}
          emoji={item.emoji}
          title={item.title}
          desc={item.subTitle}
          emojiGradientColors={item.emojiGradientColors}
          backgroundColor={item.backgroundColor}
          hasBorder={item.hasBorder}
          borderColor={item.borderColor}
        />
      ))}
    </Section>
  );
}
