import React from "react";
import "./footer.scss";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <ul className="footer__help">
          <span>
            <strong>Help</strong>
          </span>
          <li>
            <a>Delivery & Returns</a>
          </li>
          <li>
            <a>Track Order</a>
          </li>
          <li>
            <a>E-receipts</a>
          </li>
          <li>
            <a>Returns & Refunds</a>
          </li>
          <li>
            <a>FAQs</a>
          </li>
        </ul>
        <ul className="footer__about">
          <span>
            <strong>About Us</strong>
          </span>
          <li>
            <a>Our Heritage</a>
          </li>
          <li>
            <a>Manage Cookies</a>
          </li>
          <li>
            <a>E-receipts</a>
          </li>
          <li>
            <a>Careers</a>
          </li>
        </ul>
        <ul className="footer__more">
          <span>
            <strong>More Fom MARQ-E</strong>
          </span>
          <li>
            <a>Mobile Apps</a>
          </li>
          <li>
            <a>Gift Vouchers</a>
          </li>
          <li>
            <a>Student Discount</a>
          </li>
        </ul>
        <ul className="footer__inspire">
          <span>
            <strong>Get Inspired</strong>
          </span>
          <li>
            <a>Style Guides</a>
          </li>
          <li>
            <a>MARQ-E Blog</a>
          </li>
          <li>
            <a>Personal Shopping</a>
          </li>
        </ul>
      </div>
      <div className="socials">
        <ul className="social-links">
          <li>
            <i class="fab fa-facebook-f"></i>
          </li>
          <li>
            <i class="fab fa-twitter"></i>
          </li>
          <li>
            <i class="fab fa-instagram"></i>
          </li>
          <li>
            <i class="fab fa-youtube"></i>
          </li>
          <li>
            <i class="fab fa-pinterest-p"></i>
          </li>
        </ul>
      </div>
      <div className="copyright">
        <span>&copy; MARQ-E 2020.</span>
      </div>
    </footer>
  );
};

export default Footer;
