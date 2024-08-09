import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { startGame, checkTruth } from "./gameLoop";

export const startGameAction = createAsyncThunk(
  "game/startGame",
  async (userID) => {
    const id = await startGame(userID);
    return { id, userID };
  }
);

export const checkTruthAction = createAsyncThunk(
  "game/checkTruth",
  async ({ gameID, playerAnswer }) => {
    const data = await checkTruth({ gameID, playerAnswer });
    return data;
  }
);

const initialGame = {
  id: "",
  userID: "",
  playerAnswer: "",
  computerAnswer: "",
  status: "",
};

export const gameSlice = createSlice({
  name: "game",
  initialState: initialGame,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(startGameAction.fulfilled, (state, action) => {
        state.id = action.payload.id;
        state.userID = action.payload.userID;
        state.playerAnswer = "";
        state.computerAnswer = "";
        state.status = "";
      })
      .addCase(checkTruthAction.fulfilled, (state, action) => {
        state.playerAnswer = action.payload.playerAnswer;
        state.computerAnswer = action.payload.computerAnswer;
        state.status = action.payload.status;
      });
  },
});

export const gameStore = configureStore({
  reducer: { game: gameSlice.reducer },
});
