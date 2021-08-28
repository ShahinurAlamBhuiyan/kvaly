import { Card, Col } from 'react-bootstrap';
import { IProduct } from 'Models/types';
import imageUrlParser from 'utils/imageUrlParser';

interface IProps {
  product: IProduct;
}

const Product = ({ product }: IProps) => {
  const { name, image } = product;
  return (
    <Col md={3} className="mb-3" style={{ minHeight: '400px' }}>
      <Card className="h-100">
        <Card.Img variant="top" src={imageUrlParser(image)} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
