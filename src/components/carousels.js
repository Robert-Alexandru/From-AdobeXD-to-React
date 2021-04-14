//Inspired by https://codesandbox.io/s/framer-motion-image-gallery-pqvx3?fontsize=14&module=/src/Example.tsx&file=/src/Example.tsx
import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { images } from "./carousels-image-data";
import { Container, Row, Col } from 'react-bootstrap';

//custom object defining variants for carousel items. Defines direction, opacity, and z-index of items on entering the carousel, when on center of the carousel, or when exiting the carousel.
const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

 const Carousels = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  /**
    * Return a container containing a carousel.
    * As from the original documentation: AnimatePresence allows components to animate out when they're removed from the React tree.
    * Motion.img represents an animated object from framer motion(image) which is wrapped in the AnimatePresence object so the image can exit the animation properly.
    * AnimatePresence takes 2 arguments here: initial state which is set to false by default and custom representing the direction using the state.
    * key: takes the page index
    * src: points to the image from (carousels-image-data.js exported at the top of the file). Takes an index defined above using the wrap function taking the length of the images array and page.
    * initial variant: set the state of the motion image to enter on button click or drag and drop (see const variants above).
    * animate variant: set the state of the motion image to animate and stay on the center (see const variants above).
    * exit variant: set the state of the motion image on exiting the carousel (see const variants above).
    * transition: define how the motion image performs the animation.
    * drag, dragContraints, dragElastic, onDragEnd: Give the ability of drag and drop the motion image (or swipe) and define the pagination based on the swipe direction.
    */
  return (
    <Container className="carousel">
      <div><a href="https://github.com/Robert-Alexandru/From-AdobeXD-to-React/blob/main/src/components/carousels.js"><h5>Code Here</h5></a></div>
     <Row>
        <Col md={12}>
      <AnimatePresence classname="motion-image" initial={false} custom={direction}>
        <motion.img
          id="motion-image"
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div className="next" onClick={() => paginate(1)}>
        <img  id="motion-image" src="https://img.icons8.com/wired/64/000000/circled-right-2.png" alt="arrowf"/>
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        <img  id="motion-image" src="https://img.icons8.com/wired/64/000000/circled-left-2.png" alt="arrowb"/>
      </div>
      </Col>
     </Row>
    </Container>
  );
};
export default Carousels;
