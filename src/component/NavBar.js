import React, { useEffect } from "react";
import "./NavBar.css";
import coinImg from "../assets/images/coinnav1.webp";
import { useHistory } from "react-router-dom";
import gsap from "gsap";

function NavBar() {
  const history = useHistory();

  useEffect(() => {
    gsap.from(".coinImg", {
      duration: 2,
      rotate: "360deg",
      repeat: -1,
      yoyo: true,
    });
    gsap.from(".aniTitle", {
      duration: 2,
      y: -100,
      ease: "bounce.out(1, 0.3)",
    });
  }, []);

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
            <img className="coinImg" src={coinImg} alt="" />
            <h1 className="aniTitle">
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
