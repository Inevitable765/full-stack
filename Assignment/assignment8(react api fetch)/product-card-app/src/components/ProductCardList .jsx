
import React, { useState, useEffect } from 'react';
import './css/ProductCardList.css'
import ProductCard from './ProductCard ';

const ProductCardList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);  
        setLoading(false);  
      } catch (err) {
        setError(err.message);
        setLoading(false);  
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div className="product-card-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
        
      ))}
    </div>
  );
};

export default ProductCardList;
