import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div>
        <div class="footer">
    <div class="container">
        <div class="row">
            <div class="footer-col">
                <h4>CONTACT US</h4>
                <ul>
                    <li><a href="#">(866) 400-6789</a></li>
                    <li><a href="#">10300 Westoffice Dr, #100, Houston, TX 77042</a></li>
                    <li><a href="#">info@lockitlending.com</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>USEFUL LINKS</h4>
                <ul>
                    <li><a href="#">About Our Company</a></li>
                    <li><a href="#">Our Team</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">NMLS#: 1880338</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>NEWSLETTER</h4>
                <input type="email" placeholder="Enter your email"id="footer-email"></input>
                <input type="submit"id="footer-email-btn"></input>
            </div>
            <div class="footer-col">
                <h4>SOCIALS</h4>
                <div class="social-links">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default Footer