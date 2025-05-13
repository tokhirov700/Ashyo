import type { Product } from "../types";

export const fetchProductsByBrand = async (brandId: number): Promise<Product[]> => {
    try {
      const response = await fetch(`https://api.ashyo.fullstackdev.uz/brands/all${brandId}`);
      if (!response.ok) {
        throw new Error('Mahsulotlarni olishda xatolik');
      }
      const data = await response.json();
      return data;
    } catch (error: any) {
      throw new Error(error.message || 'Tarmoqqa ulanishda xatolik');
    }
  };
  