import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Dummy Store</Navbar.Brand>
        <Nav>
          <Nav.Link href="/">Products</Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Text style={{ marginLeft: "auto" }}>
            <Nav.Link href="/cart">My Bag 0</Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
