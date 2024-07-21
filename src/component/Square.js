import React, { memo } from 'react'

const Square = memo(({ black, children, handleClick, pos }) => {
  const fill = black ? 'black' : 'white';
  const stroke = black ? 'white' : 'black';
  console.log('h');
  return (
    <div
      onClick={() => handleClick(pos)}
      style={{
        backgroundColor: fill,
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