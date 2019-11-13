export const cardsSelector = ({cards}) => (
    Object.keys(cards).map(key => cards[key])
)

export const selectCard = ({ cards }, cardId) => {
    return cards[cardId];
};

export const randomCards = state => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    let { cards } = newState.entities
    let randomCards = []

    while (randomCards.length < 20) {
        let random_card = cards[Math.floor(Math.random() * 100)]
        randomCards.push(random_card)
    }

    // debugger
    return (randomCards)

};
