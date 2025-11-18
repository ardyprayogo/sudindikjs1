import './Header.css';

import React, { useState, useEffect } from 'react';
import logo from '@/Images/logodinas.png';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Efek untuk mengubah state 'scrolled' berdasarkan posisi scroll
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        // Angka 50 ini bisa disesuaikan, seberapa jauh scroll baru berubah
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
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo">
          <img style={{ width: '40px' }} src={logo} alt="Logo" />
        </div>
        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <a href="#beranda">Beranda</a>
            </li>
            <li>
              <a href="#profil">Profil</a>
            </li>
            <li>
              <a href="#tenaga-pendidik">Berita</a>
            </li>
            <li>
              <a href="#sekolah">Statistik</a>
            </li>
            <li>
              <a href="#siswa">Program Bantuan</a>
            </li>
            <li>
              <a href="#tenaga-pendidik">Pengumuman</a>
            </li>
            <li>
              <a href="#tenaga-kependidikan">Kontak</a>
            </li>
          </ul>
        </nav>
        <HamburgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
};

export default Header;
