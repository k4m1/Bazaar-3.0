import {
    RECEIVE_CARDS,
    RECEIVE_CARD
} from '../actions/card_actions';

const cardsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState)

    switch (action.type) {
        case RECEIVE_CARDS:
            return action.cards
        case RECEIVE_CARD:
            newState[action.card.id] = action.card
            return newState
        default:
            return oldState
    }
}

export default cardsReducer