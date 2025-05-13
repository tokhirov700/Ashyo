import React from 'react';
import TopBar from './TopBar';
import SearchBar from './SearchBar';
import IconsSection from './IconsSection';
import CategoryMenu from './CategoryMenu';
import logo from '../../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <header>
      <TopBar />
      <div className="logo-search">
        <div className="flex">
        
          <img src={logo} alt="Logo" className="w-12 h-12" />

          <SearchBar />
        </div>
        <div className="icon">
        <IconsSection />
        </div>
      </div>
      <CategoryMenu />
    </header>
  );
};

export default Header;
