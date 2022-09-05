import React from 'react';
// import {useNavigate} from "react-router-dom";
import './Navbar.css';
import { Button,Nav, Navbar, NavDropdown } from 'react-bootstrap';

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
        <Navbar bg="white" variant="white">
            <Navbar.Brand>
                <img className="logo"src="/images/logopng.png" alt='Lock It Lending'/>
            </Navbar.Brand>
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
        </Navbar>     
    </div>
  )
}

export default NavBar