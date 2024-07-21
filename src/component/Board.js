import React, { memo, useEffect, useState } from "react";
import Square from "./Square";
import Knight from "./Knight";
import { renderSquare } from "./renderSquare";
import { canMoveKnight } from "./caMoveKnight";
import { DndProvider, useDrag } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Container } from "./dragExample/Container";

const Board = memo(() => {
  const handleClick = (pos) => {
    if (canMoveKnight(knightPos, pos)) {
      setKnightPos(pos);
    }
  };
  const [knightPos, setKnightPos] = useState([0, 0]);
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPos, handleClick));
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {squares}
        <Container/>
      </div>
    </DndProvider>
  );
});

export default Board;
