import React from 'react'
import home1 from '../images/home1.png';
import Wave from "./Wave";

import { StyledBase, StyledDescription, StyledImage, StyledHide } from "../styles";

import { motion } from "framer-motion";
import { titleAnim, fadeAnim, photoAnim } from "../animation";

const AboutSection = () => {

    return (
        <StyledBase>
            <StyledDescription>
                <motion.div >
                    <StyledHide>
                        <motion.h2 variants={titleAnim}>
                            We work to make
                        </motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnim}>
                            Your <span>dreams</span> come
                        </motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnim}>
                            true.
                        </motion.h2>
                    </StyledHide>
                    <motion.p variants={fadeAnim}>
                        Contact us for any photography or videography ideas that you have. We have professionals with amazing skills to help you achieve it.
                    </motion.p>
                    <motion.button variants={fadeAnim}>
                        Contact Us
                    </motion.button>
                </motion.div>
            </StyledDescription>
            <StyledImage>
                <motion.img 
                    variants={photoAnim} 
                    src={home1} 
                    alt="The guy with cammera"
                />
            </StyledImage>
            <Wave />
        </StyledBase>
    )
}

// styled components 


export default AboutSection
