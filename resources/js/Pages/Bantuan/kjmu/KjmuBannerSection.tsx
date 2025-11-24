import React from 'react';
import Section from '../../../Components/section/SectionV2';

export default function KjmuBannerSection() {
  return (
    <Section
      title="KJMU"
      subtitle="Kartu Jakarta Mahasiswa Unggul"
      gradientBackground={['#c02020ff', '#c7b53dff']}
      gradientTitle={['#fff']}
      gradientSubTitle={['#fff']}
    >
      <div className="flex flex-col items-center gap-4 rounded-lg p-3 sm:flex-row">
        <div className="flex flex-shrink-0 items-center justify-center">
          <img
            src="/images/kjmu.png"
            className="w-full max-w-[200px] md:max-w-[300px] lg:max-w-[400px]"
            alt="KJMU"
          />
        </div>

        <div className="flex flex-1 flex-col items-start gap-4">
          <p className="text-base font-bold text-white md:text-xl lg:text-2xl">
            Dasar Hukum Pergub No. 101 Tahun 2021
          </p>
          <p className="text-sm leading-relaxed text-white sm:text-base">
            Kartu Jakarta Mahasiswa Unggul (KJMU) adalah program pemberian bantuan Biaya Peningkatan
            Mutu Pendidikan bagi calon/mahasiswa PTN/PTS dari keluarga tidak mampu secara ekonomi
            dan memiliki potensi akademik yang baik untuk meningkatkan akses dan kesempatan belajar
            di PTN/PTS dengan dibiayai penuh dari dana APBD Provinsi DKI Jakarta.
          </p>
          <div className="flex flex-1 flex-col gap-2 sm:flex-row">
            <div className="flex max-w-xs flex-col items-center rounded-lg bg-gradient-to-r from-red-500 to-orange-500 p-3 text-left text-white shadow-lg sm:max-w-sm">
              <p className="mb-1 w-full text-left text-xl font-bold">2016</p>
              <p className="text-sm">Disediakan Sejak</p>
            </div>
            <div className="flex max-w-xs flex-col items-center rounded-lg border border-gray-400 p-3 text-left text-white shadow-lg sm:max-w-sm">
              <p className="mb-1 w-full text-left text-xl font-bold">SD-SMA/K</p>
              <p className="text-sm">Penerima Bantuan</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
