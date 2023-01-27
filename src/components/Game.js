import React from 'react';
import { useGameContext } from '../context/GameContext.js';
import Board from './Board.js';

export default function Game() {
  const { board } = useGameContext();
  return (
    <div>
      <div>
        <Board boxes={board} />
      </div>
      <div>
        <div>Next Player is O</div>
        <button>Start Game</button>
      </div>
    </div>
  );
}
