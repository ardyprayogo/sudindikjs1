import React from 'react';
import Section from '../../../Components/section/SectionV2';
import CardV1 from '../../../Components/cardv1/CardV1';

export default function PersyaratanKhususSection() {
  const data = [
    {
      id: 1,
      type: 'Kelulusan Pendidikan Menengah',
      value:
        'Calon Mahasiswa telah dinyatakan lulus dari pendidikan menengah pada Satuan Pendidikan Negeri/Swasta di DKI Jakarta paling lama 3 (tiga) tahun sebelumnya.',
      icon: '🎓',
      emojiGradientColors: ['#FFC0CB', '#FFDAB9'],
      backgroundColor: ['#FFE4E1', '#F0F8FF'],
    },
    {
      id: 2,
      type: 'Perguruan Tinggi Negeri',
      value:
        'Dinyatakan lulus pada Perguruan Tinggi Negeri jalur reguler di bawah naungan Kementerian Riset dan Teknologi Pendidikan Tinggi dan Kementerian Agama Republik Indonesia; dan/atau',
      icon: '🏛️',
      emojiGradientColors: ['#B0E0E6', '#ADD8E6'],
      backgroundColor: ['#E0FFFF', '#F5FFFA'],
    },
    {
      id: 3,
      type: 'Perguruan Tinggi Swasta',
      value:
        'Dinyatakan lulus seleksi pada Perguruan Tinggi Swasta jalur reguler dengan akreditasi institusi A dan program studi yang terakreditasi A di DKI Jakarta pada Bidang Prioritas sesuai dengan Rencana Pembangunan Jangka Menengah DKI Jakarta tahun berjalan',
      icon: '👩🏻‍🎓',
      emojiGradientColors: ['#D8BFD8', '#E6E6FA'],
      backgroundColor: ['#F0F8FF', '#FAEBD7'],
    },
    {
      id: 4,
      type: 'Kelulusan Pendidikan Menengah',
      value:
        'Mahasiswa telah dinyatakan lulus dari pendidikan menengah pada Satuan Pendidikan Negeri/Swasta di DKI Jakarta paling lama 3 (tiga) tahun sebelumnya.',
      icon: '🎓',
      emojiGradientColors: ['#ed8597ff', '#FFDAB9'],
      backgroundColor: ['#FFE4E1', '#F0F8FF'],
    },
    {
      id: 5,
      type: 'Batas Waktu Pengajuan',
      value: 'Pengajuan paling lama pada semester 2(dua).',
      icon: '⏳',
      emojiGradientColors: ['#D8BFD8', '#E6E6FA'],
      backgroundColor: ['#f0fffeff', '#FAEBD7'],
    },
    {
      id: 6,
      type: 'Perguruan Tinggi Negeri',
      value:
        'Dinyatakan lulus pada Perguruan Tinggi Negeri jalur reguler di bawah naungan Kementerian Riset dan Teknologi Pendidikan Tinggi dan Kementerian Agama Republik Indonesia; dan/atau',
      icon: '🏛️',
      emojiGradientColors: ['#B0E0E6', '#ADD8E6'],
      backgroundColor: ['#ffe0f6ff', '#F5FFFA'],
    },
    {
      id: 7,
      type: 'Perguruan Tinggi Swasta',
      value:
        'Dinyatakan lulus seleksi pada Perguruan Tinggi Swasta jalur reguler dengan akreditasi institusi A dan program studi yang terakreditasi A di DKI Jakarta pada Bidang Prioritas sesuai dengan Rencana Pembangunan Jangka Menengah Daerah tahun berjalan.',
      icon: '👩🏻‍🎓',
      emojiGradientColors: ['#D8BFD8', '#e6f3faff'],
      backgroundColor: ['#F0F8FF', '#e3fad7ff'],
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
