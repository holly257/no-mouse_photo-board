import React from 'react';
import Nav from './components/Nav';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SearchPage from './components/SearchPage';
import SavedPage from './components/SavedPage/SavedPage';
import './styling/App.css';

class App extends React.Component {
    state = {
        saved_images: [
            {
                id: 5537413,
                largeImageURL:
                    'https://pixabay.com/get/53e5d6444e53af14f6da8c7dda793676173bdce255536c48702672d29f4bc551ba_1280.jpg',
                previewURL: 'https://cdn.pixabay.com/photo/2020/09/02/06/05/lake-5537413_150.jpg',
                tags: 'lake, mountains, trees',
                user: 'NickyPe',
            },
            {
                id: 5544365,
                largeImageURL:
                    'https://pixabay.com/get/53e5d1474954a914f6da8c7dda793676173bdce255536c48702672d29f4bc551ba_1280.jpg',
                previewURL:
                    'https://cdn.pixabay.com/photo/2020/09/04/16/18/mountains-5544365_150.jpg',
                tags: 'mountains, summit, meadow',
                user: 'mariohagen',
            },
            {
                id: 5541692,
                largeImageURL:
                    'https://pixabay.com/get/53e5d1424c5bae14f6da8c7dda793676173bdce255536c48702672d29f4bc551ba_1280.jpg',
                previewURL:
                    'https://cdn.pixabay.com/photo/2020/09/03/15/37/waterscape-5541692_150.jpg',
                tags: 'waterscape, flamingos, lagoon',
                user: 'Leolo212',
            },
        ],
    };

    render() {
        return (
            <div className="App">
                <Nav />
                <main className="main-app">
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <Route path="/search" component={SearchPage} />
                        <Route path="/saved" >
                            <SavedPage images={this.state.saved_images}/>
                        </Route>
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;
