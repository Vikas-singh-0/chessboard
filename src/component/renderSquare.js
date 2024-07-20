import Knight from "./Knight";
import Square from "./Square"

export const renderSquare = (i, [knightX, knightY]) => {
  const x = i % 8;
  const y = Math.floor(i / 8);
  const black = (x+y) %2 === 1;
  const piece = (x === knightX && y === knightY) ? (<Knight/>) : null;
  return (<Square black = {black}>
    {piece}
  </Square>)
}