import { Col, Container, Row } from 'react-bootstrap';
import Categories from '../common/banner/Categories';
import Slider from '../common/banner/Slider';

const Banner = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={3}>
            <Categories />
          </Col>
          <Col lg={9} className="mt-3">
            <Slider />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
