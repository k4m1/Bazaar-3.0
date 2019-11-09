import CardIndex from './card_index';
import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchCards } from '../../actions/card_actions'
import { cardsSelector } from '../../reducers/cards_selector'


const mSTP = state => ({
    cards: cardsSelector(state.entities)
})

const mDTP = dispatch => ({
    fetchCards: () => dispatch(fetchCards())
})

export default connect(mSTP, mDTP)(CardIndex)