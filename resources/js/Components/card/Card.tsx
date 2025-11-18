import React, { ReactNode } from 'react';
import './Card.css'; // Pastikan Anda membuat file CSS ini juga

const Card = ({
  children,
  alignItems = 'center', // Default center
  justifyContent = 'center', // Default center
  backgroundColor = ['#ffffff'], // Default solid white, can be an array of colors for gradient
  borderColor = 'transparent', // Default no border
  hasBorder = false, // A flag to explicitly enable/disable border
}: {
  children: ReactNode;
  alignItems: string;
  justifyContent: string;
  backgroundColor: string[];
  borderColor: string;
  hasBorder: boolean;
}) => {
  // Fungsi helper untuk menghasilkan string gradient CSS
  const createGradientString = (colors: string[]) => {
    if (!colors || colors.length === 0) {
      return 'transparent'; // Jika tidak ada warna, kembalikan transparan
    }
    // Jika hanya ada satu warna, itu bukan gradien, hanya warna solid
    if (colors.length === 1) {
      return colors[0];
    }
    // Gabungkan semua warna menjadi string untuk linear-gradient
    // Default 'to bottom right' jika tidak ada arah yang diberikan
    return `linear-gradient(to bottom right, ${colors.join(', ')})`;
  };

  const cardStyle: React.CSSProperties = {
    maxWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: alignItems,
    justifyContent: justifyContent,
    borderColor: hasBorder ? borderColor : 'transparent',
    borderWidth: hasBorder ? '1px' : '0',
    borderStyle: hasBorder ? 'solid' : 'none',
    background: createGradientString(backgroundColor),
  };

  // Perhatikan bahwa properti custom CSS untuk hover tidak digunakan dengan cara ini
  // jika Anda ingin efek hover gradasi, lebih baik ditangani di CSS.
  // Untuk saat ini, kita fokus membuat `background` dinamis.

  return (
    <div className="card-container" style={cardStyle}>
      {children}
    </div>
  );
};

export default Card;
