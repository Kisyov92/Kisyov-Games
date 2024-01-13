import { useState } from "react";
import headerLogo from "../../public/header-logo.png";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header() {
  const initialClasses = `${classes.header} ${classes.navOpen}`;
  const [headerClasses, setHeaderClasses] = useState(
    initialClasses.split(" ")[0]
  );

  function toggleMenu() {
    if (initialClasses !== headerClasses) {
      setHeaderClasses(initialClasses);
    } else {
      setHeaderClasses(initialClasses.split(" ")[0]);
    }
  }
  function closeMenu() {
    setHeaderClasses(initialClasses.split(" ")[0]);
  }

  return (
    <header className={headerClasses}>
      <img src={headerLogo} alt="" />
      <nav>
        <ul>
          <li onClick={closeMenu}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink>About</NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink to="https://atanas-kisyov.netlify.app/" target="_blank">
              Portfolio
            </NavLink>
          </li>
        </ul>
      </nav>
      <button className={classes.btnMobileNav} onClick={toggleMenu}>
        <ion-icon name="menu-outline" className={classes.mobileIcon}></ion-icon>
        <ion-icon
          name="close-outline"
          className={classes.mobileIcon}
        ></ion-icon>
      </button>
    </header>
  );
}

export default Header;
