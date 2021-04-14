// Taken from: https://codesandbox.io/embed/zrj66y8714

import React from 'react'
import { useSpring, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-with-gesture'
import { Container,  Row, Col } from 'react-bootstrap';

/**
 * Function Slide to set the drag hook and define component movement based on multiple gestures data (down, delta, size).
 * Use React-Spring to set the initial page coordinate of the object(x).
 * x: down? sets page coordinate(x) on mouse/touch down, delta sets the page coordinate(x) to the initial value.
 * bg: represents the background of the container behind(class="item") the top container (class="fg") which is created based on a linear-gradient deping on the position of fg. 
 * Monitor the page coordinate using delta (if delta[0] < 0 means the top container class="fg" slides on the left so gradiently change colour to red (2 diiferent nuances depenindg on position).
 * Otherwise, if !delta[0] < 0, the top container class="fg" slides on the right, so gradiently change colour to green (2 diiferent nuances depenindg on position). You can play with the colours and gradients as you wish based on the same principles.
 * size: represents the size of the containers. Also, the top container (class="fg"), inscreases in size a bit when slided.
 * immediate: on mouse touch down set the top container and the initial position of the coordinate x.
 */

function Slide({ children }) {
  const [bind, { delta, down }] = useGesture()
  const { x, bg, size } = useSpring({
    x: down ? delta[0] : 0,
    bg: `linear-gradient(120deg, ${delta[0] < 0 ? '#f093fb 0%, #f5576c' : '#96fbc4 0%, #f9f586'} 100%)`,
    size: down ? 1.1 : 1,
    immediate: name => down && name === 'x',
  })

  //The animated div (class="av") represents an object (white circle) to be added to the behind container(class="item") which is created whenever the top container slides, at either start or end, depending on the position of the top container (class="fg").
  //avSize is a helper object: Uses the interpolate function (with clamp) on the page coordinate x to bind multiple values (range and scale of the object) and create a result. 
  //This translates into the object(white circle) inscrease in size depending on the position of the top container (class="fg").
  //The animated div representing the circle object (class="av") can be replaced with icons different object or whatever you prefer. By playing with the above mentioned functions and principles you can even set a different object at the start or end of the behind container bg.
  //For the animated container behind the slider (class="item") the background has not been defined on the CSS as delta values were needed from within this component.

  const avSize = x.interpolate({ map: Math.abs, range: [50, 300], output: ['scale(0.5)', 'scale(1)'], interpolate: 'clamp'})
  return (
    <Container>
        <Row>
            <Col md={{ span: 4, offset: 4 }}>
                <animated.div {...bind()} class="item" style={{ background: bg }}>
                  <animated.div class="av" style={{ transform: avSize, justifySelf: delta[0] < 0 ? 'end' : 'start' }} />
                  <animated.div class="fg" style={{ transform: interpolate([x, size], (x, s) => `translate3d(${x}px,0,0) scale(${s})`) }}>
                    <h1>Slider</h1>
                    {children}
                  </animated.div>
                </animated.div>
                <a href="https://github.com/Robert-Alexandru/From-AdobeXD-to-React/blob/main/src/components/slide.js"><h2>Code Here</h2></a>
            </Col>
        </Row>
    </Container>
  )
}
export default Slide;
