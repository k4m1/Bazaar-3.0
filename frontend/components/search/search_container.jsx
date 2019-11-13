import { connect } from 'react-redux';
import { updateFilter } from '../../actions/filter_actions';
import Search from './search';
import { asArray } from '../../reducers/cards_selector'
import { randomCards } from '../../reducers/cards_selector'


const mSTP = state => ({
    cards: asArray(state.entities),
    randomCards: randomCards(state),
});

const mDTP = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(mSTP, mDTP)(Search);
