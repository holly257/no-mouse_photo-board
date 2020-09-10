import React from 'react';
import config from './config';
import GrowingContext from './context';
import ApiService from './api-service';
import Nav from './components/Nav';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SearchPage from './components/SearchPage';
import SavedPage from './components/SavedPage/SavedPage';
import './styling/App.css';

class App extends React.Component {
    static contextType = GrowingContext;

    componentDidMount() {
        this.context.clearError();
        const url = `${config.API_ENDPOINT}?key=${config.API_KEY}&image_type=photo&per_page=21`;

        ApiService.getImages(url)
            .then(data => {
                this.context.updateResults(data);
            })
            .catch(error => {
                this.context.updateError('Sorry, something went wrong. Please try again later.');
            });
    }

    render() {
        return (
            <div className="App">
                <Nav />
                <main className="main-app">
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <Route path="/search" component={SearchPage} />
                        <Route path="/saved">
                            <SavedPage />
                        </Route>
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;
