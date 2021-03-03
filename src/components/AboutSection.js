import React from 'react'
import home1 from '../images/home1.png';

const AboutSection = () => {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>Your <span>dreams</span> come</h2>
                    </div>
                    <div className="hide">
                        <h2>true.</h2>
                    </div>
                    <p>
                        Contact us for any photography or videography ideas that you have. We have professionals with amazing skills to help you achieve it.
                    </p>
                    <button>Contact Us</button>
                </div>
            </div>
            <div className="image"><img src={home1} alt="The guy with cammera"/></div>
        </div>
    )
}

export default AboutSection
