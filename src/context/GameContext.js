import { createContext, useState, useContext } from 'react';

const GameContext = createContext();
const GameProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState('O');
  const [active, setActive] = useState(true);
  const [board, setBoard] = useState(['X', 'O', '', '', 'X', 'O', '', '', '']);
  const [gameMessage, setGameMessage] = useState('');

  return (
    <GameContext.Provider
      value={{
        currentPlayer,
        setCurrentPlayer,
        active,
        setActive,
        board,
        setBoard,
        gameMessage,
        setGameMessage,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error('useGameContext must be used within a GameProvider');
  }

  return context;
};

export { GameProvider, useGameContext };
