import React from 'react';
import Section from '@/Components/section/Section';
import CardV1 from '../cardv1/CardV1';

export default function StatisticSection() {
  return (
    <Section
      title="Statistik Pendidikan"
      subtitle="Sekolah, siswa, pendidik dan tenaga kependidikan"
      gradientBackground={['#fff']}
      gradientTitle={['#2159a2ff', '#3c608eff', '#2374dfff']}
    >
      <CardV1
        emoji="🏫"
        title="Sekolah Negeri"
        desc="Terdapat 150+ unit sekolah negeri yang tersebar." // Menunjukkan jumlah dalam teks
        emojiGradientColors={['#ADD8E6', '#87CEEB']} // Biru muda gradasi
        backgroundColor={['#ffe0b2', '#ffab91']} // Gradasi oranye untuk Card
        hasBorder={false}
        borderColor="#ff7043"
      />
      <CardV1
        emoji="🏢"
        title="Sekolah Swasta"
        desc="Lebih dari 230 sekolah swasta dengan beragam keunggulan." // Menunjukkan jumlah dalam teks
        emojiGradientColors={['#90EE90', '#3CB371']} // Hijau muda gradasi
        backgroundColor={['#f0f8ff', '#e0ffff']} // Gradasi biru pucat untuk Card
        hasBorder={false}
        borderColor="#6a5acd"
      />
      <CardV1
        emoji="🧑‍🎓"
        title="Siswa"
        desc="Melayani sekitar 75.000 siswa aktif setiap tahunnya." // Menunjukkan jumlah dalam teks
        emojiGradientColors={['#FFD700', '#FFA500']} // Emas-oranye gradasi
        backgroundColor={['#dcdcdc', '#f5f5f5']} // Gradasi abu-abu muda untuk Card
        hasBorder={false}
        borderColor={''}
      />
      <CardV1
        emoji="👨‍🏫"
        title="Pendidik"
        desc="Didukung oleh 4.500+ pendidik profesional." // Menunjukkan jumlah dalam teks
        emojiGradientColors={['#FFB6C1', '#FF69B4']} // Pink gradasi
        backgroundColor={['#fff0f5', '#ffe4e1']} // Gradasi pink-merah muda untuk Card
        hasBorder={false}
        borderColor="#ff1493"
      />
      <CardV1
        emoji="👩‍💼"
        title="Tenaga Kependidikan"
        desc="Sebanyak 1.200+ tenaga kependidikan siap melayani." // Menunjukkan jumlah dalam teks
        emojiGradientColors={['#BA55D3', '#9370DB']} // Ungu gradasi
        backgroundColor={['#e6e6fa', '#d8bfd8']} // Gradasi ungu pucat untuk Card
        hasBorder={false}
        borderColor={''}
      />
      <CardV1
        emoji="👨‍💻"
        title="Staf Sudin"
        desc="Terdapat beberapa unit staf Sudin Pendidikan." // Deskripsi baru dengan konteks jumlah
        emojiGradientColors={['#87CEEB', '#4682B4']} // Gradasi biru langit
        backgroundColor={['#afeeee', '#bbffff']} // Gradasi cyan pucat
        hasBorder={false}
        borderColor={''}
      />
      <CardV1
        emoji="📍"
        title="Wilayah"
        desc="Mencakup beberapa wilayah di Jakarta Selatan 1." // Deskripsi baru dengan konteks wilayah
        emojiGradientColors={['#FFDEAD', '#DEB887']} // Gradasi oranye kecoklatan
        backgroundColor={['#fffaf0', '#f5deb3']} // Gradasi krem
        hasBorder={false}
        borderColor="#d2b48c"
      />
    </Section>
  );
}
