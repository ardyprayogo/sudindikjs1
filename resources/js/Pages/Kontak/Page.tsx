import React from 'react';
import ContactSection from '../../Components/contact/ContactSection';
import HeaderFooter from '../../Layout/HeaderFooter';
import ContactListSection from '../../Components/contact/ContactListSection';

export default function Page() {
  return (
    <>
      <HeaderFooter>
        <ContactSection />
        <ContactListSection />
      </HeaderFooter>
    </>
  );
}
