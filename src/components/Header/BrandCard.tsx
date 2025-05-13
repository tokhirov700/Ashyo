import React from 'react';
import { type Brand } from '../../types/index';

interface BrandCardProps {
  brand: Brand;
}

const BrandCard: React.FC<BrandCardProps> = ({ brand }) => {
  return (
    <div
      style={{
        width: 120,
        height: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        border: '1px solid #e0e0e0',
        borderRadius: 8,
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
        transition: 'transform 0.2s',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <img
        src={brand.imageUrl}
        alt={brand.name}
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          objectFit: 'contain',
        }}
      />
    </div>
  );
};

export default BrandCard;