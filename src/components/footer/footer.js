import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer custom-width-container">
      <div className="container">
        <div className="text-center">
          Created by{" "}
          <a
            href="https://www.linkedin.com/in/shakhboz-farkhodov-022523116/"
            target="_blank"
            className="name"
          >
            Shakhboz Farkhodov
          </a>{" "}
          ©2020&nbsp;|&nbsp;
          <a href="https://github.com/ShaxXxboz" target="_blank">
            {" "}
            <i className="fa fa-lg fa-github"></i>
          </a>
          &nbsp;
          <a href="mailto:shaxbozfarhodov@gmail.com" target="_blank">
            {" "}
            <i className="fa fa-lg fa-envelope"></i>
          </a>
        </div>
        <div className="text-center">
          <div className="copyright">
            I do not own any images or names. All rights belong to their
            respective owners.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
