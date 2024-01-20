import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import { Alert, Button } from "react-bootstrap";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  function addToCart(product) {
    dispatch(add(product));
  }

  const cards = products.map((product) => (
    <div
      className="col-md-3 text-center"
      key={product.id}
      style={{ marginBottom: "20px" }}
    >
      <Card
        style={{
          width: "18rem",
          paddingTop: "20px",
          margin: "10px auto",
        }}
        className="h-100"
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
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add To Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (status === "loading") {
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  }

  if (status === "error") {
    return (
      <Alert variant="danger">
        <h3 style={{ textAlign: "center" }}>
          Something went wrong! Try again later.
        </h3>
      </Alert>
    );
  }

  return <div className="row">{cards}</div>;
};
export default Product;
