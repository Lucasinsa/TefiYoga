import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavMobile } from './NavMobile/NavMobile';

const NavBar = () => {
  return (
    <>
    <Navbar expand="lg" className="custom-navbar fixed-top">
      <Container fluid className='custom-nav-container'>
          <Navbar.Brand href="#presentation">
              <img src="./desk-logo.png" alt="Logo" className='custom-desk-logo'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto custom-nav">
                <Nav.Link href="#about-me">Sobre mí</Nav.Link>
                <Nav.Link href="#my-classes">Mis clases</Nav.Link>
                <Nav.Link href="#contact">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
    <NavMobile/>
    </>
  )
}

export default NavBar;