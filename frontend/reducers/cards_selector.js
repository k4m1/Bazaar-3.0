export const cardsSelector = ({cards}) => (
    Object.keys(cards).map(key => cards[key])
) 

