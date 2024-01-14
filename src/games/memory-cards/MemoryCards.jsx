import classes from "./MemoryCards.module.css";

import catOne from "../../../public/memory-cards/cat1.jpg";
import catTwo from "../../../public/memory-cards/cat2.jpg";
import dino from "../../../public/memory-cards/dino.jpg";
import star from "../../../public/memory-cards/star.jpg";
import monkey from "../../../public/memory-cards/monkey.jpg";
import owl from "../../../public/memory-cards/owl.jpg";
import panda from "../../../public/memory-cards/panda.jpg";
import koala from "../../../public/memory-cards/koala.jpg";
import elephant from "../../../public/memory-cards/elephant.jpg";
import cheetah from "../../../public/memory-cards/cheetah.jpg";
import ram from "../../../public/memory-cards/ram.jpg";
import rino from "../../../public/memory-cards/rino.jpg";
import cow from "../../../public/memory-cards/cow.jpg";
import dogOne from "../../../public/memory-cards/dog1.jpg";
import dogTwo from "../../../public/memory-cards/dog2.jpg";
import dogThree from "../../../public/memory-cards/dog3.jpg";
import giraffe from "../../../public/memory-cards/giraffe.jpg";
import dragon from "../../../public/memory-cards/dragon.jpg";
import MemoryCard from "./MemoryCard";
import { useDispatch, useSelector } from "react-redux";
import { shuffleArray, wait } from "../../util/util";
import { useEffect, useMemo, useState } from "react";
import { gameAction } from "./store/game";

const MEMORY_IMAGES = [
  catOne,
  catTwo,
  dino,
  star,
  monkey,
  owl,
  panda,
  koala,
  elephant,
  cheetah,
  ram,
  rino,
  cow,
  dogOne,
  dogTwo,
  dogThree,
  giraffe,
  dragon,
];

function MemoryCards() {
  const [gameCards, setGameCards] = useState([]);

  const cols = useSelector((store) => store.cols);
  const cardsNum = useSelector((store) => store.cards);
  const matchAttempt = useSelector((store) => store.matchAttempt);
  const dispatch = useDispatch();

  const uniqueCards = useMemo(() => MEMORY_IMAGES.slice(-cardsNum), [cardsNum]);

  useEffect(() => {
    setGameCards(shuffleArray(uniqueCards.concat(uniqueCards)));
  }, [uniqueCards]);

  useEffect(() => {
    async function endTurn() {
      if (matchAttempt.firstCard && matchAttempt.secondCard) {
        if (matchAttempt.firstCard.cardId !== matchAttempt.secondCard.cardId)
          await wait(1);
        dispatch(
          gameAction.endTurn({
            firstCardId: matchAttempt.firstCard.seqId,
            secondCardId: matchAttempt.secondCard.seqId,
          })
        );
      }
    }
    endTurn();
  }, [matchAttempt]);

  return (
    <div
      className={classes.cards}
      style={{ gridTemplateColumns: `repeat(${cols},1fr)` }}
    >
      {gameCards.map((img, i) => (
        <MemoryCard key={`${img}${i}`} imgSrc={img} seqId={i} />
      ))}
    </div>
  );
}

export default MemoryCards;
