import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navBar">
      <section>
        <nav className="navBar_container">
          <div className="navBar_container-left"></div>
          <div className="navBar_container-right"></div>
        </nav>
      </section>
    </div>
  );
}

export default NavBar;
