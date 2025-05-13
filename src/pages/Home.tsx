import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import BrandList from '../components/Header/BrandListContainer';
import { fetchBrands } from '../Services/BrandService';
import { type Brand } from '../types';

const Home: React.FC = () => {
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    const getBrands = async () => {
      try {
        const data = await fetchBrands();
        setBrands(data);
      } catch (err) {
        console.error('Brendlarni yuklashda xatolik:', err);
      }
    };

    getBrands();
  }, []);

  return (
    <div className="home">
      <div className="section">
      <Header />
      </div>
      <BrandList brands={brands} />
    </div>
  );
};

export default Home;
