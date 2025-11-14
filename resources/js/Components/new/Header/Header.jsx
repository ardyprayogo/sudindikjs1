// Header.jsx
import React, { useState } from 'react';
import './Header.css'; // Import file CSS terpisah

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      {/* Logo Section */}
      <div className="header-logo">
        <h1>Logo Sekolah</h1>
      </div>

      {/* Navigation Menu (Desktop) */}
      <nav className="header-nav-desktop">
        <a href="#beranda">Beranda</a>
        <a href="#profil">Profil</a>
        <a href="#sekolah">Sekolah</a>
        <a href="#siswa">Siswa</a>
        <a href="#tenaga-pendidik">Tenaga Pendidik</a>
        <a href="#tenaga-kependidikan">Tenaga Kependidikan</a>
      </nav>

      {/* Hamburger Menu (Mobile) */}
      <div className="header-mobile-toggle">
        <button onClick={toggleMenu} className="hamburger-button">
          {/* Ikon Hamburger */}
          <svg className="hamburger-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isOpen ? (
              <line x1="18" y1="6" x2="6" y2="18" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <nav className="header-nav-mobile">
          <a href="#beranda" onClick={toggleMenu}>Beranda</a>
          <a href="#profil" onClick={toggleMenu}>Profil</a>
          <a href="#sekolah" onClick={toggleMenu}>Sekolah</a>
          <a href="#siswa" onClick={toggleMenu}>Siswa</a>
          <a href="#tenaga-pendidik" onClick={toggleMenu}>Tenaga Pendidik</a>
          <a href="#tenaga-kependidikan" onClick={toggleMenu}>Tenaga Kependidikan</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
