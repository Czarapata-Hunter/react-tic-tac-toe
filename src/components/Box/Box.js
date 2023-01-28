import React from 'react';
import './Box.css';
// import { useState } from 'react';

export default function Box({ value, onBoxClick }) {
  // const [value, setValue] = useState(null);

  // function handleClick() {
  //   setValue('X');
  // }
  return (
    <button className="box" onClick={onBoxClick}>
      {value}
    </button>
  );
}
