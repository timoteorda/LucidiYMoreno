import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

const NavBar = () => {
  return (
    <header>
      <Navbar className='navBar' bg="light" expand="lg">
        <Container>
          <div>
              <Navbar.Brand><Link to='/'><img className='logo' src="../img/logo.jpg" alt="Logo Lucidi y Moreno" /></Link></Navbar.Brand>
          </div>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto contenedorBarra">
                <Nav.Link><Link className='linkNav' to='/'>Inicio</Link></Nav.Link>
                <NavDropdown  className='linkNav' title="Productos" id="basic-nav-dropdown">
                  <NavDropdown.Item><Link className='subLinkNav' to='/motoresElectricos'>Motores eléctricos</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link className='subLinkNav' to='/arranquesSuaves'>Arranques suaves</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link className='subLinkNav' to='/controlYproteccion'>Control y proteccion</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link className='subLinkNav' to='/variadorDeFrecuencias'>Variador de frecuencias</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link className='subLinkNav' to='/electrobombas'>Electrobombas</Link></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown  className='linkNav' title="Servicios" id="basic-nav-dropdown">
                  <NavDropdown.Item><Link className='subLinkNav' to='/reparacion'>Reparación de motores eléctricos</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link className='subLinkNav' to='/mantenimiento'>Mantenimiento de motores eléctricos</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link className='subLinkNav' to='/balanceo'>Balanceo dinámico</Link></NavDropdown.Item>
                </NavDropdown>
                <Nav.Link><Link className='linkNav' to='/manuales'>Manuales</Link></Nav.Link>
                <Nav.Link><Link className='linkNav' to='/nosotros'>Nosotros</Link></Nav.Link>
                <Nav.Link><Link className='linkNav' to='/contacto'>Contacto</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>          
        </Container>
      </Navbar>
    </header>
      
  )
}

export default NavBar