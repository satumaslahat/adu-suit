import {
  getFirestore,
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  query,
  where,
  doc,
  getCountFromServer,
} from "firebase/firestore";
import { firebaseApp } from "../utils/firebase";

const db = getFirestore(firebaseApp);
const gameCollection = collection(db, "games");
const gameDocument = (docID) => doc(db, "games", docID);
const roundCollection = collection(db, "rounds");

export const login = () => {};
export const subscribeAuth = () => {};
export const getUser = () => {};
export const logout = () => {};
export const addGame = async (userID) => {
  // check firebase console
  await addDoc(gameCollection, {
    userID: userID,
    createdAt: serverTimestamp(),
  });
};
export const updateGameStatus = async (docID, status) => {
  // check firebase console
  await updateDoc(gameDocument(docID), {
    status: status,
  });
};
export const queryWinningGames = async () => {
  // check vscode terminal
  const queryDocs = query(gameCollection, where("status", "==", "win"));
  const result = await getCountFromServer(queryDocs);
  console.log(result.data().count);
};
export const addRound = () => {};
export const updateRoundAnswer = () => {};
export const queryRoundScores = () => {};
