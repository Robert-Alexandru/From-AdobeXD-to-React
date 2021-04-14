import * as React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Container,  Row, Col } from 'react-bootstrap';

//Drag function: uses useRef hook from React. useRef is a hook that helps with storing reference of a React element.
//Here defined 4 different contraiants refferences, you can create as many as you want.
 const Drag = () => {
  const constraintsRef1 = useRef(null);
  const constraintsRef2 = useRef(null);
  const constraintsRef3 = useRef(null);
  const constraintsRef4 = useRef(null);

  //Creating the game: return a parent container consisting of 4 sets of rows an column, each presenting a parent motion.div(animated container) consisting of different items refering to a constraint reference.
  //Each dragable item represents a coloured box (each box has a different color).
  //Each dragable item is constrained to be dragged only within its parent motion.div container(each container represents a row). You can play with the constraints references as you wish and create amazing interactions.
  return (
    <Container>
				<Row className="justify-content-md-center">
          <h1>Let's play a game. Arrange all objects so their colomn has the same colour. Be careful, you are only able to swap objects on the same row!</h1>
          <a href="https://github.com/Robert-Alexandru/From-AdobeXD-to-React/blob/main/src/components/drag.js"><h2>Code Here</h2></a>
        </Row>
        <Row>
					<Col>
            <motion.div className="drag-container1" ref={constraintsRef1}>
              <motion.div className="drag-item1" drag dragConstraints={constraintsRef1} />
              <motion.div className="drag-item2" drag dragConstraints={constraintsRef1} />
              <motion.div className="drag-item3" drag dragConstraints={constraintsRef1} />
              <motion.div className="drag-item4" drag dragConstraints={constraintsRef1} />
              <motion.div className="drag-item5" drag dragConstraints={constraintsRef1} />
            </motion.div>
          </Col>
        </Row>
        <Row>
          <Col>
              <motion.div className="drag-container2" ref={constraintsRef2}>
                <motion.div className="drag-item5" drag dragConstraints={constraintsRef2} />
                <motion.div className="drag-item4" drag dragConstraints={constraintsRef2} />
                <motion.div className="drag-item2" drag dragConstraints={constraintsRef2} />
                <motion.div className="drag-item3" drag dragConstraints={constraintsRef2} />
                <motion.div className="drag-item1" drag dragConstraints={constraintsRef2} />
              </motion.div>
          </Col>
        </Row>
        <Row>
          <Col>
              <motion.div className="drag-container3" ref={constraintsRef3}>
                <motion.div className="drag-item4" drag dragConstraints={constraintsRef3} />
                <motion.div className="drag-item2" drag dragConstraints={constraintsRef3} />
                <motion.div className="drag-item1" drag dragConstraints={constraintsRef3} />
                <motion.div className="drag-item5" drag dragConstraints={constraintsRef3} />
                <motion.div className="drag-item3" drag dragConstraints={constraintsRef3} />
              </motion.div>
          </Col>
        </Row>
        <Row>
          <Col>
              <motion.div className="drag-container4" ref={constraintsRef4}>
                <motion.div className="drag-item3" drag dragConstraints={constraintsRef4} />
                <motion.div className="drag-item4" drag dragConstraints={constraintsRef4} />
                <motion.div className="drag-item5" drag dragConstraints={constraintsRef4} />
                <motion.div className="drag-item2" drag dragConstraints={constraintsRef4} />
                <motion.div className="drag-item1" drag dragConstraints={constraintsRef4} />
              </motion.div>
          </Col>
        </Row>  
		</Container>
  );
};

export default Drag;