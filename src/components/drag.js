//Taken from: https://codesandbox.io/embed/r5qmj8m6lq

import React, { useRef } from 'react';
import clamp from 'lodash-es/clamp';
import { useGesture } from 'react-use-gesture';
import { useSprings, animated, interpolate } from 'react-spring';
import swap from 'lodash-move';

// Returns fitting styles for dragged/idle items
const fn = (order, down, originalIndex, curIndex, y) => index =>
  down && index === originalIndex
    ? { y: curIndex * 100 + y, scale: 1.1, zIndex: '1', shadow: 15, immediate: n => n === 'y' || n === 'zIndex' }
    : { y: order.indexOf(index) * 100, scale: 1, zIndex: '0', shadow: 1, immediate: false }

function Drag({items=["ITEM1", "ITEM2","ITEM3","ITEM4"]}) { 
    const order = useRef(items.map((_, index) => index)) // Store indicies as a local ref, this represents the item order
    const [springs, setSprings] = useSprings(items.length, fn(order.current)) // Create springs, each corresponds to an item, controlling its transform, scale, etc.
    const bind = useGesture(({ args: [originalIndex], down, delta: [, y] }) => {
    const curIndex = order.current.indexOf(originalIndex)
    const curRow = clamp(Math.round((curIndex * 100 + y) / 100), 0, items.length - 1)
    const newOrder = swap(order.current, curIndex, curRow)
    setSprings(fn(newOrder, down, originalIndex, curIndex, y)) // Feed springs new style data, they'll animate the view without causing a single render
    if (!down) order.current = newOrder
  })
  return (
   <div className="drag-main"> 
    <div className="listitems" style={{ height: items.length * 100 }}>
      {springs.map(({ zIndex, shadow, y, scale }, j) => (
        <animated.div
          {...bind(j)}
          key={j}
          style={{
            zIndex,
            boxShadow: shadow.interpolate(s => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`),
            transform: interpolate([y, scale], (y, s) => `translate3d(0,${y}px,0) scale(${s})`),
            WebkitTransform: `translate3d(0, ${y}px, 0) scale(${scale})`,
          }}
          children={items[j]}
        />
      ))}
    </div>
   </div>  
  )
}


export default Drag; 