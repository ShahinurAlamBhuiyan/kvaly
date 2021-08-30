import {
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
  Button,
} from 'react-bootstrap';
import { FiPhoneCall, FiShoppingBag } from 'react-icons/fi';
import { FaRegEnvelope } from 'react-icons/fa';
import { BsPhone } from 'react-icons/bs';
import { BiSearch, BiUser } from 'react-icons/bi';
import logo from 'assets/images/kvalyLogo.png';
import { useSelector } from 'react-redux';
import { AppState } from 'redux/store';
import { IProduct } from 'Models/types';
import { Link } from 'react-router-dom';

const Header = () => {
  const cart: IProduct[] = useSelector((state: AppState) => state.cart);
  return (
    <div className="header__Component">
      <div className="top_Header py-2 bg-light border-bottom">
        <Container className="d-flex align-items-center justify-content-between">
          <ul className="unstyled d-flex align-items-center gap-4">
            <li>
              <FiPhoneCall />
              <a href="tel:09638111666">09638111666</a>
            </li>
            <li>
              <FaRegEnvelope />
              <a href="mail-to:support@kvaly.com">support@kvaly.com</a>
            </li>
          </ul>
          <div>
            <BsPhone />
            <a href="https://play.google.com/store/apps/details?id=bd.com.kvaly.kvalyshop">
              Save big on our app!
            </a>
          </div>
        </Container>
      </div>

      <div className="middle_header">
        <Container>
          <div className="d-flex align-items-center gap-5 py-3">
            <Link to="/">
              <img className="branding" src={logo} alt="" />
            </Link>
            <InputGroup>
              <FormControl
                className="border border-primary"
                placeholder="Search Here..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="primary" id="button-addon2">
                <BiSearch className="text-white" />
              </Button>
            </InputGroup>
            <ul className="icon-list list-unstyled d-flex gap-3">
              <li>
                <Link to="/checkout">
                  <FiShoppingBag />
                  <span className="badge bg-primary">{cart.length}</span>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <BiUser />
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Categories</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">News feed</Nav.Link>
            <Nav.Link href="#features">Merchant Zone</Nav.Link>
            <Nav.Link href="#pricing">Help</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
