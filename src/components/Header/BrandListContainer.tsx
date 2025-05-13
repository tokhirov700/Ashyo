import React, { useState } from 'react';
import { Card, Drawer, Row, Col } from 'antd';
import { type Brand } from '../../types';

interface BrandListProps {
  brands: Brand[];
}

const BrandList: React.FC<BrandListProps> = ({ brands }) => {
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleCardClick = (brand: Brand) => {
    setSelectedBrand(brand);
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    setSelectedBrand(null);
  };

  return (
    <>
      <Row gutter={16} style={{ marginBottom: 24 }}> 
        {brands.map((brand, index) => (
          <Col 
            xs={24} 
            sm={12} 
            md={index === 0 ? 16 : 8} 
            lg={index === 0 ? 12 : 6}  
            key={brand.id}
          >
            <Card
              hoverable
              cover={
                <img
                  alt={brand.name}
                  src={brand.imageUrl}
                  style={{ height: 120, objectFit: 'contain' }}
                />
              }
              onClick={() => handleCardClick(brand)}
              style={{ marginBottom: 16 }} 
            >
              <Card.Meta title={brand.name} />
            </Card>
          </Col>
        ))}
      </Row>

      <Drawer
        title={selectedBrand?.name}
        placement="left"
        onClose={handleCloseDrawer}
        open={drawerOpen}
        width={300}
      >
        {selectedBrand && (
          <div style={{ textAlign: 'center' }}>
            <img
              src={selectedBrand.imageUrl}
              alt={selectedBrand.name}
              style={{ maxWidth: '100%', maxHeight: 200 }}
            />
            <p style={{ marginTop: 16 }}>ID: {selectedBrand.id}</p>
          </div>
        )}
      </Drawer>
    </>
  );
};

export default BrandList;
