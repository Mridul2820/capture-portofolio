import React from 'react'
import { Switch, Route } from "react-router-dom";

import Nav from './components/Nav'

import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import OurWork from './pages/OurWork'
import MovieDetail from './pages/MovieDetail'

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
                <Route path="/work" exact>
                    <OurWork />
                </Route>
                <Route path="/work/:id">
                    <MovieDetail />
                </Route>
                <Route path="/contact">
                    <ContactUs />
                </Route>                
            </Switch>

        </div>
    )
}

export default App

