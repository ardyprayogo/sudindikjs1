import React from 'react';
import PersonCard from '../PersonCard';

export default function VisiSection() {
  return (
    <div className="flex flex-col items-center justify-center px-5 pt-10 md:flex-row md:px-20 md:pt-20">
      <div className="mb-8 flex flex-1 flex-col items-center md:mb-0 md:items-start">
        <div className="mb-2 flex flex-col">
          <p className="text-left text-xl font-bold text-blue-800 sm:text-2xl md:text-3xl lg:text-4xl">
            Visi Dinas Pendidikan
          </p>
          <p className="text-left text-base sm:text-lg md:text-xl">
            Mewujudkan Pendidikan yang Tuntas dan Berkualitas untuk Semua
          </p>
        </div>
        <div className="mt-4 flex w-full flex-col justify-center gap-4 sm:flex-row md:justify-start">
          {/* Card Pertama: Gradasi Biru ke Ungu */}
          <div className="justify-left mx-auto flex max-w-xs flex-col items-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 p-3 text-left text-white shadow-lg sm:mx-0 sm:max-w-sm">
            <p className="mb-1 w-full text-left text-xl font-bold">72,63%</p>
            <p className="text-sm">Sekolah akreditasi A</p>
          </div>
          {/* Card Kedua: Hanya Border */}
          <div className="justify-left border-1 mx-auto flex max-w-xs flex-col items-center rounded-lg border-gray-400 p-3 text-left text-gray-800 shadow-lg sm:mx-0 sm:max-w-sm">
            <p className="mb-1 w-full text-left text-xl font-bold">94,25%</p>
            <p className="text-sm">Rerata lama sekolah</p>
          </div>
        </div>
      </div>
      <PersonCard
        imageWidth={'max-w-full md:max-w-md lg:max-w-lg'}
        name={'Santoso'}
        title={'Kepala Sudin Pendidikan JS 1'}
        imageSrc={'/images/Picture1.png'}
      />
    </div>
  );
}
