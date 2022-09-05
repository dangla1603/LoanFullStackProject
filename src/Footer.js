import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './Footer.css'

function Footer() {
  return (
    <div>
        <div class="footer">
            <div class="container">
                <div class="row">
                    <Row className="text-white">
                        <Col className="footer-col">
                            <h4>CONTACT US</h4>
                            <ul>
                                <li>(866) 400-6789</li>
                                <li>10300 Westoffice Dr, #100, Houston, TX 77042</li>
                                <li>info@lockitlending.com</li>
                            </ul>
                        </Col>
                        <Col className="footer-col">
                            <h4>USEFUL LINKS</h4>
                            <ul>
                                <li c>About Our Company</li>
                                <li>Our Team</li>
                                <li>Contact Us</li>
                                <li>Careers</li>
                                <li>NMLS#: 1880338</li>
                            </ul>
                        </Col>
                        <Col className="footer-col">
                            <h4>NEWSLETTER</h4>
                            <input type="email" placeholder="Enter your email"id="footer-email"></input>
                            <input type="submit"id="footer-email-btn"></input>
                        </Col>
                        <Col className="footer-col">
                            <h4>SOCIALS</h4>
                            <i class="fab fa-facebook-f"></i> 
                            <i class="fab fa-twitter"></i>    
                            <i class="fab fa-instagram"></i>  
                            <i class="fab fa-linkedin-in"></i>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer