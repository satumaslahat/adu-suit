# proyek-gubrak
Ini adalah repositori untuk final project.

### Installation
1. Buat folder bernama `rakamin-projects` di mana aja.
2. Buka folder tersebut di vscode.
3. Tekan `CMD + SHIFT + P (MacOS)` / `CTRL + SHIFT + P (Windows)`.
4. Cari pilihan `Git Clone`.
5. Paste `https://github.com/satumaslahat/proyek-gubrak.git`.
6. Enter, install di folder terkait, tunggu hingga selesai.
7. Buka proyek tersebut, pastikan root di vscode: `proyek-gubrak`.

### Initialization
1. Buat branch baru dengan `git checkout -b (namasatukata)` di terminal.
2. Push branch baru dengan `git push -u origin (namasatukata)` di terminal.
3. Unduh semua module dengan `npm install` di terminal.

### Running the App
1. Jalankan app dengan `npm start` di terminal.
2. Scan QR Code yang ada di terminal untuk masuk ke aplikasi.
3. Jika ingin mematikan terminal, arahkan cursor ke terminal, lalu tekan `CONTROL + C (MacOS)` / `CTRL + C (Windows)`.

### Developing Views
1. Buat file di folder components / screens.
2. Buka App.js.
3. Component: ganti isi HomeScreen.
4. Screen: ganti Stack.Screen terkait jd paling atas.

### Developing Logics
1. Buat function di gameLoops.js / gameAPIs.js.
2. Comment step by step nya.
3. Tulis isiannya.

### Contributing to Project
1. Klik `Version Control` pada sidebar.
2. Add changes yg mau dicommit.
3. Tulis commit message.
4. Commit dan sync changes.
5. Buka Github, lalu tekan compare pull request.
6. Tekan create pull request.

### Project Structure
- src:
  - assets:
    - (...)
  - constants:
    - messages.js
  - views:
    - components:
      - (...)
    - layouts:
      - RoundStartedLayout.js
      - PlayerAnswerLayout.js
      - GameFinishedLayout.js
    - pages:
      - AuthPage.js
      - HomePage.js
      - GamePage.js
   - logics:
      - store:
        - gameStates.js 
        - gameActions.js
        - gameReducers.js
      - services:
        - gameAPIs.js
        - gameLoops.js

### Data Design
games `(id, createdAt, status)` > rounds `(id, order, player, computer)`.

### Game Loops
1. startGame 
2. newRound
3. sendAnswer
4. checkTruth: `draw` -> newRound | `win/lose` -> isGameFinished
5. isGameFinished: `yes` -> finishGame | `no` -> newRound

### Firebase API
- Auth: login, getUser, subscribeAuth logout
- Game: addGame, updateGameStatus, queryWinningGames
- Round: addRound, updateRoundAnswer, queryRoundScores