import { locations } from "../../modules/routing/locations";

import { Container, Navbar, Nav } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    // <Navbar bg="light" expand="lg">
    //   <Container>
    //     <Navbar.Brand href="#home">Tuti Token Dapp</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href={locations.root()}>Home</Nav.Link>
    //         <Nav.Link href={locations.transfer()}>Transfer</Nav.Link>
    //         <Nav.Link href={locations.burn()}>Burn</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <div className="container flex-container">
      <a href="#home" className="navbar-brand">
        Tuti Token Dapp
      </a>
      <button
        aria-controls="basic-navbar-nav"
        type="button"
        aria-label="Toggle navigation"
        className="navbar-toggler collapsed"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="basic-navbar-nav">
        <div className="me-auto navbar-nav flex-container">
          <a href="/" data-rr-ui-event-key="/" className="nav-link">
            Home
          </a>
          <a
            href="/transfer"
            data-rr-ui-event-key="/transfer"
            className="nav-link"
          >
            Transfer
          </a>
          <a href="/burn" data-rr-ui-event-key="/burn" className="nav-link">
            Burn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
