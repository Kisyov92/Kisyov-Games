/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import classes from "./CardBack.module.css";
import { gameAction } from "./store/game";

function CardBack({ cardId, seqId }) {
  const dispatch = useDispatch();

  // const cards = useSelector((state) => state.matchAttempt);

  function handleTurnCard() {
    dispatch(gameAction.turnCard({ cardId, seqId }));
  }

  return <div className={classes.card} onClick={handleTurnCard}></div>;
}

export default CardBack;
