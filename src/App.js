import React from 'react'
import { Switch, Route } from "react-router-dom";

import Nav from './components/Nav'

import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import OurWork from './pages/OurWork'

import GlobalStyle from './components/GlobalStyle'

const App = () => {
    return (
        <div>
            <GlobalStyle />
            <Nav />
            <Switch>
                <Route path="/" exact>
                    <AboutUs />
                </Route>
                <Route path="/work">
                    <OurWork />
                </Route>
                <Route path="/contact">
                    <ContactUs />
                </Route>                
            </Switch>

        </div>
    )
}

export default App

