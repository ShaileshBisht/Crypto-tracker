import React from "react";
import "./NavBar.css";
import coinImg from "../assets/images/navIcon2.png";

function NavBar() {
  return (
    <div className="navBar">
      <section>
        <nav className="navBar_container">
          <div className="navBar_container-left">
            <img src={coinImg} alt="" />
            <h1>
              crypto<span>Tracker</span>
            </h1>
          </div>
          <div className="navBar_container-right">
            <input type="text" placeholder="Search.." />
          </div>
        </nav>
      </section>
    </div>
  );
}

export default NavBar;
