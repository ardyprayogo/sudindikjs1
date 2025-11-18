import React from 'react';
import './CardComponent.css'; // File CSS untuk styling

const CardComponent = ({
  imageUrl,
  title,
  description,
}: {
  imageUrl: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="card-container">
      <div className="card-left">
        <img src={imageUrl} alt={title} className="card-image" />
      </div>
      <div className="card-right">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default CardComponent;
