import { useSelector } from "react-redux";
import CardBack from "./CardBack";

/* eslint-disable react/prop-types */
function MemoryCard({ imgSrc, seqId }) {
  const cardIsTurned = useSelector((store) => store.foundMatchesArr[seqId]);

  return (
    <>
      {cardIsTurned ? (
        <img src={imgSrc} alt="memory card" />
      ) : (
        <CardBack cardId={imgSrc} seqId={seqId} />
      )}
    </>
  );
}

export default MemoryCard;
