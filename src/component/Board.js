import React, { memo, useEffect, useState } from "react";
import Square from "./Square";
import Knight from "./Knight";
import { RenderSquare } from "./RenderSquare";
import { canMoveKnight } from "./caMoveKnight";
import { DndProvider, useDrag } from "react-dnd";

const Board = memo(() => {
  const handleClick = (kp, pos) => {
    if (canMoveKnight(knightPos, pos)) {
      setKnightPos((prev) => {console.log('prev', prev); return pos});
    }
  };
  const [knightPos, setKnightPos] = useState((prev) => {
    console.log('prev', prev);
    return ([0, 0])
  });
  console.log('Board', knightPos);

  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(RenderSquare(i, knightPos, handleClick, setKnightPos));
  }

  return (
    // <DndProvider backend={HTML5Backend}>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {squares}
        {/* <Container/> */}
      </div>
    // </DndProvider>
  );
});

export default Board;
