import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./itemTypes";

export default function Knight() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: (monitor) => {
      window.mon = monitor;
      console.log(monitor.isDragging());
      return ({
      isDragging: monitor.isDragging(),
    })
  },
  }));
  return (
    <span ref={drag} style={{ fontSize: "50px", fontWeight: "500", opacity: isDragging ? '0.4' : '1', cursor: "move" }}>
      ♘
    </span>
  );
}
