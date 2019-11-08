import * as APIUtil from '../util/card_api_util';

export const RECEIVE_CARDS = 'RECEIVE_BENCHES';
export const RECEIVE_CARD = 'RECEIVE_BENCH';

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

export const fetchCard = (name) => dispatch => (
    APIUtil.fetchCard(name)
        .then(card => dispatch(receiveCard(card)))
)