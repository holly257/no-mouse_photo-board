import React from 'react';
import config from '../config';
import ApiService from '../api-service';
import GrowingContext from '../context';
import HotKeys from 'react-hot-keys';
import ResultsPage from './results/ResultsPage';
import KeyboardKey from './KeyboardKey';

class SearchPage extends React.Component {
    static contextType = GrowingContext;

    state = {
        search_value: '',
    };

    submitSearch = e => {
        this.context.clearError();

        let search_term = '';
        if (e.target) {
            e.preventDefault();
            const { search } = e.target;
            search_term = search.value;
        } else {
            search_term = e;
        }

        const url = `${config.API_ENDPOINT}?key=${config.API_KEY}&q=${encodeURIComponent(
            search_term
        )}&image_type=photo&per_page=21`;

        ApiService.getImages(url)
            .then(data => {
                if (data.total === 0) {
                    this.context.updateError(
                        `Sorry, we don't have any images for that yet. Try 'dogs' or 'landscape'`
                    );
                }
                this.context.updateResults(data);
            })
            .catch(error => {
                this.context.updateError('Sorry, something went wrong. Please try again later.');
            });
    };

    handleTyping = e => {
        this.setState({ search_value: e.target.value });
    };

    searchByKey(keyName, e, handle) {
        this.submitSearch(this.state.search_value);
    }

    render() {
        return (
            <main className="inner-main">
                <section id="page-header">
                    <KeyboardKey />
                    <h3 className="title-text">S E A R C H</h3>

                    <form
                        onSubmit={e => {
                            this.submitSearch(e);
                        }}
                    >
                        <input
                            className="search"
                            type="text"
                            id="search"
                            name="search"
                            required
                            placeholder="Search Images"
                            onChange={this.handleTyping}
                        ></input>
                        <HotKeys keyName="shift+f" onKeyDown={this.searchByKey.bind(this)}>
                            <button type="submit">Go</button>
                        </HotKeys>

                        {this.context.error && <p className="alert">{this.context.error}</p>}
                    </form>
                </section>
                <section>
                    <ResultsPage {...this.context.results} />
                </section>
            </main>
        );
    }
}

export default SearchPage;
