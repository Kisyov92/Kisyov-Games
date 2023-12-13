import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    level: 1,
    cols: 4,
    cards: 6,
    foundMatchesArr: Array(12).fill(false),
    matchAttempt: { firstCard: null, secondCard: null },
    solved: false,
  },
  reducers: {
    changeLevel(state, action) {
      state.level = action.payload.lvl;
      state.cols = action.payload.cols;
      state.cards = action.payload.cards;
      state.foundMatchesArr = Array(state.cards * 2).fill(false);
      state.matchAttempt = { firstCard: null, secondCard: null };
      state.solved = false;
    },
    turnCard(state, action) {
      if (state.matchAttempt.firstCard && state.matchAttempt.secondCard) return;

      if (!state.matchAttempt.firstCard) {
        state.matchAttempt.firstCard = {
          cardId: action.payload.cardId,
          seqId: action.payload.seqId,
        };
        state.foundMatchesArr[action.payload.seqId] = true;
      } else if (!state.matchAttempt.secondCard) {
        state.matchAttempt.secondCard = {
          cardId: action.payload.cardId,
          seqId: action.payload.seqId,
        };
        state.foundMatchesArr[action.payload.seqId] = true;
      }
    },
    endTurn(state, action) {
      if (
        state.matchAttempt.firstCard.cardId !==
        state.matchAttempt.secondCard.cardId
      ) {
        state.foundMatchesArr[action.payload.firstCardId] = false;
        state.foundMatchesArr[action.payload.secondCardId] = false;
      }
      state.matchAttempt = { firstCard: null, secondCard: null };

      if (state.foundMatchesArr.every((el) => el === true)) {
        state.solved = true;
      }
    },
    restartGame(state) {
      state.level = 1;
      state.cols = 4;
      state.cards = 6;
      state.foundMatchesArr = Array(12).fill(false);
      state.matchAttempt = { firstCard: null, secondCard: null };
      state.solved = false;
    },
  },
});

export const gameAction = gameSlice.actions;

export default gameSlice.reducer;
