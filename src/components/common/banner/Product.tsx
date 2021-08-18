import { Card, Col } from 'react-bootstrap';
import productImg from 'assets/images/product5.jpeg';

const Product = () => {
  return (
    <Col md={2} className="mb-3">
      <Card>
        <Card.Img variant="top" src={productImg} />
        <Card.Body>
          <Card.Title>The Shoe Rack (Regular Shop)</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
