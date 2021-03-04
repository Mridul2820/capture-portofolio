import React from 'react'
import home1 from '../images/home1.png';

import styled from 'styled-components';
import { StyledBase, StyledDescription, StyledImage, StyledHide } from "../styles";

const AboutSection = () => {
    return (
        <StyledBase>
            <StyledDescription>
                <div className="title">
                    <StyledHide>
                        <h2>We work to make</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>Your <span>dreams</span> come</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>true.</h2>
                    </StyledHide>
                    <p>
                        Contact us for any photography or videography ideas that you have. We have professionals with amazing skills to help you achieve it.
                    </p>
                    <button>Contact Us</button>
                </div>
            </StyledDescription>
            <StyledImage>
                <img src={home1} alt="The guy with cammera"/>
            </StyledImage>
        </StyledBase>
    )
}

// styled components 


export default AboutSection
