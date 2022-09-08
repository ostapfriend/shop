import { Link } from "react-router-dom";

import "./Navbar.scss";
import logo from "../../images/logo.svg";
import classnames from "classnames";

type Props = {
  favouritesDevicesLength: number;
  storeLength: number;
};

export const Navbar: React.FC<Props> = ({ favouritesDevicesLength, storeLength }) => {
  const favouritesClass = classnames({
    "nav__icon-link": true,
    "nav__icon-link-favourites": favouritesDevicesLength > 0,
  });

  const storeClass = classnames({
    "nav__icon-link": true,
    "nav__icon-link-store": true,
    "nav__icon-link-store-fill": storeLength > 0,
  });

  return (
    <header>
      <nav className="nav">
        <div className="nav__container-link">
          <Link to="/" className="nav__logo">
            <img src={logo} alt="logo" className="nav__logo-img" />
          </Link>
          <ul className="nav__menu">
            <li className="nav__item">
              <Link to="/shop" className="nav__link">
                HOME
              </Link>
            </li>

            <li className="nav__item">
              <Link to="/phones" className="nav__link">
                PHONES
              </Link>
            </li>

            <li className="nav__item">
              <Link to="/tablets" className="nav__link">
                TABLETS
              </Link>
            </li>

            <li className="nav__item">
              <Link to="/accessories" className="nav__link">
                ACCESSORIES
              </Link>
            </li>
          </ul>
        </div>

        <div className="nav__container-icon">
          <ul className="nav__icon-list">
            <li className="nav__icon-item">
              <Link to="/favourites" className={favouritesClass} />
            </li>

            <li className="nav__icon-item">
              <Link to="/store" className={storeClass} />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
