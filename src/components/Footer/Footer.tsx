import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

import "./Footer.scss";

export const Footer = () => {
  let mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      if (mybutton) {
        mybutton.style.display = "block";
      }
    } else {
      if (mybutton) {
        mybutton.style.display = "none";
      }
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="footer">
      <Link to="/">
        <img src={logo} className="footer__logo" alt="logo" />
      </Link>

      <ul className="footer__link-pages">
        <li className="footer__link-pages__item">
          <Link to="/" className="footer__link">
            Github
          </Link>
        </li>
        <li className="footer__link-pages__item">
          <Link to="/" className="footer__link">
            Contacts
          </Link>
        </li>
        <li className="footer__link-pages__item">
          <Link to="/" className="footer__link">
            Rights
          </Link>
        </li>
      </ul>

      <button
        className="footer__backToTop"
        onClick={() => topFunction()}
        id="myBtn"
        title="Go to top"
      >
        <h2 className="footer__backToTop-title">Back to top</h2>
        <div className="footer__backToTop-container" />
      </button>
    </div>
  );
}
