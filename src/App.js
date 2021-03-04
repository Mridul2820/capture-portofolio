import React from 'react'

import Nav from './components/Nav'
import AboutUs from './pages/AboutUs'

import GlobalStyle from './components/GlobalStyle'

const App = () => {
    return (
        <div>
            <GlobalStyle />
            <Nav />
            <AboutUs />
        </div>
    )
}

export default App

