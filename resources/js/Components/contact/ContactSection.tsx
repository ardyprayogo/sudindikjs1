import React from 'react';
import Section from '../section/SectionV2';
import ContactForm from '../ContactForm';

export default function ContactSection() {
  return (
    <Section
      title="Kontak Kami"
      subtitle="Berikan pesan yang ingin Anda sampaikan kepada kami"
      gradientBackground={['#2159a2ff', '#4c146cff']}
      gradientTitle={['#fff']}
      gradientSubTitle={['#fff']}
    >
      <div style={{ padding: '0px 15px' }}>
        <ContactForm />
      </div>
    </Section>
  );
}
