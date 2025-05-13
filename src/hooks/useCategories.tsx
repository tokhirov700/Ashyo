import { useQuery } from '@tanstack/react-query';

export interface Category {
  id: string;
  name: string;
}


const fetchCategories = async (): Promise<Category[]> => {
  const response = await fetch('https://api.ashyo.fullstackdev.uz/categories/all'); 
  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }
  return response.json();
};

export const useCategories = (enabled: boolean) => {
  return useQuery<Category[], Error>({
    queryKey: ['categories/all'],
    queryFn: fetchCategories,
    enabled, 
  });
};

