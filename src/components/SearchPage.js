import React from 'react';
import config from '../config';
import ApiService from '../api-service';
import GrowingContext from '../context';
import ResultsPage from './results/ResultsPage';

class SearchPage extends React.Component {
    static contextType = GrowingContext;

    submitSearch = e => {
        e.preventDefault();
        this.context.clearError();

        const { search } = e.target;

        const url = `${config.API_ENDPOINT}?key=${config.API_KEY}&q=${encodeURIComponent(
            search.value
        )}&image_type=photo&per_page=21`;

        ApiService.getImages(url)
            .then(data => {
                if(data.total === 0){
                    this.context.updateError(`Sorry, we don't have any images for that yet. Try 'dogs' or 'landscape'`)
                }
                this.context.updateResults(data);
            })
            .catch(error => {
                this.context.updateError('Sorry, something went wrong. Please try again later.');
            });
    };

    render() {
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
