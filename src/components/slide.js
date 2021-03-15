// Inpired by: https://codesandbox.io/embed/zrj66y8714

import React from 'react'
import { useSpring, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-with-gesture'
import { Container,  Row, Col } from 'react-bootstrap';

function Slide({ children }) {
  const [bind, { delta, down }] = useGesture()
  const { x, bg, size } = useSpring({
    x: down ? delta[0] : 0,
    bg: `linear-gradient(120deg, ${delta[0] < 0 ? '#f093fb 0%, #f5576c' : '#96fbc4 0%, #f9f586'} 100%)`,
    size: down ? 1.1 : 1,
    immediate: name => down && name === 'x'
  })
  const avSize = x.interpolate({ map: Math.abs, range: [50, 300], output: ['scale(0.5)', 'scale(1)'], interpolate: 'clamp' })
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
            </Col>
        </Row>
    </Container>
  )
}
export default Slide;
