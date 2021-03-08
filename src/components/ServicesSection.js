import React from 'react'

import clock from '../images/clock.svg'
import diaphragm from '../images/diaphragm.svg'
import money from '../images/money.svg'
import teamwork from '../images/teamwork.svg'
import home2 from '../images/home2.png'

import styled from 'styled-components';
import { StyledBase, StyledDescription, StyledImage } from "../styles";

import { scrollRevealAnim } from "../animation";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
    const [element, controls] = useScroll()

    return (
        <StyledServices 
            variants={scrollRevealAnim}
            animate={controls} 
            initial="hidden" 
            ref={element} 
        >
            <StyledDescription>
                <h2>High <span>Quality</span> Services </h2>
                <StyledCards>
                    <StyledCard>
                        <div className="icon">
                            <img src={clock} alt="clock"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>

                    <StyledCard>
                        <div className="icon">
                            <img src={teamwork} alt="teamwork"/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>

                    <StyledCard>
                        <div className="icon">
                            <img src={money} alt="money"/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>

                    <StyledCard>
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm"/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                </StyledCards>
            </StyledDescription>
            <StyledImage>
                <img src={home2} alt="home2"/>
            </StyledImage>
        </StyledServices>
    )
}

const StyledServices = styled(StyledBase)`
    h2 {
        padding-bottom: 5rem;
    }

    p {
        width: 70%;
        padding: 2rem 0 4rem 0;
    }
`

const StyledCards = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const StyledCard = styled.div`
    flex-basis: 16rem;

    .icon {
        display: flex;
        align-items: center;

        h3 {
            margin-left: 1rem;
            background: #fff;
            color: #000;
            padding: 1rem;
        }
    }
`


export default ServicesSection
