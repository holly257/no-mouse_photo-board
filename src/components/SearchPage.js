import React from 'react';
import config from '../config';
import ResultsPage from './results/ResultsPage';

class SearchPage extends React.Component {
    state = {
        error: null,
        success: null,
        results: null,
    };

    componentDidMount() {
        const url = `${config.API_ENDPOINT}?key=${config.API_KEY}&image_type=photo&per_page=21`;

        fetch(url, { method: 'get' })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => {
                        throw error;
                    });
                }
                return res.json();
            })
            .then(data => {
                this.setState({ results: data });
            })
            .catch(error => {
                this.setState({ error: 'Sorry, something went wrong. Please try again later.' });
            });
    }

    submitSearch = e => {
        e.preventDefault();
        this.setState({ error: null, success: null });

        const { search } = e.target;

        const url = `${config.API_ENDPOINT}?key=${config.API_KEY}&q=${encodeURIComponent(
            search.value
        )}&image_type=photo&per_page=21`;

        fetch(url, { method: 'get' })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => {
                        throw error;
                    });
                }
                return res.json();
            })
            .then(data => {
                this.setState({ results: data });
            })
            .catch(error => {
                this.setState({ error: 'Sorry, something went wrong. Please try again later.' });
            });
    };

    render() {
        const { error, success, results } = this.state;
        return (
            <main className='inner-main'>
                <section id="page-header">
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
                        ></input>
                        <button type="submit">Go</button>
                        {success && <p className="email_error">{success}</p>}
                        {error && <p className="email_error">{error}</p>}
                    </form>
                </section>
                <section>
                    <ResultsPage {...results} />
                </section>
            </main>
        );
    }
}

export default SearchPage;
