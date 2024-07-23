import { useDrop } from "react-dnd";
import Knight from "./Knight";
import Square from "./Square";
import { ItemTypes } from "./itemTypes";

export const RenderSquare = (i, [knightX, knightY], handleClick, setKnightPos) => {
  const x = i % 8;
  const y = Math.floor(i / 8);
  const black = (x + y) % 2 === 1;
  const piece = x === knightX && y === knightY ? <Knight /> : null;
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.KNIGHT,
      drop: () => {
        setKnightPos(x,y)
        console.log('in drop');
        return handleClick([x, y])
      },
      collect: (monitor) => {
        console.log(monitor);
        return ({
        isOver: !!monitor.isOver(),
      })
    },
    }),
    [x, y]
  );
  return (
    <Square ref={drop} black={black} pos={[x, y]} handleClick={handleClick} >
      {piece}
    </Square>
  );
};
