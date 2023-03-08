
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom"; //This stops page reload when a link is clicked
import "./style.css";

function NavLinks() {
  return (
    <Navbar className="" collapseOnSelect fixed="top" expand="md" bg="light" variant="light">
      <Container fluid>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/work" className="nav-link" activeClassName="active">
              Work
            </NavLink>
            <NavLink to="/about" className="nav-link" activeClassName="active">
              About
            </NavLink>
            <NavLink to="/contact" className="nav-link" activeClassName="active">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavLinks;
