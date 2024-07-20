import React, { useState } from 'react'
import Square from './Square'
import Knight from './Knight'
import { renderSquare } from './renderSquare'

export default function Board() {
  const handleClick = (pos) => {
    setKnightPos(pos);
  }
  const [knightPos, setKnightPos] = useState([0, 0]);
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPos, handleClick));
  }
  return (
    <div style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexWrap: 'wrap'
    }}>
      {squares}
    </div>
  )
}
