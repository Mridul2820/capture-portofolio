import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';

import athleteSmall from '../images/athlete-small.png'
import goodtimesSmall from '../images/goodtimes-small.png'
import theracerSmall from '../images/theracer-small.png'

import { motion } from "framer-motion";
import { pageAnimation, fadeAnim, photoAnim, lineAnim, sliderAnim,sliderContainerAnim } from "../animation";

import { useScroll } from "../components/useScroll";


const OurWork = () => { 
    const [element, controls] = useScroll()
    const [element2, controls2] = useScroll()

    return (
        <StyledWork 
            variants={pageAnimation} 
            initial="hidden" 
            animate="show"
            exit="exit"
            style={{background: "#fff"}}
        >
            <motion.div variants={sliderContainerAnim}>
                <StyledFrame1 variants={sliderAnim}></StyledFrame1>
                <StyledFrame2 variants={sliderAnim}></StyledFrame2>
                <StyledFrame3 variants={sliderAnim}></StyledFrame3>
                <StyledFrame4 variants={sliderAnim}></StyledFrame4>
            </motion.div>
            

            <StyledMovie>
                <motion.h2 variants={fadeAnim}>The Athlete</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-athlete">
                    <StyledHide>
                        <motion.img 
                            variants={photoAnim} 
                            src={athleteSmall} 
                            alt="athleteSmall"
                        />
                    </StyledHide>
                </Link>
            </StyledMovie>
            <StyledMovie 
                ref={element} 
                variants={fadeAnim} 
                animate={controls} 
                initial="hidden"
            >
                <h2>Good Times</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/good-times">
                    <img src={goodtimesSmall} alt="goodtimesSmall"/>
                </Link>
            </StyledMovie>
            <StyledMovie
                ref={element2} 
                variants={fadeAnim} 
                animate={controls2} 
                initial="hidden"
            >
                <h2>The Racer</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-racer">
                    <img src={theracerSmall} alt="theracerSmall"/>
                </Link>
            </StyledMovie>
        </StyledWork>
    )
}

const StyledWork = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;

    h2 {
        padding: 1rem 0;
    }
`

const StyledMovie = styled(motion.div)`
    padding-bottom: 10rem;

    .line {
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }

    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`

const StyledHide = styled(motion.div)`
    overflow: hidden;
`

// Frame Animation
const StyledFrame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`

const StyledFrame2 = styled(StyledFrame1)`
    background: #ff8efb;
`

const StyledFrame3 = styled(StyledFrame1)`
    background: #8ed2ff;
`

const StyledFrame4 = styled(StyledFrame1)`
    background: #8effa0;
`

export default OurWork
