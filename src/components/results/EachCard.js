import React from 'react';
import GrowingContext from '../../context';
import '../../styling/Results.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '../../../node_modules/@fortawesome/free-solid-svg-icons';

class EachCard extends React.Component {
    static contextType = GrowingContext;
    state = {
        item_saved: false,
    };

    AddCard = e => {
        this.context.saveNewCard(e.target.value);
        let saved_state = this.state.item_saved;
        this.setState({ item_saved: !saved_state });
    };

    DeleteCard = e => {
        this.context.deleteCard(e.target.value);
    };

    render() {
        return (
            <div className="each-result">
                <img className="pic" src={this.props.previewURL} alt={this.props.tags} />
                <div className="result-content">
                    <h3 className="user">{this.props.user}</h3>
                    <p className="image-tags">{this.props.tags}</p>

                    <section className="results-footer">
                        {this.state.item_saved ? (
                            <FontAwesomeIcon className="save-icon" icon={faCheckCircle} />
                        ) : (
                            ''
                        )}
                        <h6 className="results-button">
                            <button
                                onClick={e => this.AddCard(e)}
                                value={[
                                    this.props.id,
                                    this.props.largeImageURL,
                                    this.props.previewURL,
                                    this.props.tags,
                                    this.props.user,
                                ]}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                SAVE
                            </button>
                        </h6>

                        <h6 className="results-button">
                            <a
                                href={this.props.largeImageURL || this.props.previewURL}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                VIEW
                            </a>
                        </h6>
                        {!this.props.saved ? null : (
                            <h6 className="results-button">
                                <button
                                    onClick={e => this.DeleteCard(e)}
                                    value={this.props.id}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    DELETE
                                </button>
                            </h6>
                        )}
                    </section>
                </div>
            </div>
        );
    }
}

export default EachCard;
