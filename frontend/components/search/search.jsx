import React from 'react';

import FilterForm from './filter_form';
import CardIndexContainer from '../cards/card_index_container';
import { updateFilter } from '../../actions/filter_actions'
import { randomCards } from '../../reducers/cards_selector'

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
// import parse from 'autosuggest-highlight/parse';
// import match from 'autosuggest-highlight/match';

class Search extends React.Component {

    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        let card = this.props.cards[this.props.cards.indexOf(e.currentTarget.value)]
        history.push(`/cards/${card.id}`)
    }

    render() {
        return (

            <Autocomplete
                className="search-wrapper"
                freeSolo
                id=""
                disableClearable
                options={this.props.cards.map(card => card.name)}
                renderInput={params => (
                    <TextField
                        {...params}
                        className="search-input"
                        label="Explore the multiverse"
                        margin="normal"
                        variant="outlined"
                        onSubmit={this.handleSubmit}
                        InputProps={{ ...params.InputProps, type: 'search' }}
                    />
                )}
            />
        )
    }



};

export default Search;





