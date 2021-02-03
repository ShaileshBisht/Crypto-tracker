import React from "react";
import "./NavBar.css";
import coinImg from "../assets/images/coinnav1.webp";

function NavBar() {
  return (
    <div className="navBar">
      <section>
        <nav className="navBar_container">
          <div className="navBar_container-left">
            <img src={coinImg} alt="" />
            <h1>
              crypto<strong>Tracker</strong>
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
