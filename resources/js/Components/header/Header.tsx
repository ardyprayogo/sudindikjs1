import React, { useState, useEffect } from 'react';
import logo from '@/Images/logodinas.png';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false); // State untuk submenu

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setSubmenuOpen(false); // Tutup submenu saat menu utama ditutup
  };

  const toggleSubmenu = (e: { preventDefault: () => void }) => {
    e.preventDefault(); // Mencegah navigasi saat mengklik link parent
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <header
      className={`fixed z-50 w-full transition-all duration-300 ease-in-out ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="logo">
          <img className="w-10" src={logo} alt="Logo" />
        </div>

        {/* Hamburger Menu untuk Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {' '}
            {/* Ikon burger putih */}
            {menuOpen ? (
              <span style={{ color: scrolled ? 'black' : 'white' }}>✕</span>
            ) : (
              <span style={{ color: scrolled ? 'black' : 'white' }}>☰</span>
            )}
          </button>
        </div>

        {/* Navigasi Utama */}
        <nav
          className={`md:flex ${menuOpen ? 'block bg-gray-600 bg-opacity-90' : 'hidden'} absolute left-0 top-full w-full transition-colors duration-300 ease-in-out md:relative md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4">
            <li>
              <a
                href="/"
                className={`block px-4 py-2 ${scrolled ? 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600' : 'text-white hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-200'}`}
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                href="/organisasi"
                className={`block px-4 py-2 ${scrolled ? 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600' : 'text-white hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-200'}`}
              >
                Profil
              </a>
            </li>
            <li>
              <a
                href="/berita"
                className={`block px-4 py-2 ${scrolled ? 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600' : 'text-white hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-200'}`}
              >
                Berita
              </a>
            </li>
            <li>
              <a
                href="#sekolah"
                className={`block px-4 py-2 ${scrolled ? 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600' : 'text-white hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-200'}`}
              >
                Statistik
              </a>
            </li>
            <li className="relative">
              {' '}
              {/* Hapus group class */}
              <a
                href="#siswa"
                onClick={toggleSubmenu}
                className={`block px-4 py-2 ${scrolled ? 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600' : 'text-white hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-200'} flex items-center justify-between`}
              >
                Program Bantuan
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </a>
              {/* Submenu muncul berdasarkan state 'submenuOpen' */}
              <ul
                className={`absolute left-0 z-10 mt-0 w-48 rounded-md bg-white shadow-lg md:top-full md:mt-2 ${submenuOpen ? 'block' : 'hidden'}`}
              >
                <li>
                  <a href="/kjp" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                    KJP+
                  </a>
                </li>{' '}
                {/* hover:bg-gray-200 agar tidak gelap */}
                <li>
                  <a href="/kjmu" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                    KJMU
                  </a>
                </li>
                <li>
                  <a href="/bpms" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                    BPMS
                  </a>
                </li>
                <li>
                  <a href="/rehab" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                    Rehab
                  </a>
                </li>
                <li>
                  <a href="/rehab" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                    ATS
                  </a>
                </li>
                <li>
                  <a
                    href="/sekolah-swasta-gratis"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    Sekolah Swasta Gratis
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="/kontak"
                className={`block px-4 py-2 ${scrolled ? 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600' : 'text-white hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-200'}`}
              >
                Kontak
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
