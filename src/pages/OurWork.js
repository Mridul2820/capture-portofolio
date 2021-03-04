import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';

import athleteSmall from '../images/athlete-small.png'
import goodtimesSmall from '../images/goodtimes-small.png'
import theracerSmall from '../images/theracer-small.png'

const OurWork = () => {
    return (
        <StyledWork>
            <StyledMovie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link>
                    <img src={athleteSmall} alt="athleteSmall"/>
                </Link>
            </StyledMovie>
            <StyledMovie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link>
                    <img src={goodtimesSmall} alt="goodtimesSmall"/>
                </Link>
            </StyledMovie>
            <StyledMovie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link>
                    <img src={theracerSmall} alt="theracerSmall"/>
                </Link>
            </StyledMovie>
        </StyledWork>
    )
}

const StyledWork = styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;

    h2 {
        padding: 1rem 0;
    }
`

const StyledMovie = styled.div`
    padding-bottom: 10rem;

    .line {
        height: 0.5rem;
        background: #ccc;
        margin-bottom: 3rem;
    }

    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`

export default OurWork
