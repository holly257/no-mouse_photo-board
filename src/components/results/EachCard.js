import React from 'react';
import GrowingContext from '../../context';import HotKeys from 'react-hot-keys';
import '../../styling/Results.css';

class EachCard extends React.Component {
    static contextType = GrowingContext;

    AddCard = e => {
        this.context.saveNewCard(e.target.value);
    };

    addByKey(keyName, e, handle) {
        this.context.saveNewCard(e.target.value);
    }

    openTab(keyName, e, handle) {
        window.open(e.target.href, '_blank');
    }

    render() {
        return (
            <div className="each-result">
                <img className="pic" src={this.props.previewURL} alt={this.props.tags} />
                <div className="result-content">
                    <h3 className="user">{this.props.user}</h3>
                    <p className="image-tags">{this.props.tags}</p>

                    <section className="results-footer">
                        <h6 className="results-button">
                            <HotKeys keyName="shift+s" onKeyDown={this.addByKey.bind(this)}>
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
                            </HotKeys>
                        </h6>

                        <h6 className="results-button">
                            <HotKeys keyName="shift+t" onKeyDown={this.openTab.bind(this)}>
                                <a
                                    href={this.props.largeImageURL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    VIEW
                                </a>
                            </HotKeys>
                        </h6>
                    </section>
                </div>
            </div>
        );
    }
}

export default EachCard;
