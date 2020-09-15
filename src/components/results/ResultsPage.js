import React from 'react';
import EachCard from './EachCard';
import '../../styling/Results.css';

class ResultsPage extends React.Component {
    render() {
        return (
            <main className="main-body">
                {!this.props.hits ? (
                    <p className="alert">loading...</p>
                ) : (
                    <div className="wrapper">
                        {this.props.hits.map(item => {
                            return <EachCard key={item.id} {...item} saved={false} />;
                        })}
                    </div>
                )}
            </main>
        );
    }
}

export default ResultsPage;
