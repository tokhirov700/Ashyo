import React from 'react';
import '../../styles/Header.css';

const icons = [
  { icon: '🛒', count: 2 },
  { icon: '❤️', count: 11 },
  { icon: '📦', count: 7 },
  { icon: '👤' }
];

const IconsSection: React.FC = () => {
  return (
    <div className="icons-section">
      {icons.map((item, idx) => (
        <div key={idx} className="icon-item">
          <span style={{ fontSize: '24px' }}>{item.icon}</span>
          {item.count && (
            <span className="icon-badge">
              {item.count}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default IconsSection;
