import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

const ProductsSkeleton = () => {
  return (
    <Row>
      {Array(12)
        .fill('')
        ?.map((item, index) => (
          <Col md={3} className="mb-3" key={index}>
            <Skeleton height={320} style={{ borderRadius: '10px' }} />
          </Col>
        ))}
    </Row>
  );
};

export default ProductsSkeleton;
