import React from 'react';

interface GradientCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  gradientFrom?: string; // Opsional: Warna awal gradient (contoh: "from-blue-500")
  gradientTo?: string; // Opsional: Warna akhir gradient (contoh: "to-purple-500")
  isTransparent?: boolean; // Opsional: Background transparan 100% jika true
  hasBorder?: boolean; // Opsional: Border dengan transparansi 50% jika true
  borderColor?: string; // Opsional: Warna border (contoh: "border-blue-500")
  textColor?: string; // Opsional: Warna teks (contoh: "text-black" atau "text-blue-500")
}

const GradientCard: React.FC<GradientCardProps> = ({
  icon,
  title,
  subtitle,
  gradientFrom = 'from-blue-500',
  gradientTo = 'to-purple-500',
  isTransparent = false,
  hasBorder = false,
  borderColor = 'border-gray-500',
  textColor = 'text-black',
}) => {
  const hoverGradientClass = `hover:bg-gradient-to-r ${gradientFrom} ${gradientTo}`;
  return (
    <div className="p-2">
      <div
        className={`rounded-lg p-4 transition-all duration-300 ${isTransparent ? 'bg-transparent' : 'bg-white'} ${hasBorder ? `border ${borderColor} border-opacity-20` : ''} ${hoverGradientClass} hover:scale-105 hover:shadow-lg ${textColor} `}
      >
        <span className="text-2xl">{icon}</span>
        <h3 className="mt-2 text-xl font-bold">{title}</h3>
        <p className="mt-1">{subtitle}</p>
      </div>
    </div>
  );
};

export default GradientCard;
