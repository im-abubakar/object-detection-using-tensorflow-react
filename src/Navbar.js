import './Navbar.css'; // Import custom CSS for styling
import { Container, Nav, Navbar } from 'react-bootstrap';

function Navbar1() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home" className="brand-text"><h3>ODM</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-links">
            <Nav.Link href="/" className="nav-link">Home</Nav.Link>
            <Nav.Link href="/contactUs" className="nav-link">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
