import React from 'react'
import { Link } from "react-router-dom";

import styled from 'styled-components';

const Nav = () => {
    return (
        <StyledNav>
            <h1><Link className='logo' to="/">Capture</Link></h1>
            <ul>
                <li><Link to="/">About Us</Link></li>
                <li><Link to="/work">Our Work</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
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
        }
    }

    .logo {
        font-size: 1.5rem;
        font-family: 'Lobster', cursive;
    }
`

export default Nav
