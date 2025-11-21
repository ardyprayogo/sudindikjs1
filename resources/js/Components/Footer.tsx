import React from 'react';

export default function Footer() {
  return (
    <div className="w-full bg-gray-800 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl text-white">🏛️</span>
              <h2 className="text-xl font-bold text-white">
                SUDIN Pendidikan Jakarta Selatan Wilayah 1
              </h2>
            </div>
            <p className="text-sm text-gray-300">
              🎓 "Mencerdaskan Generasi, Membangun Masa Depan!" 🎓
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-white">📞 Kontak</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>📱 Telepon: (021) 1234-5678</li>
              <li>📧 Email: info@sudin-jaksel1.go.id</li>
              <li>📍 Alamat: Jl. Pendidikan No. 123, Jakarta Selatan</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-white">🔍 Navigasi</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                🏠{' '}
                <a href="#" className="text-white hover:text-blue-400">
                  Beranda
                </a>
              </li>
              <li>
                🏛️{' '}
                <a href="#" className="text-white hover:text-blue-400">
                  Profil Kami
                </a>
              </li>
              <li>
                📊{' '}
                <a href="#" className="text-white hover:text-blue-400">
                  Data & Statistik
                </a>
              </li>
              <li>
                🤝{' '}
                <a href="#" className="text-white hover:text-blue-400">
                  Program Bantuan
                </a>
              </li>
              <li>
                📣{' '}
                <a href="#" className="text-white hover:text-blue-400">
                  Pengumuman
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6">
          <div className="mb-4 flex justify-center gap-6">
            <a href="#" className="text-gray-300 hover:text-blue-400">
              📘 Facebook
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400">
              📸 Instagram
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400">
              🐦 Twitter
            </a>
          </div>
          <p className="text-center text-xs text-gray-400">
            © 2025 SUDIN Pendidikan Jakarta Selatan Wilayah 1. 🌟 Seluruh hak cipta dilindungi.
          </p>
        </div>
      </div>
    </div>
  );
}
