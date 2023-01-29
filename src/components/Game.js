import React from 'react';
import { useGameContext } from '../context/GameContext.js';
import Board from './Board.js';

export default function Game() {
  const { board } = useGameContext();
  return (
    <div>
      <div>
        <button>Start Game</button>
      </div>
      <div>
        <Board boxes={board} />
      </div>
      <div>{status}</div>
    </div>
  );
}
