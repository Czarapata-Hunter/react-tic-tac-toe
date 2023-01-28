import React from 'react';
import { useGameContext } from '../context/GameContext.js';
import Box from './Box/Box.js';

export default function Board() {
  const { board, setBoard } = useGameContext();

  function handleClick(i) {
    const nextBoard = board.slice();
    nextBoard[i] = 'X';
    setBoard(nextBoard);
  }

  return (
    <div className="Board">
      <div>
        <Box value={board[0]} onBoxClick={() => handleClick(0)} />
        <Box value={board[1]} onBoxClick={() => handleClick(1)} />
        <Box value={board[2]} onBoxClick={() => handleClick(2)} />
      </div>
      <div>
        <Box value={board[3]} onBoxClick={() => handleClick(3)} />
        <Box value={board[4]} onBoxClick={() => handleClick(4)} />
        <Box value={board[5]} onBoxClick={() => handleClick(5)} />
      </div>
      <div>
        <Box value={board[6]} onBoxClick={() => handleClick(6)} />
        <Box value={board[7]} onBoxClick={() => handleClick(7)} />
        <Box value={board[8]} onBoxClick={() => handleClick(8)} />
      </div>
    </div>
  );
}
