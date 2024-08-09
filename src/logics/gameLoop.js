import { addGame, updateGameAnswer } from "./gameAPI";

export const choices = ["rock", "paper", "scissors"];
const winConditions = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

export const startGame = async (userID) => {
  const game = await addGame(userID);
  return game.id;
  // navigation.navigate("Game", { userID: userID, gameID: game.id });
};

export const checkTruth = async ({ gameID, playerAnswer }) => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerAnswer = choices[randomIndex];

  let status;

  if (playerAnswer === computerAnswer) {
    status = "draw";
  } else if (winConditions[playerAnswer] === computerAnswer) {
    status = "win";
  } else {
    status = "lose";
  }

  await updateGameAnswer({
    gameID,
    playerAnswer: playerAnswer,
    computerAnswer: computerAnswer,
  });

  return { status, playerAnswer, computerAnswer };
};
