import { useDispatch, useSelector } from "react-redux";
import Modal from "../../UI/Modal";
import { gameAction } from "./store/game";

function WinModal() {
  const level = useSelector((state) => state.level);
  const dispatch = useDispatch();

  function handleLevelUp() {
    switch (level) {
      case 1:
        dispatch(gameAction.changeLevel({ cols: 4, cards: 8, lvl: 2 }));
        break;
      case 2:
        dispatch(gameAction.changeLevel({ cols: 5, cards: 10, lvl: 3 }));
        break;
      case 3:
        dispatch(gameAction.changeLevel({ cols: 6, cards: 15, lvl: 4 }));
        break;
      case 4:
        dispatch(gameAction.changeLevel({ cols: 6, cards: 18, lvl: 5 }));
        break;
      default:
        break;
    }
  }
  function handleRepeatLevel() {
    switch (level) {
      case 1:
        dispatch(gameAction.changeLevel({ cols: 4, cards: 6, lvl: 1 }));
        break;
      case 2:
        dispatch(gameAction.changeLevel({ cols: 4, cards: 8, lvl: 2 }));
        break;
      case 3:
        dispatch(gameAction.changeLevel({ cols: 5, cards: 10, lvl: 3 }));
        break;
      case 4:
        dispatch(gameAction.changeLevel({ cols: 6, cards: 15, lvl: 4 }));
        break;
      case 5:
        dispatch(gameAction.changeLevel({ cols: 6, cards: 18, lvl: 5 }));
        break;
      default:
        break;
    }
  }

  return (
    <Modal>
      <h2>Great job!</h2>
      <p>You turned all cards</p>
      <div>
        <button style={{ marginRight: "3rem" }} onClick={handleRepeatLevel}>
          Repeat difficulty
        </button>
        {level !== 5 && <button onClick={handleLevelUp}>Level up</button>}
      </div>
    </Modal>
  );
}

export default WinModal;
