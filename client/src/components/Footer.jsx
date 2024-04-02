import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <h4>Follow us</h4>
      <div className="social-links">
        <a href="https://github.com/ARPIT2128" className="social-link">
          <img
            src="./github-mark-white.png"
            alt="GitHub"
            className="social-image"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
