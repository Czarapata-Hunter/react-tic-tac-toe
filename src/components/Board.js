import React from 'react';
import { useGameContext } from '../context/GameContext.js';
import Box from './Box.js';

export default function Board({ onClick }) {
  const { board } = useGameContext();

  return (
    <div className="Board">
      <div>
        <Box
          value={board[0]}
          onClick={() => {
            onClick(0);
          }}
        />
        <Box value={board[1]} />
        <Box value={board[2]} />
      </div>
      <div>
        <Box value={board[3]} />
        <Box value={board[4]} />
        <Box value={board[5]} />
      </div>
      <div>
        <Box value={board[6]} />
        <Box value={board[7]} />
        <Box value={board[8]} />
      </div>
    </div>
  );
}
