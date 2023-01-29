import { createContext, useState, useContext } from 'react';

const GameContext = createContext();
const GameProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState('O');
  const [active, setActive] = useState(true);
  const [gameMessage, setGameMessage] = useState(
    'Your turn X, the game begins when you click a square'
  );
  const [board, setBoard] = useState([
    { space: 0, content: '' },
    { space: 1, content: '' },
    { space: 2, content: '' },
    { space: 3, content: '' },
    { space: 4, content: '' },
    { space: 5, content: '' },
    { space: 6, content: '' },
    { space: 7, content: '' },
    { space: 8, content: '' },
  ]);

  const declareWinner = () => {
    if (board[0].content === board[1].content && board[1].content === board[2].content) {
      return board[2].content;
    }
    if (board[3].content === board[4].content && board[4].content === board[5].content) {
      return board[5].content;
    }
    if (board[6].content === board[7].content && board[7].content === board[8].content) {
      return board[8].content;
    }
    if (board[0].content === board[3].content && board[3].content === board[6].content) {
      return board[6].content;
    }
    if (board[1].content === board[4].content && board[4].content === board[7].content) {
      return board[7].content;
    }
    if (board[2].content === board[5].content && board[5].content === board[8].content) {
      return board[8].content;
    }
    if (board[0].content === board[4].content && board[4].content === board[8].content) {
      return board[8].content;
    }
    if (board[2].content === board[4].content && board[4].content === board[6].content) {
      return board[6].content;
    }
  };

  const checkStatus = () => {
    if (!active) return;
    const winner = declareWinner();
    if (winner) {
      setGameMessage(`${winner} wins!`);
      setActive(false);
    }
    if (board.includes(!'')) {
      setGameMessage('Tis but a tie!');
      setActive(false);
    }
  };
  checkStatus();

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
