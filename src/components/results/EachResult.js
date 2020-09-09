import React from 'react';
import '../../styling/Results.css';

class EachResult extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div className="each-result">
                <img className="pic" src={this.props.previewURL} alt={this.props.tags} />
                <div className="result-content">
                    <h3 className="user">{this.props.user}</h3>
                    <p className="image-tags">{this.props.tags}</p>

                    
                    <section className="results-footer">
                        <h6 className="results-button">
                            <a href={this.props.id} target="_blank" rel="noopener noreferrer">
                                ADD
                            </a>
                        </h6>
                        <h6 className="results-button">
                            <a
                                href={this.props.largeImageURL}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                VIEW
                            </a>
                        </h6>
                    </section>
                </div>
            </div>
        );
    }
}

export default EachResult;
