
import React, { useState } from 'react';
import { Button, Divider, Form, Input, message } from 'antd';
import { loginUser } from '../Services/AuthService';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values: any) => {
    setIsLoading(true);
    try {
      await loginUser(values);
      message.success('Kirish muvaffaqiyatli!');
      navigate('/home'); 
    } catch (error: any) {
      message.error(error.message || 'Kirishda xatolik');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '100px auto', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', background: '#fff' }}>
      <h2 style={{ textAlign: 'center' }}>Kirish</h2>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email', message: 'Email kiriting' }]}>
          <Input placeholder="john@example.com" />
        </Form.Item>
        <Form.Item name="password" label="Parol" rules={[{ required: true, message: 'Parol kiriting' }]}>
          <Input.Password placeholder="Yashirin parol" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading} block>
            Kirish
          </Button>
        </Form.Item>
      </Form>
      <Divider />
      <div style={{ textAlign: 'center' }}>
        <span>Yangi hisob yaratmoqchimisiz? </span>
        <Link to="/register">Ro‘yxatdan o‘tish</Link>
      </div>
    </div>
  );
};

export default Login;
