import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <div className="Footer" id="footer">
      <div className="social-media">
        <a target="_blank" rel="noopener noreferrer" href="https://fr.linkedin.com/company/oxao">
          <img src="/images/linkedin-icon.svg" alt="linkedin" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ContactOxao">
          <img src="/images/twitter-icon.svg" alt="twitter" />
        </a>
      </div>
      <p>
        Made with
        <span className="heart"> &hearts; </span>
        by
        <span className="eunomia">
          &nbsp;Eunomia&nbsp;
        </span>
        from
        <a target="_blank" rel="noopener noreferrer" href="https://wildcodeschool.fr">
          <span className="wcs"> Wild Code School</span>
        </a>
      </p>
    </div>
  );
}

export default Footer;
