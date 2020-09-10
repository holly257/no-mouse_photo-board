import React from 'react';
import EachCard from './EachCard';
import '../../styling/Results.css';

class ResultsPage extends React.Component {
    render() {
        if (!this.props.hits) {
            return <p>loading...</p>;
        }
        return (
            <main className="main-body">
                <div className="wrapper">
                    {this.props.hits.map((item, index) => {
                        return <EachCard key={item.id} {...item} />;
                    })}
                </div>
            </main>
        );
    }
}

export default ResultsPage;
