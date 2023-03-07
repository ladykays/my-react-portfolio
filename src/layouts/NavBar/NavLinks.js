import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom"; //This stops page reload when a link is clicked
import "./style.css";

//TODO: Check the isActive function. It's not working

function NavLinks(props) {
  return (
    <Navbar className="" collapseOnSelect fixed="top" expand="md" bg="light" variant="light">
      <Container fluid>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            {/* NavLink replaces the <a> tag because of the use of NavLink component*/}
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="Work"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Work
            </NavLink>

            <NavLink
              to="About"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About
            </NavLink>

            <NavLink
              to="Contact"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavLinks;
