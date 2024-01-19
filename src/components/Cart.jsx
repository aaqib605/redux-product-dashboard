import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);

  function removeItem(id) {
    dispatch(remove(id));
  }

  const cards = cartProducts.map((product) => (
    <>
      <div
        className="col-md-12 text-center"
        key={product.id}
        style={{ marginBottom: "20px" }}
      >
        <Card
          style={{
            width: "18rem",
            paddingTop: "20px",
            margin: "10px auto",
          }}
          className="h-120"
        >
          <div className="text-center">
            <Card.Img
              variant="top"
              src={product.image}
              style={{ width: "100px" }}
            />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>INR: {product.price}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="danger" onClick={() => removeItem(product.id)}>
              Remove Item
            </Button>
          </Card.Footer>
        </Card>
      </div>
    </>
  ));

  return (
    <div className="row">
      <h1 style={{ textAlign: "center" }}>Items in Cart</h1>

      {cards}
    </div>
  );
};
export default Cart;
