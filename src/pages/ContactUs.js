import React from 'react'
import ScrollTop from '../components/ScrollTop'

import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from 'styled-components';

const ContactUs = () => {
    return (
        <StyledContact
            variants={pageAnimation} 
            initial="hidden" 
            animate="show"
            exit="exit"
            style={{background: "#fff"}}
        >
            <ScrollTop />
            <StyledTitle>
                <StyledHide>
                    <motion.h2 variants={titleAnim}>
                        Get in Touch
                    </motion.h2>
                </StyledHide>
            </StyledTitle>
            <div>
                <StyledHide>
                    <StyledSocial variants={titleAnim}>
                        <StyledCircle />
                        <h2>Send Us a Message</h2>
                    </StyledSocial>
                </StyledHide>
                <StyledHide>
                    <StyledSocial variants={titleAnim}>
                        <StyledCircle />
                        <h2>Send Us a Message</h2>
                    </StyledSocial>
                </StyledHide>
                <StyledHide>
                    <StyledSocial variants={titleAnim}>
                        <StyledCircle />
                        <h2>Send Us a Message</h2>
                    </StyledSocial>
                </StyledHide>

            </div>
        </StyledContact>
    )
}

const StyledContact = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;

    @media (max-width: 1300px) {
        padding: 2rem;
    }
`

const StyledTitle = styled.div`
    margin-bottom: 5rem;
    color: #000;
`

const StyledHide = styled.div`
    overflow: hidden;
`
const StyledCircle = styled.div`
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    background: #353535;

    @media (max-width: 600px) {
        width: 1.5rem;
        height: 1.5rem;
    }
`
const StyledSocial = styled(motion.div)`
    display: flex;
    align-items: center;

    h2 {
        margin: 1rem;

        @media (max-width: 600px) {
            font-size: 1.8rem;
        }
    }
`

export default ContactUs
