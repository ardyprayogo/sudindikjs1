import React from 'react';
import './HamburgerMenu.css';

const HamburgerMenu = ({ isOpen, toggleMenu }: { isOpen: boolean; toggleMenu: () => void }) => {
  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
};

export default HamburgerMenu;
