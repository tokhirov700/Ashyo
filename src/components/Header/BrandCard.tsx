// import React from 'react';
// import { type Brand } from '../../types/index';
// import { Grid } from 'antd';

// const { useBreakpoint } = Grid;

// interface BrandCardProps {
//   brand: Brand;
//   onClick: () => void;
// }

// const BrandCard: React.FC<BrandCardProps> = ({ brand, onClick }) => {
//   const screens = useBreakpoint();

//   // Dynamically calculate the grid span based on screen size
//   const gridSpan = screens.xl ? 3 : screens.lg ? 4 : screens.md ? 6 : screens.sm ? 8 : 12;

//   return (
//     <Grid.Item
//       span={gridSpan}
//       onClick={onClick}
//       style={{
//         padding: 10,
//         cursor: 'pointer',
//       }}
//     >
//       <div
//         style={{
//           width: '100%',
//           height: 100,
//           border: '1px solid #e0e0e0',
//         //   borderRadius: 0,
//           boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
//           backgroundColor: '#fff',
//           transition: 'transform 0.2s',
//           display: 'grid',
//           placeItems: 'center',
//         }}
//         onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
//         onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
//       >
//         <img
//           src={brand.imageUrl}
//           alt={brand.name}
//           style={{
//             maxWidth: '100%',
//             maxHeight: '100%',
//             objectFit: 'contain',
//           }}
//         />
//       </div>
//     </Grid.Item>
//   );
// };

// export default BrandCard;
