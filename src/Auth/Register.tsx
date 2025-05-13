import React, { useState } from 'react';
import { Button, Form, Input, message, Divider } from 'antd';
import { registerUser } from '../Services/AuthService';
import { Link, useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values: any) => {
    setIsLoading(true);
    try {
      await registerUser(values);
      message.success('Ro‘yxatdan muvaffaqiyatli o‘tildi!');
      navigate('/login'); 
    } catch (error: any) {
      message.error(error.message || 'Ro‘yxatdan o‘tishda xatolik');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '100px auto', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', background: '#fff' }}>
      <h2 style={{ textAlign: 'center' }}>Ro‘yxatdan o‘tish</h2>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item name="fullname" label="To‘liq ism" rules={[{ required: true, message: 'Ismingizni kiriting' }]}>
          <Input placeholder="John Doe" />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email', message: 'Email kiriting' }]}>
          <Input placeholder="john@example.com" />
        </Form.Item>
        <Form.Item name="password" label="Parol" rules={[{ required: true, message: 'Parol kiriting' }]}>
          <Input.Password placeholder="Yashirin parol" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading} block>
            Ro‘yxatdan o‘tish
          </Button>
        </Form.Item>
      </Form>
      <Divider />
      <div style={{ textAlign: 'center' }}>
        <span>Allaqachon hisobingiz bormi? </span>
        <Link to="/home">Kirish</Link>
      </div>
    </div>
  );
};

export default Register;
