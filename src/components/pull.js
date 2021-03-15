import React from 'react';
import { Container,  Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import Navigation from './navbar';
import clamp from 'lodash-es/clamp'
import { useSpring, animated } from 'react-spring'
import { useGesture } from 'react-with-gesture'

function Pull(){
        const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }))
        const bind = useGesture(({ down, delta, velocity }) => {
        velocity = clamp(velocity, 1, 8)
        set({ xy: down ? delta : [0, 0], config: { mass: velocity, tension: 500 * velocity, friction: 50 } })
    })    
    return (
		<Container>
			<Navigation />
				<Row>
					<Col md={{ span: 4, offset: 4 }}>
                    <animated.div {...bind()} style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`) }}>
						<Card>
							<Card.Img variant="top" src="https://picsum.photos/id/1024/400"/>
							<Card.Body>
								<Card.Title>"Pull Gesture" </Card.Title>
								<Card.Text> This card can be pulled from its place, on click release, it will return to its initial poisition</Card.Text>
							</Card.Body>
						</Card>
                    </animated.div>
					</Col>
                </Row> 
		</Container>
		);
	}


export default Pull; 