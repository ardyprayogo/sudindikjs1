import React from 'react';

// --- Definisi Tipe (Interfaces) ---

interface NewsItem {
  imageUrl?: string; // Tanda '?' berarti properti ini opsional
  title: string;
  description: string;
  link: string;
}

interface AnnouncementItem {
  title: string;
  description: string;
  date?: string; // Tanda '?' berarti properti ini opsional
  link?: string; // Tanda '?' berarti properti ini opsional
}

interface NewsAnnouncementLayoutProps {
  newsItems: NewsItem[];
  announcementItems: AnnouncementItem[];
}

// --- Komponen NewsAnnouncementLayout ---

const NewsAnnouncementLayout: React.FC<NewsAnnouncementLayoutProps> = ({
  newsItems,
  announcementItems,
}) => {
  return (
    <div className="mx-auto my-5 flex max-w-7xl flex-col gap-5 p-5 md:flex-row">
      {/* Sisi Kiri: Berita */}
      <div className="flex-2 rounded-lg border border-gray-200 bg-gray-50 p-4 shadow-md">
        <h2 className="mb-5 text-center text-2xl font-semibold text-gray-800">Berita Terbaru</h2>
        <div className="flex flex-wrap justify-start gap-4">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="flex w-full flex-grow flex-col rounded-md border border-gray-100 bg-white p-3 shadow-sm transition-all duration-200 ease-in-out hover:shadow-md md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.66rem)]"
            >
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="mb-3 h-40 w-full rounded-md object-cover"
                />
              )}
              <h3 className="mb-2 text-lg font-medium text-blue-600">{item.title}</h3>
              <p className="mb-3 flex-grow text-sm text-gray-700">{item.description}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="self-end text-sm font-semibold text-blue-600 hover:text-blue-800"
              >
                Baca Selengkapnya
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Sisi Kanan: Pengumuman */}
      <div className="flex flex-1 flex-col rounded-lg border border-gray-200 bg-blue-50 p-4 shadow-md">
        <h2 className="mb-5 text-center text-2xl font-semibold text-gray-800">Pengumuman</h2>
        <div className="flex flex-col gap-3">
          {announcementItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col rounded-md border border-gray-100 bg-white p-3 shadow-sm transition-all duration-200 ease-in-out hover:shadow-md"
            >
              <h3 className="mb-1 text-base font-medium text-green-600">{item.title}</h3>
              <p className="mb-2 text-sm text-gray-700">{item.description}</p>
              {item.date && (
                <span className="mb-1 self-end text-xs text-gray-500">{item.date}</span>
              )}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start text-xs font-semibold text-green-600 hover:text-green-800"
                >
                  Lihat Detail
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsAnnouncementLayout;
