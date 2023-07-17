// REACT ROUTER DOM
import { Link } from "react-router-dom";

// COMPONENTS
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import img from './logo.png';

// LIBRARYS
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="lg" className="justify-content-center mx-auto" collapseOnSelect bg="danger" variant="dark">
      <Container>
        <Link to="/"><img className='ImgLogo' src={img} alt="logo" /></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto letter" activeKey="/home">
            <Link className="NavBar" to="/">Inicio</Link>
            <Link className="NavBar" to="/contact">Contacto</Link>
            <NavDropdown className="NavDrop" title="Categorias" id="basic-nav-dropdown">
              <Link className='dropdown-item NavDropItem' to="/category/Busos">Busos</Link>
              <div className='dropdown-divider'></div>
              <Link className='dropdown-item NavDropItem' to="/category/Camperas">Camperas</Link>
              <div className='dropdown-divider'></div>
              <Link className='dropdown-item NavDropItem' to="/category/Sweaters">Sweaters</Link>
              <div className='dropdown-divider'></div>
              <Link className='dropdown-item NavDropItem' to="/category/Remeras">Remeras</Link>
            </NavDropdown>
          </Nav>
          <Link className="NavBar" to="/cart"><CartWidget /></Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;