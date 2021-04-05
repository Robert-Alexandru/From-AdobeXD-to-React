import * as React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Container,  Row, Col } from 'react-bootstrap';

 const Drag = () => {
  const constraintsRef1 = useRef(null);
  const constraintsRef2 = useRef(null);
  const constraintsRef3 = useRef(null);
  const constraintsRef4 = useRef(null);

  return (
    <Container>
				<Row>
          <h1>Let's play a game. Arrange all objects so their colomn has the same colour. Be careful, you are only able to swap objects on the same row!</h1>
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