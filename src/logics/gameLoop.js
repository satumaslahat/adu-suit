import { addGame } from "./gameAPI";
import { initialGame } from "./gameRedux";

export const startGame = (state, action) => {
  addGame(state.userID);
  newRound();
};
export const newRound = (state, action) => {};
export const sendAnswer = (state, action) => {};
export const checkTruth = (state, action) => {};
export const isGameFinished = (state, action) => {};
export const finishGame = (state, action) => {
  return initialGame;
};
