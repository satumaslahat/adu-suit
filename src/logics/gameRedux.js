export const gameStore = configureStore({
  reducer: {
    game: gameSlice.reducer,
  },
});

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    status: "",
    rounds: [],
  },
  reducers: {
    startGame: (state, action) => {},
    newRound: (state, action) => {},
    sendAnswer: (state, action) => {},
    checkTruth: (state, action) => {},
    isGameFinished: (state, action) => {},
    finishGame: (state, action) => {},
  },
});

export const {
  startGame,
  newRound,
  sendAnswer,
  checkTruth,
  isGameFinished,
  finishGame,
} = gameSlice.actions;
