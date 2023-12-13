import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    level: 1,
    cols: 4,
    cards: 6,
    foundMatchesArr: Array(12).fill(null),
    mistakesArr: Array(12).fill(null),
    matchAttempt: { firstCard: null, secondCard: null },
    solved: false,
    numberCards: false,
    showMistakes: true,
    showMoves: true,
    moves: 0,
    mistakes: 0,
  },
  reducers: {
    changeLevel(state, action) {
      state.level = action.payload.lvl;
      state.cols = action.payload.cols;
      state.cards = action.payload.cards;
      state.foundMatchesArr = Array(state.cards * 2).fill(false);
      state.mistakesArr = Array(state.cards * 2).fill(null);
      state.matchAttempt = { firstCard: null, secondCard: null };
      state.solved = false;
      state.moves = 0;
      state.mistakes = 0;
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

        if (state.mistakesArr[action.payload.firstCardId] === null) {
          state.mistakesArr[action.payload.firstCardId] = 0;
        } else {
          state.mistakesArr[action.payload.firstCardId]++;
        }
        if (state.mistakesArr[action.payload.secondCardId] === null) {
          state.mistakesArr[action.payload.secondCardId] = 0;
        } else {
          state.mistakesArr[action.payload.secondCardId]++;
        }
        state.mistakes = state.mistakesArr.reduce((acc, cur) => acc + cur, 0);
      }
      state.matchAttempt = { firstCard: null, secondCard: null };
      state.moves++;

      if (state.foundMatchesArr.every((el) => el === true)) {
        state.solved = true;
      }
    },
    restartGame(state) {
      state.level = 1;
      state.cols = 4;
      state.cards = 6;
      state.foundMatchesArr = Array(12).fill(null);
      state.mistakesArr = Array(12).fill(null);
      state.matchAttempt = { firstCard: null, secondCard: null };
      state.solved = false;
      state.numberCards = false;
      state.moves = 0;
      state.mistakes = 0;
    },
    handleCardNumbers(state, action) {
      state.numberCards = action.payload;
    },
    handleShowMistakes(state, action) {
      state.showMistakes = action.payload;
    },
    handleShowMoves(state, action) {
      state.showMoves = action.payload;
    },
  },
});

export const gameAction = gameSlice.actions;

export default gameSlice.reducer;
