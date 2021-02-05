import React, { useEffect } from "react";
import "./NavBar.css";
import coinImg from "../assets/images/coinnav1.webp";
import { useHistory } from "react-router-dom";

function NavBar() {
  const history = useHistory();

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 50) {
        document.getElementById("navBar").classList.add("navBar_active");
      } else {
        document.getElementById("navBar").classList.remove("navBar_active");
      }
    };
  });

  return (
    <div className="navBar" id="navBar">
      <section>
        <nav className="navBar_container">
          <div
            onClick={() => history.push("/")}
            className="navBar_container-left"
            id="navBar_container-left"
          >
            <img src={coinImg} alt="" />
            <h1>
              crypto<strong>Tracker</strong>
            </h1>
          </div>
          {/* <div className="navBar_container-right">
            <input type="text" placeholder="Search.." />
          </div> */}
        </nav>
      </section>
    </div>
  );
}

export default NavBar;
