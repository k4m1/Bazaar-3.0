import {
    RECEIVE_CARDS,
    RECEIVE_CARD
} from '../actions/card_actions';

const cardsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState)
    // debugger

    switch (action.type) {
        case RECEIVE_CARDS:
            return Object.assign(newState, action.cards)
        case RECEIVE_CARD:
            newState[action.card.id] = action.card
            return newState
        default:
            return oldState
    }
}

export default cardsReducer

