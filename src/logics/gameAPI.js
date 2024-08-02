import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  addDoc,
  updateDoc,
  getCountFromServer,
  serverTimestamp,
  collection,
  doc,
  query,
  where,
  and,
  or,
} from "firebase/firestore";
import { firebaseApp } from "../utils/firebase";

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const gameColl = collection(db, "games");
const gameDoc = (gameID) => doc(gameColl, gameID);
const roundColl = (gameID) => collection(gameDoc(gameID), "rounds");
const roundDoc = (gameID, roundID) => doc(roundColl(gameID), roundID);

export const subscribeAuth = () => {};
export const getUser = () => {};
export const signup = async ({ name, email, password }) => {
  // check vscode terminal
  const result = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(result.user, { displayName: name });
  console.log(auth.currentUser);
};
export const login = async ({ email, password }) => {
  // check vscode terminal
  const result = await signInWithEmailAndPassword(auth, email, password);
  console.log(result);
};
export const logout = async () => {
  // check vscode terminal
  await signOut(auth);
  console.log(auth.currentUser);
};
export const addGame = async (userID) => {
  // check firebase console
  await addDoc(gameColl, {
    userID: userID,
    createdAt: serverTimestamp(),
  });
};
export const updateGameStatus = async (gameID, status) => {
  // check firebase console
  await updateDoc(gameDoc(gameID), {
    status: status,
  });
};
export const queryWinningGames = async () => {
  // check vscode terminal
  const queryDocs = query(gameColl, where("status", "==", "win"));
  const result = await getCountFromServer(queryDocs);
  console.log(result.data().count);
};
export const addRound = async ({ gameID, round }) => {
  // check firebase console
  await addDoc(roundColl(gameID), {
    createdAt: serverTimestamp(),
    round: round,
  });
};
export const updateRoundAnswer = async ({
  gameID,
  roundID,
  player,
  computer,
}) => {
  // check firebase console
  await updateDoc(roundDoc(gameID, roundID), {
    player: player,
    computer: computer,
  });
};
export const queryRoundScores = async (gameID) => {
  // probably better to move this into cloud functions (onUpdateRoundAnswer)
  // check vscode terminal
  const queryScore = (player, computer) => {
    return and(
      where("player", "==", player),
      where("computer", "==", computer)
    );
  };
  const queryPlayer = query(
    roundColl(gameID),
    or(
      queryScore("rock", "scissors"),
      queryScore("paper", "rock"),
      queryScore("scissors", "paper")
    )
  );
  const queryComputer = query(
    roundColl(gameID),
    or(
      queryScore("scissors", "rock"),
      queryScore("rock", "paper"),
      queryScore("paper", "scissors")
    )
  );
  const playerResult = await getCountFromServer(queryPlayer);
  const computerResult = await getCountFromServer(queryComputer);
  console.log("player: ", playerResult.data().count);
  console.log("computer: ", computerResult.data().count);
};
