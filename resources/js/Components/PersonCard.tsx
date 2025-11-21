import React from 'react';

export default function PersonCard({
  name,
  title,
  imageSrc,
  imageWidth,
}: {
  name: string;
  title: string;
  imageSrc: string;
  imageWidth: string;
}) {
  return (
    <div className="relative">
      <img className={`h-auto ${imageWidth}`} src={imageSrc} alt="kasudin" />
      <div className="absolute bottom-0 right-0 w-max bg-black bg-opacity-50 p-3 text-white">
        <p className="text-xl font-bold">{name}</p>
        <p className="text-sm">{title}</p>
      </div>
    </div>
  );
}
