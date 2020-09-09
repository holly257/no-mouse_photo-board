import React from 'react';
import EachResult from './EachResult';
import '../../styling/Results.css';

class ResultsPage extends React.Component {
    render() {
        if (!this.props.hits) {
            return <p>loading...</p>;
        }
        return (
            <main className="main-body">
                <div className="wrapper">
                    <div className="gridHead">
                        <h3 className="title-text">R E S U L T S</h3>
                    </div>
                    {this.props.hits.map((item, index) => {
                        return <EachResult key={item.id} {...item} />;
                    })}
                </div>
            </main>
        );
    }
}

export default ResultsPage;
