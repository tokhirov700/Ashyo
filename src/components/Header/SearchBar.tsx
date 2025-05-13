import React from 'react';
import CategoryDropdown from './CategoryDropdown';
import '../../styles/Header.css'; 

const SearchBar: React.FC = () => {
  return (
    <div className="search-bar">
     <div className="drop">
     <CategoryDropdown />
     </div>
      <input
        type="text"
        placeholder="What are you looking for?"
        className="search-input"
      />
      <button className="search-button">
        🔍
      </button>
    </div>
  );
};

export default SearchBar;
