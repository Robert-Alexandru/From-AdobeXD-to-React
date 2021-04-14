// Inspired from https://abhik-b.medium.com/cards-full-screen-expand-and-close-react-and-framer-motion-af0f5cf83f45
// More information and animations: https://www.framer.com/api/motion/

import {AnimateSharedLayout, motion} from 'framer-motion';
import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

/**
 * Expandable function taking one parameter value, representing the state of the object, open or not.
 * useState react hook for setting a value to an object based on the state. In this case, the motion container is by default not opened, onClick handler uses the state to set the container to open or vice-versa.
 * return an AnimateSharedLayout from framer-motion which enables animations between layouts.
 * transition : duration(amount in seconds) it takes to the motion container transition between different states.
 * animate: defines how the motion container will animate on transition. 
 * scale: how the whole container scales on animation.
 * rotate: how the whole container rotates on animation.
 * whileHover: property to make the container scale within the given values whenever the motion container is hoovered.
 */

function Expandable({value}) {
    const [open,setOpen]=useState(false)
    return <AnimateSharedLayout>
        <a href="https://github.com/Robert-Alexandru/From-AdobeXD-to-React/blob/main/src/components/expandable.js"><h2>Code Here</h2></a>
            {open?
            <Row>
                <Col md={{ span: 4, offset: 5 }}>
                    <motion.div onClick={()=>setOpen(false)}
                            className='expanded-card'
                            transition={{ duration: 1 }}
                            animate={{
                                scale: [1, 1, 1, 1, 1],
                                rotate: [0, 0, 270, 270, 0],
                              }}
                            layoutId="expandable-card"
                        style={{background:value}}>
                    <motion.h2
                        className='expanded-card-h'
                        layoutId="expandable-card-h">
                        Expanded Card {value}</motion.h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate aliquam molestiae ratione sint magnam sequi fugiat u
                        llam earum distinctio fuga iure, ad odit repudiandae modi est alias ipsum aperiam.
                        Culpa?</p>
                    </motion.div>
                </Col>
            </Row>

            :
            <Row>
                <Col md={{ span: 4, offset: 5 }}>
                    <motion.div
                    onClick={()=>setOpen(true)}
                    transition={{ duration: 1 }}
                    className="normal-card"
                    animate={{
                        scale: [1, 1, 1, 1, 1],
                        rotate: [0, 0, 300, 300, 0],
                      }}
                    whileHover={{ scale: 1.2 }}
                    layoutId="expandable-card"
                    style={{background:value}}>
                        <motion.h1 layoutId="expandable-card-h">{value}</motion.h1>
                    </motion.div>
                </Col>
            </Row>
            }
    </AnimateSharedLayout>
    }
    
export default Expandable;