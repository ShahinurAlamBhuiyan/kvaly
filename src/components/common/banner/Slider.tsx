import { Carousel } from 'react-bootstrap';
import banner1 from 'assets/images/banner1.png';
import banner2 from 'assets/images/banner2.png';
import banner3 from 'assets/images/banner3.png';
import banner4 from 'assets/images/banner4.png';
import banner5 from 'assets/images/banner5.png';

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner3} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner4} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner5} alt="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
