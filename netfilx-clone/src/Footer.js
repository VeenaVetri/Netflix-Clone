import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__socials">
        <i class="bx bxl-instagram"></i>
        <i class="bx bxl-facebook-square"></i>
        <i class="bx bxl-twitter"></i>
        <i class="bx bxl-youtube"></i>
      </div>
      <div className="footer__links">
        <ul>
          <li>FAQ</li>
          <li>Investor Relations</li>
          <li>Privacy</li>
          <li>Speed Test</li>
        </ul>
        <ul>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
          <li>Legal Notices</li>
        </ul>
        <ul>
          <li>Account</li>
          <li>Ways to Watch</li>
          <li>Corporate Information</li>
          <li>Only on Netflix</li>
        </ul>
        <ul>
          <li>Media Center</li>
          <li>Terms of Use</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <select name="lang" id="language">
        <option value="english">English</option>
        <option value="hindi">हिंदी</option>
      </select>

      <p className="copyright">&#169; 1997- 2021 Netflix Clone, Inc</p>
    </div>
  );
}

export default Footer;