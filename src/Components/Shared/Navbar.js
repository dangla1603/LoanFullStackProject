import React from 'react';
// import {useNavigate} from "react-router-dom";
import './Navbar.css';
import { Button,Nav, Navbar, NavDropdown,Container } from 'react-bootstrap';

//TODO:
//1) add logo
//2) add function for login & Apply Today
//3) Add Nagivation for other Nav.Link
function NavBar() {

  // let navigate = useNavigate();
  // const routeChange = ()=>{
  //   let path = './Login';
  //   navigate (path);
  // }

  return (
    <div>     
        <Navbar collapseOnSelect bg="white" variant="white"expand="lg">
          <Container fluid>
          <Navbar.Brand>
                <img class="logo"src="/images/logopng.png"/>
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
              <Button color="primary">
                  Login
              </Button>
              <Nav.Link>
                <Button>Apply Today</Button>
              </Nav.Link>          
            </Nav>   
            </Navbar.Collapse>
            </Container>  
        </Navbar>
             
    </div>
  )
}

export default NavBar