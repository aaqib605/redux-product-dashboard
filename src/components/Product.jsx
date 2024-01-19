import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Product = () => {
  const [products, setProducts] = useState([]);

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
          <Button variant="primary">Add To Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  useEffect(() => {
    async function getProducts() {
      const fakeStoreApi = "https://fakestoreapi.com/products";

      try {
        const response = await axios.get(fakeStoreApi);
        const data = response.data;
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }

    getProducts();
  }, []);

  return <div className="row">{cards}</div>;
};
export default Product;
