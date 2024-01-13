/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import classes from "./GameIcon.module.css";

function GameIcon({ route, gameName, imgSrc, altText }) {
  return (
    <li>
      <Link to={route} className={classes.link}>
        <p className={classes.gameName}>{gameName}</p>
        <img src={imgSrc} alt={altText} className={classes.icon} />
      </Link>
    </li>
  );
}

export default GameIcon;
