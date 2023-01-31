import React from 'react';
import { useGameContext } from '../context/GameContext.js';
import Board from './Board.js';
import './Game.css';

export default function Game() {
  const { board, setBoard, active, setActive, setCurrentPlayer, gameMessage, setGameMessage } =
    useGameContext();

  const restartClickHandler = () => {
    setCurrentPlayer('X');
    setBoard([
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
    setGameMessage('Your Move X, Choose Your Square');
    setActive(true);
  };

  return (
    <div className="game">
      {active && (
        <>
          <div className="game-board">
            <Board board={board}></Board>
          </div>
          <div className="info">
            <div>{gameMessage}</div>
          </div>
        </>
      )}
      {!active && (
        <>
          <div className="game-board">
            <Board board={board}></Board>
          </div>
          <div className="info">
            <div>{gameMessage}</div>
            <button onClick={restartClickHandler}>GO AGAIN!</button>
          </div>
        </>
      )}
    </div>
  );
}
