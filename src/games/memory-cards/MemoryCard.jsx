import CardBack from "./CardBack";

/* eslint-disable react/prop-types */
function MemoryCard({ imgSrc, turned }) {
  return <>{turned ? <img src={imgSrc} alt="memory card" /> : <CardBack />}</>;
}

export default MemoryCard;
