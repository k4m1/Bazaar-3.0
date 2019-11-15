import { connect } from 'react-redux';

import { fetchCard } from '../../actions/card_actions';
import { selectCard } from '../../reducers/cards_selector';
import CardShow from './card_show';
import { randomCards } from '../../reducers/cards_selector'
import { fetchRandomCards } from '../../actions/card_actions'
import { cardsSelector } from '../../reducers/cards_selector'


const mSTP = (state, { match }) => {

    const cardId = match.params.cardId

    return {
        card: selectCard(state.entities, cardId),
        randomCards: randomCards(state),
        cards: Object.values(state.entities.cards)
    };
};

const mDTP = dispatch => ({
    fetchCard: id => dispatch(fetchCard(id)),
    fetchRandomCards: (numCards) => dispatch(fetchRandomCards(numCards))
});

export default connect(mSTP, mDTP)(CardShow);