import React from 'react';
import './Box.css';
import { useState } from 'react';

export default function Box() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
  }
  return (
    <button className="box" value="box" onClick={handleClick}>
      {value}
    </button>
  );
}
