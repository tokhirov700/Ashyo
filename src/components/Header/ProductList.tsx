import React from 'react';
import { type Product } from '../../types';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px', marginTop: 40 }}>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: '1px solid #e0e0e0',
            borderRadius: 8,
            padding: 16,
            textAlign: 'center',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          }}
        >
          <img src={product.imageUrl} alt={product.name} style={{ maxWidth: '100%', height: 120, objectFit: 'contain' }} />
          <h4>{product.name}</h4>
          <p><strong>{product.price} so'm</strong></p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
