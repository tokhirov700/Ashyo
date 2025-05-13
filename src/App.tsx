import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Products from './pages/Products';
import Register from './Auth/Register';
import Login from './Auth/Login';
import './App.css';

function App() {
  return (
    <div className="div">
      <Routes>
        <Route path="/" element={<Register />} />        
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/products" element={<Products />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/login" element={<Login />} />

      </Routes>
    </div>
  );
}

export default App;
