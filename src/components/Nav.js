import React from 'react'
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { useLocation } from "react-router-dom";
import styled from 'styled-components';

const Nav = () => {
    const {pathname} = useLocation()
    return (
        <StyledNav>
            <h1><Link className='logo' to="/">Capture</Link></h1>
            <ul>
                <li>
                    <Link to="/">About Us</Link>
                    <StyledLine 
                        transition={{duration: 0.75}}
                        initial={{width: "0%"}}
                        animate={{width: pathname === '/' ? "50%" : "0%" }}
                    />
                </li>
                <li>
                    <Link to="/work">Our Work</Link>
                    <StyledLine 
                        transition={{duration: 0.75}}
                        initial={{width: "0%"}}
                        animate={{width: pathname === '/work' ? "50%" : "0%" }}
                    />
                    </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                    <StyledLine 
                        transition={{duration: 0.75}}
                        initial={{width: "0%"}}
                        animate={{width: pathname === '/contact' ? "50%" : "0%" }}
                    />
                </li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    position: sticky;
    top: 0;
    z-index: 100;

    a {
        color: #fff;
        text-decoration: none;
    }

    ul {
        display: flex;
        list-style: none;

        li {
            position: relative;
            padding-left: 5rem;

            @media (max-width: 600px) {
                padding-left: 2rem;
            }

            @media (max-width: 400px) {
                padding-left: 1rem;
            }
        }
    }

    .logo {
        font-size: 1.5rem;
        font-family: 'Lobster', cursive;
    }

    @media (max-width: 800px) {
        padding: 1rem 5rem;
    }

    @media (max-width: 600px) {
        padding: 1rem 2rem;
    }

    @media (max-width: 600px) {
        padding: 1rem;
    }
`

const StyledLine = styled(motion.div)`
    height: 0.3rem;
    background: #23d997;
    width: 0%;
    position: absolute;
    bottom: -80%;
    left: 51%;
`   


export default Nav
