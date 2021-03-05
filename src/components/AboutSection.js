import React from 'react'
import home1 from '../images/home1.png';

import { StyledBase, StyledDescription, StyledImage, StyledHide } from "../styles";
import { motion } from "framer-motion";

const AboutSection = () => {

    return (
        <StyledBase>
            <StyledDescription>
                <motion.div >
                    <StyledHide>
                        <motion.h2>
                            We work to make
                        </motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2>
                            Your <span>dreams</span> come
                        </motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2>
                            true.
                        </motion.h2>
                    </StyledHide>
                    <p>
                        Contact us for any photography or videography ideas that you have. We have professionals with amazing skills to help you achieve it.
                    </p>
                    <button>Contact Us</button>
                </motion.div>
            </StyledDescription>
            <StyledImage>
                <img src={home1} alt="The guy with cammera"/>
            </StyledImage>
        </StyledBase>
    )
}

// styled components 


export default AboutSection
