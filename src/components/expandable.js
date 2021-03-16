// Inspired from https://abhik-b.medium.com/cards-full-screen-expand-and-close-react-and-framer-motion-af0f5cf83f45
// More information and animations: https://www.framer.com/api/motion/
import {AnimateSharedLayout, motion} from 'framer-motion';
import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

function Expandable({value}) {
    const [open,setOpen]=useState(false)
    return <AnimateSharedLayout>
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