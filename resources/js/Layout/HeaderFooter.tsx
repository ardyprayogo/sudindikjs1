import React, { Children } from 'react';
import Header from '../Components/header/Header';
import Footer from '../Components/Footer';

export default function HeaderFooter({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
