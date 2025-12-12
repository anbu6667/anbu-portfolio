import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="site-navbar">
      <div className="site-container">
        <Link to="/" className="site-title">MyPortfolio</Link>

        <ul className="nav-list">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Skills", "/skills"],
            ["Projects", "/projects"],
            ["Certifications", "/certifications"],
            ["Resume", "/resume"],
            ["Contact", "/contact"],
          ].map(([text, path]) => (
            <li key={text}>
              <Link to={path} className="nav-link">
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
