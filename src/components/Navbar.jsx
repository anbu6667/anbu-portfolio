import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const links = [
    ["Home", "/"],
    ["About", "/about"],
    ["Skills", "/skills"],
    ["Projects", "/projects"],
    ["Certifications", "/certifications"],
    ["Resume", "/resume"],
  ];

  return (
    <nav className="site-navbar" aria-label="Primary navigation">
      <div className="site-container">
        <Link to="/" className="site-title">
          <span className="site-mark">ASN</span>
          <span className="site-title-copy">
            <strong>ANBUSELVAM N</strong>
            <small>Creative developer</small>
          </span>
        </Link>

        <div className="nav-panel">
          <ul className="nav-list" id="primary-navigation">
            {links.map(([text, path]) => (
              <li key={text}>
                <NavLink
                  to={path}
                  end={path === "/"}
                  className={({ isActive }) => `nav-link${isActive ? " is-active" : ""}`}
                >
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="nav-cta">
            <span className="nav-cta-dot" aria-hidden="true" />
            <span className="nav-cta-label">Let's talk</span>
            <span className="nav-cta-arrow" aria-hidden="true">-&gt;</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
