import {
  addGame,
  updateGameAnswer,
  updateUserStats
} from './gameAPI';

const generateRandomChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const checkTruth = async (gameID, playerChoice, computerChoice, userID) => {
  const winConditions = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  };

  let result;
  
  if (playerChoice === computerChoice) {
    result = 'draw';
  } else if (winConditions[playerChoice] === computerChoice) {
    result = 'win';
  } else {
    result = 'lose';
  }

  // update game doc
  await updateGameAnswer({ gameID, playerAnswer: playerChoice, computerAnswer: computerChoice });

  // update user stats
  await updateUserStats(userID, result);

  return result;
};

// Main function
export const startGame = async (playerChoice, userID) => {

  const gameRef = await addGame(userID);
  const gameID = gameRef.id;

  const computerChoice = generateRandomChoice();

  const result = await checkTruth(gameID, playerChoice, computerChoice, userID);

  return {
    gameID,
    computerChoice,
    result
  };
};
