import React from 'react';
import './Navbar.css';
import { Button,Nav, Navbar, NavDropdown,Container } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";

//TODO:
//1) add logo
//2) add function for login & Apply Today
//3) Add Nagivation for other Nav.Link
function NavBar() {

  const navigate = useNavigate();
  const routeChange = ()=>{
    navigate ('./Login');
  }
  const routeHome =()=>{
    navigate('/');
  }
  const routeApply=()=>{
    navigate('/LockitStaff');
  }

  return (
    <div>     
        <Navbar collapseOnSelect='true' bg="dark" variant="white" expand="lg" fixed='top'>
          <Container fluid>
            <Navbar.Brand>
                  <img class="logo"src="/images/logopng.png" alt='Lockit Logo' onClick={routeHome}/>
              </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link className="ml-auto" href="Home">Home</Nav.Link>
                <Nav.Link>About Us</Nav.Link>
                <NavDropdown title="Contract Us">
                    <NavDropdown.Item href ="contract/contract">Contract us</NavDropdown.Item>
                    <NavDropdown.Item href ="contract/our-team" >Our Team</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="https://www.nextdoorlending.com/glossary" target="_blank">Mortage Term</Nav.Link>
                <Button  onClick={routeChange}>
                    Login
                </Button>        
                <Button class="btn btn-secondary" variant='warning' onClick={routeApply}>Apply Today</Button>
                
              </Nav>   
            </Navbar.Collapse>
            </Container>  
        </Navbar>
             
    </div>
  )
}

export default NavBar