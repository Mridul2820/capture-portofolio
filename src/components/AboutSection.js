import React from 'react'
import home1 from '../images/home1.png';
import styled from 'styled-components';

const AboutSection = () => {
    return (
        <StyledAbout>
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
        </StyledAbout>
    )
}

// styled components 
const StyledAbout = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 10rem;
    color: white;
`

const StyledDescription = styled.div`
    flex: 1;
    padding-right: 5rem;

    h2 {
        font-weight: lighter;
    }
`

const StyledImage = styled.div`
    flex: 1;
    overflow: hidden;

    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`

const StyledHide = styled.div`
    overflow: hidden;
`

export default AboutSection
