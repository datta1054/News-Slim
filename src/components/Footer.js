import React, { useState } from "react";

const Footer = (props) => {
  const [backgroundColor, setBackgroundColor] = useState(
    props.mode === "light" ? "#eae9e9" : "#444444"
  );
  const [textColor, setTextColor] = useState(
    props.mode === "light" ? "black" : "#eae9e9"
  );

  return (
    <div>
      <div className="footer-container" style={{ backgroundColor }}>
        <p className="center" style={{ color: textColor }}>
          Developed by Gurudatta Kamalakar Gadde
        </p>
        <div className="footer">
          <a
            href="https://github.com/datta1054/News-Slim"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <a
            href="https://www.linkedin.com/in/gurudatta-kamalakar-gadde-538610232/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
