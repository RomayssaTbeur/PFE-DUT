import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { BsList } from 'react-icons/bs'; // Importer l'icône de menu déroulant

function Header() {
  return (
    <Navbar expand="lg" className="bg-dark shadow-lg"> {/* Ajouter la classe "bg-dark" pour le fond noir */}
      <Container fluid>
        {/* Bouton de menu déroulant */}
        <Navbar.Brand href="#" style={{ color: 'white' }}> {/* Définir la couleur du texte en blanc */}
          <BsList />
        </Navbar.Brand>

        {/* Contenu de la Navbar */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            {/* Ajouter la classe "text-white" pour définir la couleur du texte en blanc */}
            <Link to="/" className="nav-link text-white">Home</Link>
            <Link to="/Matchs" className="nav-link text-white">Matchs</Link>
            <Link to="Tickets" className="nav-link text-white">Tickets</Link>
            <Link to="Teams" className="nav-link text-white">Teams</Link>
            <Link to="/stadiums" className="nav-link text-white">Stadiums</Link>
            <NavDropdown title={<span className="text-white">others</span>} id="navbarScrollingDropdown"> {/* Encadrer "others" avec un span et appliquer la classe "text-white" */}
               
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
        
              <NavDropdown.Item href="/register">Sign up</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" style={{ color: 'white' }}>Search</Button> {/* Définir la couleur du texte en blanc */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default Header;
