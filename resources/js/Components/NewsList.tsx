import React, { useState, useEffect } from 'react';

export interface NewsArticle {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface NewsListProps {
  initialArticles: NewsArticle[];
  articlesPerPage?: number; // Jumlah artikel yang ditambahkan saat "load more"
}

const NewsList: React.FC<NewsListProps> = ({ initialArticles, articlesPerPage = 5 }) => {
  const [visibleArticles, setVisibleArticles] = useState<NewsArticle[]>([]);
  const [loadCount, setLoadCount] = useState(1); // Mengatur berapa banyak "set" artikel yang sudah dimuat

  useEffect(() => {
    // Muat artikel awal saat komponen dimount atau initialArticles berubah
    setVisibleArticles(initialArticles.slice(0, loadCount * articlesPerPage));
  }, [initialArticles, loadCount, articlesPerPage]);

  const handleLoadMore = () => {
    setLoadCount((prevCount) => prevCount + 1);
  };

  const hasMoreArticles = visibleArticles.length < initialArticles.length;

  return (
    <div className="container mx-auto px-4 py-8 sm:px-8 md:px-16 lg:px-24">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {visibleArticles.map((article) => (
          <div
            key={article.id}
            className="transform overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <img
              src={article.imageUrl}
              alt={article.title}
              className="h-48 w-full rounded-lg object-cover"
            />{' '}
            {/* Menambahkan rounded-lg pada gambar */}
            <div className="pt-4">
              {' '}
              {/* Menghilangkan padding horizontal */}
              <h3 className="mb-2 text-xl font-bold text-gray-800">{article.title}</h3>
              <p className="text-sm text-gray-600">{article.description}</p>
            </div>
          </div>
        ))}
      </div>

      {hasMoreArticles && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleLoadMore}
            className="rounded-lg bg-blue-600 px-6 py-3 font-bold text-white transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Muat Lebih Banyak Berita
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsList;
