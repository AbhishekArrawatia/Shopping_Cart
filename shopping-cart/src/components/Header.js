import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "./Context/Context";
const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            className="m-auto"
            placeholder="Search a product"
            onChange={(e) => {
              productDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              });
            }}
          />
        </Navbar.Text>
        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart padding="10px" color="white" fontSize="25px" />
              <Badge fontSize="10px">{cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 370 }}>
              {cart.length > 0 ? (
                <div>
                  {cart.map((prod) => (
                    <span className="cartItem">
                      <img
                        src={prod.image}
                        alt={prod.title}
                        className="cartItemImage"
                      />
                      <div className="cartItemDetail">
                        <span>{prod.title}</span>
                        <span>{`$${prod.price}`}</span>
                      </div>
                      <AiFillDelete
                        style={{ cursor: "pointer" }}
                        fontSize="30"
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                </div>
              ) : (
                <div style={{ padding: 10 }}>Cart is empty</div>
              )}
              <Link to="/cart">
                <Button
                  disabled={!cart.length > 0}
                  style={{ width: "95%", margin: "0 10px" }}
                >
                  Go to cart
                </Button>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
