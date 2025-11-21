import React from 'react';
import './Section.css'; // Pastikan file CSS ini sudah ada atau dibuat

interface SectionProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  gradientBackground?: string[]; // Contoh: ['#color1', '#color2', '#color3']
  gradientTitle?: string[]; // Contoh: ['#color1', '#color2']
  gradientSubTitle?: string[];
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  gradientBackground, // Contoh: ['#color1', '#color2', '#color3']
  gradientTitle, // Contoh: ['#color1', '#color2']
  gradientSubTitle,
  children,
}) => {
  // Fungsi helper untuk menghasilkan string gradient CSS
  const createGradientString = (colors?: string[]): string => {
    if (!colors || colors.length === 0) {
      return ''; // Jika tidak ada, kembalikan string kosong
    }
    // Jika hanya ada satu warna, itu bukan gradien, hanya warna solid
    if (colors.length === 1) {
      return colors[0];
    }
    // Gabungkan semua warna menjadi string untuk linear-gradient
    return `linear-gradient(to right, ${colors.join(', ')})`;
  };

  const sectionStyle = {
    background:
      createGradientString(gradientBackground) || 'linear-gradient(to right, #000000, #000000)', // Default hitam
  };

  const titleStyle = {
    background:
      createGradientString(gradientTitle) || 'linear-gradient(to right, #000000, #000000)', // Default hitam
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block', // Penting agar gradasi teks bekerja dengan baik
  };

  const subtitleStyle = {
    background:
      createGradientString(gradientSubTitle) || 'linear-gradient(to right, #000000, #000000)', // Default hitam
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block', // Penting agar gradasi teks bekerja dengan baik
  };

  return (
    <div style={sectionStyle}>
      <div className="section-container">
        <h2 className="lg:text-4x section-title text-xl sm:text-2xl md:text-3xl" style={titleStyle}>
          {title}
        </h2>
        {subtitle && (
          <p
            className="section-subtitle text-sm sm:text-base md:text-lg lg:text-xl"
            style={subtitleStyle}
          >
            {subtitle}
          </p>
        )}
      </div>
      <div className="mx-auto max-w-[1000px] pb-[80px]">{children}</div>
    </div>
  );
};

export default Section;
