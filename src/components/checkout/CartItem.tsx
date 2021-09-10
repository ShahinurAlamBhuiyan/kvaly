import { IProduct } from 'Models/types';
import { Col, Row } from 'react-bootstrap';
import { FaRegTimesCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { removeFromCart } from 'redux/actionsCreators/cartAction';
import imageUrlParser from 'utils/imageUrlParser';

interface IProps {
  item: IProduct;
}
const CartItem = ({ item }: IProps) => {
  const { name, image, description, price, _id } = item;
  const dispatch = useDispatch();
  return (
    <Row>
      <Col md={1}>
        <img className="img-fluid" src={imageUrlParser(image)} alt={name} />
      </Col>
      <Col>
        <h5 className="mt-4">{description}</h5>
      </Col>
      <Col md={2} className="d-flex justify-content-between align-items-center">
        <button
          onClick={() => dispatch(removeFromCart(_id as string))}
          className="btn"
        >
          <FaRegTimesCircle />
        </button>
        <h6 className="m-0">৳ {price}</h6>
      </Col>
    </Row>
  );
};

export default CartItem;
