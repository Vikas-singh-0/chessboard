import React from 'react'

export default function Square({ black, children }) {
  const fill = black ? 'black' : 'white';
  const stroke = black ? 'white' : 'black';

  return (
    <div
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
}