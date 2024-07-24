import React, { memo } from 'react'
import { useDrop } from 'react-dnd';
import { ItemTypes } from './itemTypes';

const Square = memo(({ black, children, handleClick, pos, kPos, setKnightPos }) => {
  const fill = black ? 'black' : 'white';
  const stroke = black ? 'white' : 'black';
  console.log('kPos', kPos, pos);
  const [x, y] = pos;
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.KNIGHT,
      drop: () => {  
        // setKnightPos([x,y])
        console.log('in drop', x, y);
        handleClick(kPos, pos)
      },
      collect: (monitor) => {
        return ({
        isOver: !!monitor.isOver(),
      })
    },
    }),
    [x, y]
  );
  
  return (
    <div
      ref={drop}
      onClick={() => handleClick(kPos, pos)}
      style={{
        backgroundColor: isOver ? 'red' : fill,
        color: stroke,
        width: '12.5%',
        height: '12.5%',
        display: 'flex',
        justifyContent: 'center',
         alignItems: 'center'
      }}
    >
      {children}
    </div>
  )
});

export default Square;