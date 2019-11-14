import { connect } from 'react-redux';

import { fetchCard } from '../../actions/card_actions';
import { selectCard } from '../../reducers/cards_selector';
import CardShow from './card_show';
import { randomCards } from '../../reducers/cards_selector'

const mSTP = (state, { match }) => {

    const cardId = match.params.cardId

    return {
        card: selectCard(state.entities, cardId),
        randomCards: randomCards(state),
    };
};

const mDTP = dispatch => ({
    fetchCard: id => dispatch(fetchCard(id))
});

export default connect(mSTP, mDTP)(CardShow);