import { connect } from 'react-redux';

import { fetchCard } from '../../actions/card_actions';
import { selectCard } from '../../reducers/cards_selector';
import CardShow from './card_show';

const mSTP = (state, { match }) => {
    const cardId = parseInt(match.params.cardId);
    const card = selectCard(state.entities, cardId);
    return {
        cardId,
        card,
    };
};

const mDTP = dispatch => ({
    fetchCard: id => dispatch(fetchCard(id))
});

export default connect(mSTP, mDTP)(CardShow);