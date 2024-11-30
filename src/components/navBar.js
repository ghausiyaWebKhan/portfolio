import React, { useEffect, useState } from "react";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const links = [
    { text: "Home", href: "#home" },
    { text: "About", href: "#about" },
    { text: "Resume", href: "#resume" },
    { text: "Skills", href: "#skills" },
    { text: "Portfolio", href: "#portfolio" },
    { text: "Contact", href: "#contact" },
  ];

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const selectNav = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target ${
        scrolled ? "scrolled awake" : ""
      }`}
      id="ftco-navbar"
    >
      <div className="container">
        <a className="navbar-brand">Ghausiya Khan</a>
        <span
          className="navbar-toggler"
          type="button"
          onClick={() => toggleNav()}
        >
          <span className="icon-bars"></span> Menu
        </span>

        <div
          className={`collapse navbar-collapse ${showNav && "show"}`}
          id="ftco-nav"
        >
          <ul className="navbar-nav nav ml-auto">
            {links.map((item, index) => {
              return (
                <li className={`nav-item`} key={index}>
                  <a
                    href={item.href}
                    key={index}
                    className={`nav-link ${
                      activeIndex === index ? "active" : ""
                    }`}
                    onClick={() => selectNav(index)}
                  >
                    <span>{item.text}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
