import { useSelector } from "react-redux";

function Turns() {
  const mistakes = useSelector((state) => state.mistakes);

  return <div>Mistakes: {mistakes}</div>;
}

export default Turns;
