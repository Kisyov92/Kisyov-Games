import { useSelector } from "react-redux";

function Turns() {
  const moves = useSelector((state) => state.moves);

  return <div>Moves: {moves}</div>;
}

export default Turns;
