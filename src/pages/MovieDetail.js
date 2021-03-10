import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";

import { MovieState } from "../movieState";

import Award from '../components/Award'

import styled from 'styled-components';

import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;

    const [movies] = useState(MovieState)
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
        setMovie(currentMovie[0]);
    }, [movies, url]);

    return (
        <>
        {movie && (
            <StyledDetails
                variants={pageAnimation} 
                initial="hidden" 
                animate="show"
                exit="exit"
            >
                <StyledHeadline>
                    <h2>{movie.title}</h2>
                    <img src={movie.mainImg} alt={movie.title} />
                </StyledHeadline>
                <StyleAwards>
                    {movie.awards.map(award => (
                        <Award 
                            key={award.title}
                            title={award.title} 
                            description={award.description} 
                        />
                    ))}
                </StyleAwards>
                <StyleImageDisplay>
                    <img src={movie.secondaryImg} alt={movie.title} />
                </StyleImageDisplay>
            </StyledDetails>
        )}
        </>
    )
}

const StyledDetails = styled(motion.div)`
    color: white;
`

const StyledHeadline = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;

    h2 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%)
    }

    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }

`

const StyleAwards = styled.div`
    min-height: 8vh;
    display: flex;
    margin: 5rem 7rem;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 1000px) {
        margin: 2rem 2rem;
        flex-wrap: wrap;
    }
`

const StyleImageDisplay = styled.div`
    min-height: 50vh;
    
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`

export default MovieDetail
