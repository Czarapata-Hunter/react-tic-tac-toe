import React from 'react';
// import { useGameContext } from '../context/GameContext.js';
import Box from './Box/Box.js';

export default function Board() {
  //   const { board } = useGameContext();

  return (
    <div className="Board">
      <div>
        {/* <Box
          value={board[0]}
          onClick={() => {
            onClick(0);
          }}
        /> */}
        <Box />
        <Box />
        <Box />
      </div>
      <div>
        <Box />
        <Box />
        <Box />
      </div>
      <div>
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
}
