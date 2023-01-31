import React from 'react';
import './Box.css';
import { useGameContext } from '../../context/GameContext.js';

export default function Box({ box }) {
  const { board, setBoard, active, currentPlayer, setCurrentPlayer, setGameMessage } =
    useGameContext();

  const boxClickHandler = () => {
    if (box.content !== '') return;
    if (!active) return;

    box.content = currentPlayer;
    const newBoard = [...board];
    setBoard(newBoard);

    if (currentPlayer === 'X') {
      setCurrentPlayer('O');
      setGameMessage('Your move O');
    } else {
      setCurrentPlayer('X');
      setGameMessage('Your move X');
    }
  };

  return (
    <div className="box" onClick={boxClickHandler}>
      {box.content}
    </div>
  );
}
