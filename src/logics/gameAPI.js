import {
  initializeAuth,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  getReactNativePersistence,
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

import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

const db = getFirestore(firebaseApp);
const gameColl = collection(db, "games");
const userColl = collection(db, "users");
const gameDoc = (gameID) => doc(gameColl, gameID);
const userDoc = (userID) => doc(userColl, userID);

export const subscribeAuth = async (setUser, setLoading) => {
  return onAuthStateChanged(auth, (user) => {
    setUser(user);
    setLoading(false);
  });
};

export const signup = async ({ name, email, password }) => {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(result.user, { displayName: name });

  // Add stats field for the new user
  const userRef = userDoc(result.user.uid);
  await setDoc(userRef, {
    stats: {
      wins: 0,
      losses: 0,
      draws: 0
    }
  }, { merge: true });

  console.log(auth.currentUser);
};

export const login = async ({ email, password }) => {
  const result = await signInWithEmailAndPassword(auth, email, password);
  console.log(result);
};

export const logout = async () => {
  await signOut(auth);
  console.log(auth.currentUser);
};

export const addGame = async (userID) => {
  return await addDoc(gameColl, {
    userID: userID,
    createdAt: serverTimestamp(),
    playerAnswer: "",
    computerAnswer: "",
  });
};

export const updateGameAnswer = async ({ gameID, playerAnswer, computerAnswer }) => {
  await updateDoc(gameDoc(gameID), {
    playerAnswer: playerAnswer,
    computerAnswer: computerAnswer,
  });
};

export const updateUserStats = async (userID, result) => {
  const userRef = userDoc(userID);
  const updates = {};
  
  switch (result) {
    case 'win':
      updates['stats.wins'] = increment(1); // Use increment from Firestore
      break;
    case 'lose':
      updates['stats.losses'] = increment(1);
      break;
    case 'draw':
      updates['stats.draws'] = increment(1);
      break;
    default:
      throw new Error('Invalid result type');
  }
  
  await updateDoc(userRef, updates);
};

export const getGameHistory = async () => {
  const queryScore = (player, computer) => {
    return and(
      where("playerAnswer", "==", player),
      where("computerAnswer", "==", computer)
    );
  };
  const queryPlayer = query(
    gameColl,
    or(
      queryScore("rock", "scissors"),
      queryScore("paper", "rock"),
      queryScore("scissors", "paper")
    )
  );
  const queryComputer = query(
    gameColl,
    or(
      queryScore("scissors", "rock"),
      queryScore("rock", "paper"),
      queryScore("paper", "scissors")
    )
  );
  const win = await getCountFromServer(queryPlayer);
  const lose = await getCountFromServer(queryComputer);
  console.log("win: ", win.data().count);
  console.log("lose: ", lose.data().count);
};
