import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Filter from './components/Filter/Filter'
import { Tickets } from './components/Tickets/Tickets'

const App = () => {
    return (
        <div className="App">
            <Header />
            <div className="appContainer">
                <Filter />
                <Tickets />
            </div>
        </div>
    )
}

export default App
