import type { Product } from "../types";

export const fetchProductsByBrand = async (brandId: number): Promise<Product[]> => {
  try {
    const response = await fetch(`https://api.ashyo.fullstackdev.uz/products/brand/${brandId}`);
    
    if (!response.ok) {
      throw new Error('Mahsulotlarni olishda xatolik');
    }

    const data = await response.json();
    return data;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Tarmoqqa ulanishda xatolik';
    throw new Error(message);
  }
};
