import { Link } from "react-router-dom";
import dartsImg from "../../public/darts.jpg";
import simonImg from "../../public/simon.jpg";
import monkeyNumbersImg from "../../public/monkey-numbers.jpg";
import QuizImg from "../../public/Quiz_logo.jpg";

import classes from "./HomePage.module.css";

function HomePaga() {
  return (
    <ul className={classes.gamesList}>
      <li>
        <Link to="darts">
          <img src={dartsImg} alt="darts target" />
        </Link>
      </li>
      <li>
        <Link to="simon">
          <img src={simonImg} alt="simon game" />
        </Link>
      </li>
      <li>
        <Link to="monkey-numbers">
          <img src={monkeyNumbersImg} alt="monkey numbers game" />
        </Link>
      </li>
      <li>
        <Link to="quiz">
          <img src={QuizImg} alt="quiz game" />
        </Link>
      </li>
    </ul>
  );
}

export default HomePaga;
