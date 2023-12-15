import { Link } from "react-router-dom";
import dartsImg from "../../public/darts.jpg";
import simonImg from "../../public/simon.jpg";
import monkeyNumbersImg from "../../public/monkey-numbers.jpg";
import quizImg from "../../public/Quiz_logo.jpg";
import blankStories from "../../public/blank_stories.jpg";
import hangman from "../../public/hangman.jpg";
import memoryImg from "../../public/memory.png";
import sudoku from "../../public/sudoku.jpg";

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
          <img src={quizImg} alt="quiz game" />
        </Link>
      </li>
      <li>
        <Link to="blank-stories">
          <img src={blankStories} alt="blank stories" />
        </Link>
      </li>
      <li>
        <Link to="hangman">
          <img src={hangman} alt="hangman" />
        </Link>
      </li>
      <li>
        <Link to="memory">
          <img src={memoryImg} alt="memory" />
        </Link>
      </li>
      <li>
        <Link to="sudoku">
          <img src={sudoku} alt="sudoku" />
        </Link>
      </li>
    </ul>
  );
}

export default HomePaga;
