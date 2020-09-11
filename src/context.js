import React from 'react';

const GrowingContext = React.createContext({
    saveNewCard: () => {},
    updateResults: () => {},
    updateError: () => {},
    clearError: () => {},
});

export default GrowingContext;

export class Context extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            results: null,
            error: null,
            saved: [
                {
                    id: '5537413',
                    largeImageURL:
                        'https://pixabay.com/get/53e5d6444e53af14f6da8c7dda793676173bdce255536c48702672d29f4bc551ba_1280.jpg',
                    previewURL:
                        'https://cdn.pixabay.com/photo/2020/09/02/06/05/lake-5537413_150.jpg',
                    tags: 'lake, mountains, trees',
                    user: 'NickyPe',
                },
                {
                    id: '5544365',
                    largeImageURL:
                        'https://pixabay.com/get/53e5d1474954a914f6da8c7dda793676173bdce255536c48702672d29f4bc551ba_1280.jpg',
                    previewURL:
                        'https://cdn.pixabay.com/photo/2020/09/04/16/18/mountains-5544365_150.jpg',
                    tags: 'mountains, summit, meadow',
                    user: 'mariohagen',
                },
                {
                    id: '5541692',
                    largeImageURL:
                        'https://pixabay.com/get/53e5d1424c5bae14f6da8c7dda793676173bdce255536c48702672d29f4bc551ba_1280.jpg',
                    previewURL:
                        'https://cdn.pixabay.com/photo/2020/09/03/15/37/waterscape-5541692_150.jpg',
                    tags: 'waterscape, flamingos, lagoon',
                    user: 'Leolo212',
                },
                {
                    id: '1381186',
                    largeImageURL:
                        'https://pixabay.com/get/57e3dd424b5aaa14f6da8c7dda793676173bdce255536c48702672d39044c659ba_1280.jpg',
                    previewURL:
                        'https://cdn.pixabay.com/photo/2016/05/09/10/42/weimaraner-1381186_150.jpg',
                    tags: 'weimaraner, puppy, dog',
                    user: 'ElvisClooth',
                },
            ],
        };

        this.saveNewCard = this.saveNewCard.bind(this);
        this.updateResults = this.updateResults.bind(this);
        this.updateError = this.updateError.bind(this);
        this.clearError = this.clearError.bind(this);
    }

    saveNewCard(data) {
        let cardInfo = data.split(',');

        this.state.saved.map(card => {
            if (cardInfo[0] === card.id) {
                cardInfo[0] = this.state.saved.length.toString();
            }
        });

        let newSavedCard = {
            id: cardInfo[0],
            largeImageURL: cardInfo[1],
            previewURL: cardInfo[2],
            tags: `${cardInfo[3]},${cardInfo[4]},${cardInfo[5]}`,
            user: cardInfo[6],
        };

        let currCards = this.state.saved;
        currCards = [...currCards, newSavedCard];

        this.setState({
            saved: currCards,
        });
    }

    updateResults(data) {
        this.setState({
            results: data,
        });
    }

    updateError(data) {
        this.setState({
            error: data,
        });
    }

    clearError() {
        this.setState({
            error: null,
        });
    }

    render() {
        return (
            <GrowingContext.Provider
                value={{
                    ...this.state,

                    saveNewCard: this.saveNewCard,
                    updateResults: this.updateResults,
                    updateError: this.updateError,
                    clearError: this.clearError,
                }}
            >
                {this.props.children}
            </GrowingContext.Provider>
        );
    }
}
