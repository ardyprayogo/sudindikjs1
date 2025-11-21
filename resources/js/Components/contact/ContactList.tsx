import React from 'react';

export interface ContactInfo {
  id: number;
  type: string;
  value: string;
  icon: string; // Contoh: 'email', 'phone', 'instagram', 'map'
  colorGradient: string; // Contoh: 'from-blue-400 to-indigo-500'
}

interface ContactCardListProps {
  contacts: ContactInfo[];
}

const ContactCardList: React.FC<ContactCardListProps> = ({ contacts }) => {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-8 md:px-16 lg:px-24">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className={`flex flex-col items-center justify-center rounded-lg bg-gradient-to-br p-6 text-white shadow-lg ${contact.colorGradient} transform transition-transform duration-300 hover:scale-105`}
          >
            <div className="mb-4 text-4xl">
              {/* Anda bisa menggunakan ikon dari library seperti Font Awesome atau Heroicons */}
              {/* Untuk contoh ini, saya akan menggunakan representasi teks sederhana */}
              {contact.icon === 'email' && '📧'}
              {contact.icon === 'phone' && '📞'}
              {contact.icon === 'instagram' && '📸'}
              {contact.icon === 'map' && '📍'}
              {contact.icon === 'website' && '🌐'}
              {/* Tambahkan ikon lain sesuai kebutuhan */}
            </div>
            <h3 className="mb-2 text-xl font-bold text-black">{contact.type}</h3>
            <p className="text-center text-lg text-black">{contact.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactCardList;
