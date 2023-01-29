import React from 'react';
import { useGameContext } from '../context/GameContext.js';
import Box from './Box/Box.js';
import './Board.css';

export default function Board() {
  const { board } = useGameContext();

  return (
    <div className="Board">
      {board.map((box) => (
        <Box key={box.space} {...{ box }} />
      ))}
    </div>
  );
}
