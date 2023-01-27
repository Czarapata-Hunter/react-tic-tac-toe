import './App.css';
import Game from './components/Game.js';
import { GameProvider } from '../src/context/GameContext.js';

function App() {
  return (
    <div className="App">
      <GameProvider>
        <Game />
      </GameProvider>
    </div>
  );
}

export default App;
