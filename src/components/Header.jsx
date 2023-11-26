import headerLogo from "../../public/header-logo.png";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className={classes.header}>
      <img src={headerLogo} alt="" />
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink>About</NavLink>
          </li>
          <li>
            <NavLink>Portfolio</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
