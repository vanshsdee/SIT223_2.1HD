import React from 'react';
import { Segment } from 'semantic-ui-react';
import './Footer.css'

const Footer = () => {
  return (
    <Segment className="footer-segment">
      <div className="footer-content">
        <p className="copyright">© 2024 DEV@Deakin - All rights reserved</p>
        <ul className="footer-links">
          <li><a href="#">Dev@Deakin22</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Code of Conduct</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </Segment>
  );
};

export default Footer;