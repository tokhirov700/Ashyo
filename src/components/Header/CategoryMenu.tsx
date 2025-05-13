import React from 'react';
import '../../styles/Header.css';

const categories = [
  'Aksiyalar',
  'Smartfonlar',
  'Noutbooklar',
  'Kondetsionerlar',
  'Telivizorlar',
  'Muzlatgichlar',
  'Kir yuvish mashinalari',
];

const CategoryMenu: React.FC = () => {
  return (
    <div className="category-menu">
      {categories.map((category, index) => (
        <span key={index} className="category-item">
          {category}
        </span>
      ))}
    </div>
  );
};

export default CategoryMenu;
