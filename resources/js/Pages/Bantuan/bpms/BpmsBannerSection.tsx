import React from 'react';
import Section from '../../../Components/section/SectionV2';

export default function BpmsBannerSection() {
  return (
    <Section
      title="BPMS"
      subtitle="Bantuan Pendidikan Masuk Sekolah"
      gradientBackground={['#2159a2ff', '#4c146cff']}
      gradientTitle={['#fff']}
      gradientSubTitle={['#fff']}
    >
      <div className="flex flex-col items-center gap-4 rounded-lg p-3 sm:flex-row">
        <div className="flex flex-1 flex-shrink-0 items-center justify-center">
          <img
            src="/images/bpms.png"
            className="w-full max-w-[100px] md:max-w-[150px] lg:max-w-[200px]"
            alt="bpms"
          />
        </div>

        <div className="flex flex-1 flex-col items-start gap-4">
          <p className="text-base font-bold text-white md:text-xl lg:text-2xl">
            Dasar Hukum Pergub No. 110 Tahun 2021
          </p>
          <p className="text-sm leading-relaxed text-white sm:text-base">
            BPMS (Bantuan Pendidikan Masuk Sekolah) DKI Jakarta adalah program bantuan sosial dari
            Pemerintah Provinsi DKI Jakarta. Program ini dirancang untuk membantu siswa baru yang
            kurang mampu secara ekonomi agar bisa menempuh pendidikan di sekolah swasta atau
            madrasah di wilayah DKI Jakarta.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            {/* Card Pertama: Gradasi Biru ke Ungu */}
            <div className="flex max-w-xs flex-col items-center rounded-lg bg-gradient-to-r from-blue-700 to-purple-700 p-3 text-left text-white shadow-lg sm:max-w-sm">
              <p className="mb-1 w-full text-left text-xl font-bold">2023</p>
              <p className="text-sm">Disediakan Sejak</p>
            </div>
            {/* Card Kedua: Hanya Border */}
            <div className="flex max-w-xs flex-col items-start rounded-lg border border-gray-400 p-3 text-left text-white shadow-lg sm:max-w-sm">
              <p className="mb-1 w-full text-left text-xl font-bold">Sekolah Swasta/Madrasah</p>
              <p className="text-sm">Penerima Bantuan</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
