import Knight from "./Knight";
import Square from "./Square";

export const RenderSquare = (i, [knightX, knightY], handleClick, setKnightPos, knightPos) => {
  // console.log([knightX, knightY]);
  const x = i % 8;
  const y = Math.floor(i / 8);
  const black = (x + y) % 2 === 1;
  const piece = x === knightX && y === knightY ? <Knight /> : null;

  return (
    <Square key={i} black={black} kPos = {[knightX, knightY]} setKnightPos={setKnightPos} pos={[x, y]} handleClick={handleClick} >
      {piece}
    </Square>
  );
};
