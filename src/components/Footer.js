import React from "react";
import "./styles/Footer.scss";

function Footer () {
  return (
    <div>
      <p className="footer">
        Made by {" "}
        <a href="" className="name">
          Matt Hagner
        </a>{" "}
        with <span className="react">React & Gatsby</span>
      </p>
    </div>
  );
}

export default Footer;

