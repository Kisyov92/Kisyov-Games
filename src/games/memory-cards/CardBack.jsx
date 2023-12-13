/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import classes from "./CardBack.module.css";
import { gameAction } from "./store/game";

function CardBack({ cardId, seqId }) {
  const numberCards = useSelector((state) => state.numberCards);
  const dispatch = useDispatch();

  function handleTurnCard() {
    dispatch(gameAction.turnCard({ cardId, seqId }));
  }

  return (
    <div className={classes.card} onClick={handleTurnCard}>
      {numberCards && seqId}
    </div>
  );
}

export default CardBack;
