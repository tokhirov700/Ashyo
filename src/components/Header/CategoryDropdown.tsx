import React, { useState } from 'react';
import { Select, Spin, Alert } from 'antd';
import { useCategories } from '../../hooks/useCategories';


const CategoryDropdown: React.FC = () => {
  const [shouldFetch, setShouldFetch] = useState(false);
  const { data, error, isLoading } = useCategories(shouldFetch);

  const handleFocus = () => {
    setShouldFetch(true); 
  };

  return (
    <>
      {isLoading && <Spin size="small" />}
      {error && <Alert message="Xatolik" description="Kategoriyalarni olishda xatolik yuz berdi." type="error" />}
      <Select
        placeholder="Kategoriya tanlang"
        style={{ width: 200 }}
        onFocus={handleFocus}
        options={data?.map((category) => ({
          value: category.id,
          label: category.name,
        }))}
      />
    </>
  );
};

export default CategoryDropdown;
