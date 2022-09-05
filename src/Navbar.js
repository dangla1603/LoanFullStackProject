import React from 'react';
import {Routes, useNavigate} from "react-router-dom";
import './Navbar.css';
import { Button,Nav, Navbar, NavDropdown,Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
        <Navbar collapseOnSelect bg="white" variant="white"expand="lg">
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
                    <NavDropdown.Item href ="contract/our-team">Our Team</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link>Mortage Term</Nav.Link>
                <Button  onClick={routeChange}>
                    Login
                </Button>        
                <button type="button" class="btn btn-secondary" onClick={routeApply}>Apply Today</button>
                
              </Nav>   
            </Navbar.Collapse>
            </Container>  
        </Navbar>
             
    </div>
  )
}

export default NavBar