import React from 'react'

import Toggle from './Toggle'

import styled from 'styled-components';
import { StyledBase } from "../styles";

import { AnimateSharedLayout } from "framer-motion";

const FaqSection = () => {
    return (
        <StyledFaq>
            <h2>Any Questions <span>FAQ</span> </h2>

            <AnimateSharedLayout>
                <Toggle title="How do I start?">
                    <div className="answers">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, corrupti!</p>
                    </div>
                </Toggle>
                <Toggle title="Daily Schedule">
                    <div className="answers">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, corrupti!</p>
                    </div>
                </Toggle>
                <Toggle title="Different Payment Methods">
                    <div className="answers">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, corrupti!</p>
                    </div>
                </Toggle>
                <Toggle title="What product do you offer?">
                    <div className="answers">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, corrupti!</p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </StyledFaq>
    )
}

const StyledFaq = styled(StyledBase)`
    display: block;

    span {
        display: block;
    }

    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }

    .faq-line {
        background: #ccc;
        height: .2rem;
        width: 100%;
        margin: 2rem 0;
    }

    .question {
        padding: 3rem 0;
        cursor: pointer;
    }

    .answers {
        padding: .5rem 0;

        p {
            padding: .5rem 0;
        }
    }
`


export default FaqSection
