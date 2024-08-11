# adu-suit
Ini adalah repositori untuk final project.

### Installation
1. Buat folder bernama `rakamin-projects` di mana aja.
2. Buka folder tersebut di vscode.
3. Tekan `CMD + SHIFT + P (MacOS)` / `CTRL + SHIFT + P (Windows)`.
4. Cari pilihan `Git Clone`.
5. Paste `https://github.com/satumaslahat/adu-suit.git`.
6. Enter, install di folder terkait, tunggu hingga selesai.
7. Buka proyek tersebut, pastikan root di vscode: `adu-suit`.

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
  - logics:            
    - gameAPI.js
    - gameLoop.js
    - gameSlice.js
  - views:
    - components:
      - (...)
    - layouts:    
        - AuthLoginLayout.js
        - AuthRegisterLayout.js
        - GameAnswerLayout.js
        - GameResultLayout.js
    - pages:
      - AuthPage.js
      - GamePage.js   
      - HomePage.js      
  - utils:
    - (...)

### Data Design
games `(id, userID, createdAt, playerAnswer, computerAnswer)`.

### Game Loops
1. startGame
2. checkTruth

### Firebase API
- Auth: signup, login, subscribeAuth, logout
- Game: addGame, updateGameAnswer, getGameHistory
