import React from 'react';
import './CardV2.css';

type CardV2Props = {
  children?: React.ReactNode;
  startColor?: string;
  endColor?: string;
  width?: string | number;
  height?: string | number;
};

const CardV2: React.FC<CardV2Props> = ({ children, startColor, endColor, width, height }) => {
  const cardStyle: React.CSSProperties & Record<string, string | number> = {
    height: height || '100%', // Tinggi default jika tidak ditentukan
    ['--start-color']: startColor || '#4CAF50', // Warna awal gradasi default (hijau)
    ['--end-color']: endColor || '#2196F3', // Warna akhir gradasi default (biru)
  };

  return (
    <div style={{ padding: '10px' }}>
      <div className="card-container" style={cardStyle}>
        <div className="card-content">{children}</div>
      </div>
    </div>
  );
};

export default CardV2;
