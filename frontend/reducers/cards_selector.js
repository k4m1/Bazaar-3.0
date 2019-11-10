export const cardsSelector = ({cards}) => (
    Object.keys(cards).map(key => cards[key])
)

export const selectCard = ({ cards }, cardId) => {
    return cards[cardId];
};
