import "../../styles/Header/TopBar.css";
import React, { useState, useEffect, useRef } from 'react';

const TopBar: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState('Uz');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (lang: string) => {
    setSelectedLang(lang);
    setDropdownOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex">
      <div>
        <div className="flex-two">
          <span>📍 Tashkent</span>
          <span>About Us</span>
          <span>Products</span>
          <span>Contacts</span>
        </div>
      </div>
      <div className="flex-item">
        <span>📞 +998 (71) 123-45-67</span>
        <div
          className="language"
          style={{ position: 'relative', display: 'inline-block' }}
          ref={dropdownRef}
        >
          <button
            className="cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {selectedLang} &#9660;
          </button>
          {dropdownOpen && (
            <div
              className="dropdown-content"
              style={{
                position: 'absolute',
                backgroundColor: '#f1f1f1',
                minWidth: '80px',
                boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
                zIndex: 1,
              }}
            >
              <div
                data-lang="Uz"
                style={{ padding: '8px', cursor: 'pointer' }}
                onClick={() => handleSelect('Uz')}
              >
                Uz
              </div>
              <div
                data-lang="Ru"
                style={{ padding: '8px', cursor: 'pointer' }}
                onClick={() => handleSelect('Ru')}
              >
                Ru
              </div>
              <div
                data-lang="En"
                style={{ padding: '8px', cursor: 'pointer' }}
                onClick={() => handleSelect('En')}
              >
                En
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
