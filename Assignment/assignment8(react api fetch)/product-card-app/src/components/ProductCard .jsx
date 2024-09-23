
import React from 'react';
import './css/ProductCard.css'

const ProductCard = ({ product }) => {
  const { image, title, price, description } = product;

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-price">${price}</p>
      <p className="product-description">{description.slice(0, 100)}...</p>
    </div>
  );
};

export default ProductCard;
