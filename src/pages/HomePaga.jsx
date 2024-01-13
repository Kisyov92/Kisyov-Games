import dartsImg from "../../public/darts.png";
import simonImg from "../../public/simon.png";
import monkeyNumbersImg from "../../public/monkey-numbers.png";
import quizImg from "../../public/Quiz_logo.png";
import blankStories from "../../public/blank_stories.png";
import hangman from "../../public/hangman.png";
import memoryImg from "../../public/memory.png";
import sudoku from "../../public/sudoku.png";

import classes from "./HomePage.module.css";
import GameIcon from "../UI/GameIcon";

function HomePaga() {
  return (
    <ul className={classes.gamesList}>
      <GameIcon
        route="darts"
        gameName="darts"
        imgSrc={dartsImg}
        altText="dartst game"
      />
      <GameIcon
        route="simon"
        gameName="simon"
        imgSrc={simonImg}
        altText="simon game"
      />
      <GameIcon
        route="monkey-numbers"
        gameName="monkey numbers"
        imgSrc={monkeyNumbersImg}
        altText="monkey numbers game"
      />
      <GameIcon
        route="quiz"
        gameName="quiz"
        imgSrc={quizImg}
        altText="quiz game"
      />
      <GameIcon
        route="blank-stories"
        gameName="fill in the blanks"
        imgSrc={blankStories}
        altText="blank stories game"
      />
      <GameIcon
        route="hangman"
        gameName="hangman"
        imgSrc={hangman}
        altText="hangman game"
      />
      <GameIcon
        route="memory"
        gameName="memory"
        imgSrc={memoryImg}
        altText="memory game"
      />
      <GameIcon
        route="sudoku"
        gameName="sudoku"
        imgSrc={sudoku}
        altText="sudoku game"
      />
    </ul>
  );
}

export default HomePaga;
