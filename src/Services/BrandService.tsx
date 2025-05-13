import type { Brand } from "../types";

export const fetchBrands = async (): Promise<Brand[]> => {
  try {
    const response = await fetch('https://api.ashyo.fullstackdev.uz/brands/all');
    if (!response.ok) {
      throw new Error('Brandlarni olishda xatolik');
    }
    const data = await response.json();
    console.log(data); 
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message || 'Tarmoqqa ulanishda xatolik');
    } else {
      throw new Error('Nomaʼlum xatolik yuz berdi');
    }
  }
};
