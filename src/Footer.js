import React from 'react'
import { Row, Col} from 'react-bootstrap'
import {FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram, FaTiktok} from "react-icons/fa"
import './Footer.css'

function Footer() {
  return (
    <div >
        <div class="footer">
            <div class="container">
                <div class="row">
                    <Row className="text-white">
                        <Col className="footer-col">
                            <h4>CONTACT US</h4>
                            <ul>
                                <li><FaPhoneAlt/> (866) 400-6789</li>
                                <li><FaMapMarkerAlt/> 10300 Westoffice Dr, #100, Houston, TX 77042</li>
                                <li><FaEnvelope/> info@lockitlending.com</li>
                            </ul>
                        </Col>
                        <Col className="footer-col">
                            <h4>USEFUL LINKS</h4>
                            <ul>
                                <li>About Our Company</li>
                                <li>Our Team</li>
                                <li>Contact Us</li>
                                <li>Careers</li>
                                <li><b>NMLS#: 1880338</b></li>
                            </ul>
                        </Col>
                        <Col className="footer-col">
                            <h4>SOCIALS</h4>
                            <ul>
                                <li><FaFacebook/> Facebook</li> 
                                <li><FaInstagram/> Instagram</li>    
                                <li><FaTiktok/> Tiktok</li>  
                            </ul>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer