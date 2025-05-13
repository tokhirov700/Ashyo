export const registerUser = async (user: {
    fullname: string;
    email: string;
    password: string;
  }) => {
    try {
      const response = await fetch('https://api.ashyo.fullstackdev.uz/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
  
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Ro‘yxatdan o‘tishda xatolik');
      }
  
      return response.json(); 
    } catch (error) {
      throw new Error(error.message || 'Tarmoqqa ulanishda xatolik');
    }
  };
  
  export const loginUser = async (credentials: {
    email: string;
    password: string;
  }) => {
    try {
      const response = await fetch('https://api.ashyo.fullstackdev.uz/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
  
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Kirishda xatolik');
      }
  
      return response.json(); 
    } catch (error) {
      throw new Error(error.message || 'Tarmoqqa ulanishda xatolik');
    }
  };
  