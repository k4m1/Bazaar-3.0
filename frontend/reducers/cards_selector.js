

export const cardsSelector = ({cards}) => (
    Object.keys(cards).map(key => cards[key])
)

export const selectCard = ({ cards }, cardId) => {
    return cards[cardId];
};

export const randomCards = state => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    let randomCards = []

    // debugger
    if (Object.values(state.entities.cards).length < 20) {
        return [];
    }

    let cards = Object.values(state.entities.cards)
    let i = 0
    while (i < 20) {
        let random_card = cards[i]
        randomCards.push(random_card)
        i++
        
    }

    return (randomCards)

};

export const asArray = ({ cards }) => (
    Object.keys(cards).map(key => cards[key])
);
