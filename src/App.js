import React from 'react';
import Nav from './components/Nav';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import SearchPage from './components/SearchPage';
import './App.css';

function App() {
    return (
        <div className="App">
            <Nav />
            <main className="main-app">
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/search" component={SearchPage} />
                </Switch>
            </main>
        </div>
    );
}

export default App;
