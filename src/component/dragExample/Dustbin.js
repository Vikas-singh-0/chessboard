
import { useDrop } from 'react-dnd'

import { ItemTypes } from './itemTypes.js'

const style = {
	height: '12rem',
	width: '12rem',
	marginRight: '1.5rem',
	marginBottom: '1.5rem',
	color: 'white',
	padding: '1rem',
	textAlign: 'center',
	fontSize: '1rem',
	lineHeight: 'normal',
	float: 'left',
}

function selectBackgroundColor(isActive, canDrop) {
	if (isActive) {
		return 'darkgreen'
	} else if (canDrop) {
		return 'darkkhaki'
	} else {
		return '#222'
	}
}

export const Dustbin = ({ allowedDropEffect }) => {
	const [{ canDrop, isOver }, drop] = useDrop(
		() => {
      console.log('useDrop');
      return ({
			accept: ItemTypes.BOX,
			drop: () => {
        console.log('drop');
        return ({
				name: `${allowedDropEffect} Dustbin`,
				allowedDropEffect,
			})},
			collect: (monitor) => {
        console.log('monitor');
        return ({
				isOver: monitor.isOver(), 
				canDrop: monitor.canDrop(),
			}) },
		}) },
		[allowedDropEffect],
	)

  // console.log(canDrop, isOver, drop);

	const isActive = canDrop && isOver
	const backgroundColor = selectBackgroundColor(isActive, canDrop)
	return (
		<div ref={drop} style={{ ...style, backgroundColor }}>
			{`Works with ${allowedDropEffect} drop effect`}
			<br />
			<br />
			{isActive ? 'Release to drop' : 'Drag a box here'}
		</div>
	)
}
