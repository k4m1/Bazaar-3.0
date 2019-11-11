import * as APIUtil from '../util/card_api_util';

export const RECEIVE_CARDS = 'RECEIVE_CARDS';
export const RECEIVE_CARD = 'RECEIVE_CARD';

export const receiveCards = cards => ({
    type: RECEIVE_CARDS,
    cards,
});
export const receiveCard = card => ({
    type: RECEIVE_CARD,
    card,
});

export const fetchCards = () => dispatch => (
    APIUtil.fetchCards()
    .then(cards => dispatch(receiveCards(cards)))
)

export const fetchCard = cardId => dispatch => (
    APIUtil.fetchCard(cardId)
        .then(card => dispatch(receiveCard(card)))
)