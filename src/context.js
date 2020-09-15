import React from 'react';

const GrowingContext = React.createContext({
    saveNewCard: () => {},
    deleteCard: () => {},
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
                    id: '5563684',
                    largeImageURL:
                        'https://pixabay.com/get/53e5d3404c5aa814f6da8c7dda793676173bdce255536c48732f7bd59449cc59bf_1280.jpg',
                    previewURL:
                        'https://cdn.pixabay.com/photo/2020/09/11/17/01/landscape-5563684_150.jpg',
                    tags: 'landscape, cave, moon',
                    user: 'enriquelopezgarre',
                },
                {
                    id: '5552326',
                    largeImageURL:
                        'https://pixabay.com/get/53e5d0414950aa14f6da8c7dda793676173bdce255536c48732f7bd59449cc59bf_1280.jpg',
                    previewURL:
                        'https://cdn.pixabay.com/photo/2020/09/07/16/35/canyon-5552326_150.jpg',
                    tags: 'canyon, gorge, perspective',
                    user: 'Deeezy',
                },
                {
                    id: '5555362',
                    largeImageURL:
                        'https://pixabay.com/get/53e5d6474953a514f6da8c7dda793676173bdce255536c48732f7bd59449cc59bf_1280.jpg',
                    previewURL:
                        'https://cdn.pixabay.com/photo/2020/09/01/06/00/sky-5534319_150.jpg',
                    tags: 'sky, clouds, forms',
                    user: 'enriquelopezgarre',
                },
                {
                    id: '5550016',
                    largeImageURL:
                        'https://pixabay.com/get/53e5d0434a53aa14f6da8c7dda793676173bdce255536c48732f7bd59449cc59bf_1280.jpg',
                    previewURL:
                        'https://cdn.pixabay.com/photo/2020/09/06/20/13/squirrel-5550016_150.jpg',
                    tags: 'squirrel, rodent, animal',
                    user: 'Alexas_Fotos',
                },
            ],
        };

        this.saveNewCard = this.saveNewCard.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
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

    deleteCard(id) {
        let currCards = this.state.saved;

        let newCards = currCards.filter(card => card.id !== id);

        this.setState({
            saved: newCards,
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
                    deleteCard: this.deleteCard,
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
