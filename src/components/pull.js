//Inspired by https://codesandbox.io/embed/r24mzvo3q

import React from 'react';
import { Container,  Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import clamp from 'lodash-es/clamp'
import { useSpring, animated } from 'react-spring'
import { useGesture } from 'react-with-gesture'

/**
 * Function to set the pull hook and define component movement based on multiple gestures data (down, delta, velocity).
 * Use React-Spring to set the initial page coordinates of the object(xy).
 * Define velocity(drag momentum and speed) by clamping the initial number(value passed as initial velocity), and its lower and upper bounds (here lower bound is 1 and upper bound is 8).
 * Set useGesture parameters: page coordinates(xy) on mouse/touch down, delta sets the page coordinates(xy) to their initial values [0, 0]. 
 * Set custom configuration(config) to define the drag momentum and speed of the object (velocity) defining its mass, tension and friction. For example: pull the object spin it few times and release click. You will see the object bounces in place for a bit before settling.
 */

function Pull(){
        const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }))
        const bind = useGesture(({ down, delta, velocity }) => {
        velocity = clamp(velocity, 1, 8)
        set({ xy: down ? delta : [0, 0], config: { mass: velocity, tension: 500 * velocity, friction: 50 } })
    })
	//Return a container consisting of a Card object. Wrap the object in an animated container and bind the pull function to it. 
	//Style the animated div and use the interpolate function on the page coordinates(take their values and form one result).
	//Bind the pull function to the animated container, implicitly the Card.   
    return (
		<Container>
				<Row>
					<Col md={{ span: 4, offset: 4 }}>
                    <animated.div {...bind()} style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`) }}>
						<Card className="pullcard">
							<Card.Img variant="top" src="https://picsum.photos/id/1024/400"/>
							<Card.Body className="cardbody">
								<Card.Title>"Pull Gesture"</Card.Title>
								<Card.Text> This card can be pulled from its place, on click release, it will return to its initial poisition</Card.Text>
							</Card.Body>
						</Card>
                    </animated.div>
					<a href="https://github.com/Robert-Alexandru/From-AdobeXD-to-React/blob/main/src/components/pull.js"><h5>Code Here</h5></a>
					</Col>
                </Row> 
		</Container>
		);
	}


export default Pull; 