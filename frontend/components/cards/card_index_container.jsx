import CardIndex from './card_index';
import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchCards } from '../../actions/card_actions'


const mSTP = state => {
    const cards = fetchCards()
    return {
        cards,
    }
}

const mDTP = dispatch => {
    return {
        fetchCards
    }
}

export default connect(mSTP, mDTP)(CardIndex)