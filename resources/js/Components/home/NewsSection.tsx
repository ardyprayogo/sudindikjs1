import React from 'react';
import Section from '@/Components/section/Section';

export default function NewsSection() {
  return (
    <Section
      title="Berita dan Pengumuman"
      subtitle="Informasi Terbaru seputar Pendidikan Jakarta Selatan Wilayah 1"
      gradientBackground={['#fff']}
      gradientTitle={['#517ab0ff', '#8c4db1ff']}
      gradientSubTitle={['#2159a2ff', '#4c146cff']}
    >
      <div className="flex w-full flex-col gap-4 md:flex-row">
        <div className="flex-1 flex-col rounded-lg bg-white">
          <h2 className="mb-4 px-3 text-lg font-bold text-black sm:text-xl md:text-2xl">Berita</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            <div className="flex gap-4 rounded-lg p-3 transition-colors hover:bg-gray-50">
              <img
                src="https://png.pngtree.com/png-clipart/20200508/ourmid/pngtree-hand-drawn-cartoon-education-book-infographic-illustration-png-image_2200304.jpg"
                alt="AI Education"
                className="h-20 w-20 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-base font-bold text-black sm:text-lg md:text-xl">
                  Teknologi AI Terbaru Ubah Dunia Pendidikan!
                </h3>
                <p className="text-xs text-gray-600 sm:text-sm">19 November 2025</p>
              </div>
            </div>
            <div className="flex gap-4 rounded-lg p-3 transition-colors hover:bg-gray-50">
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjtZ2-Z8X4mTlkOSGKPuoWPjBspU-JjVZALiwOjG7W3nC9hNNurD3LXB9uXdzxGqYQe_5ijBgpMQC4QqdomcmADjSzFdRlc9nipZFbazh6Jkm-DebnIoD6LLYEYYheq2hurBYW55TA2_Fxa/s1600/education.png"
                alt="AI Health"
                className="h-20 w-20 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-base font-bold text-black sm:text-lg md:text-xl">
                  AI Kesehatan Prediksi Penyakit Lebih Akurat
                </h3>
                <p className="text-xs text-gray-600 sm:text-sm">18 November 2025</p>
              </div>
            </div>
            <div className="flex gap-4 rounded-lg p-3 transition-colors hover:bg-gray-50">
              <img
                src="https://batuter.com/wp-content/uploads/2024/08/Pndidikan.jpg"
                alt="AI Finance"
                className="h-20 w-20 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-base font-bold text-black sm:text-lg md:text-xl">
                  AI Finansial Bantu Perencanaan Keuangan
                </h3>
                <p className="text-xs text-gray-600 sm:text-sm">17 November 2025</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full rounded-lg bg-gray-100 p-4 md:w-80">
          <h2 className="mb-4 text-lg font-bold text-black sm:text-xl md:text-2xl">Pengumuman</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-lg border-l-4 border-red-500 bg-white p-3">
              <img
                src="https://batuter.com/wp-content/uploads/2024/08/Pndidikan.jpg"
                alt="Maintenance"
                className="h-20 w-20 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-base font-bold text-black sm:text-lg md:text-xl">
                  ⚠️ Maintenance Server Hari Ini!
                </h3>
                <p className="text-xs text-gray-600 sm:text-sm">19 November 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
