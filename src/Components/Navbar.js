import React,{useState} from 'react';
import './Navbar.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

//TODO:
//1) add logo
//2) add function for login & Apply Today
//3) Add Nagivation for other Nav.Link
function NavBar() {
  return (
    <div>
        <Navbar bg="white" variant="white">
            <Navbar.Brand>
                <img class="logo"src="/images/image1.jpg"/>
            </Navbar.Brand>
            <Nav className="me-auto"></Nav>
            <Nav>
            <Nav.Link className="ml-auto" href="Home">Home</Nav.Link>
            <Nav.Link href="about-us">About Us</Nav.Link>
            <NavDropdown title="Contract Us">
                <NavDropdown.Item href ="contract/contract">Contract us</NavDropdown.Item>
                <NavDropdown.Item href ="contract/our-team">Our Team</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="mortage-term">Mortage Term</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
            <Nav.Link href="apply-today">Apply Today</Nav.Link>          
            </Nav>   
        </Navbar>     
    </div>
  )
}

export default NavBar