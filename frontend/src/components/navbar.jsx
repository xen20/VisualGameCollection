import React from "react";

// instead of a stateless component, one may have this...
const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar <span className="badge badge-pill badge-secondary"></span>
      </a>
    </nav>
  );
};

export default NavBar;
