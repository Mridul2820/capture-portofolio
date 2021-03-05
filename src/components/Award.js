import React from 'react'
import styled from 'styled-components';

const Award = ({ title, description }) => {
    return (
        <StyleAward>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </StyleAward>
    )
}

const StyleAward = styled.div`
    padding: 2rem;

    h3 {
        font-size: 1.8rem;
    }

    .line {
        width: 70%;
        background: #23d997;
        height: .3rem;
        margin: 1rem 0;
    }

    p {
        padding: 1.8rem 0;
    }
`

export default Award
