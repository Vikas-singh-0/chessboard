import Knight from "./Knight";
import Square from "./Square"

export const renderSquare = (i, [knightX, knightY], handleClick) => {
  const x = i % 8;
  const y = Math.floor(i / 8);
  const black = (x+y) %2 === 1;
  const piece = (x === knightX && y === knightY) ? (<Knight/>) : null;
  return (<Square black = {black} pos={[x, y]} handleClick = {handleClick}>
    {piece}
  </Square>)
}