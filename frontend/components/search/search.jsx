import React from 'react';

import FilterForm from './filter_form';
import CardIndexContainer from '../cards/card_index_container';
import { updateFilter } from '../../actions/filter_actions'
import { randomCards } from '../../reducers/cards_selector'

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
// import parse from 'autosuggest-highlight/parse';
// import match from 'autosuggest-highlight/match';

const Search = ({ cards }) => (

    <div className="search-wrapper">

    <Autocomplete
        className=""

        freeSolo
        id=""
        disableClearable
        options={cards.map(card => card.name)}
        renderInput={params => (
            <TextField
                {...params}
                className="search-input"
                label="Explore the multiverse"
                margin="normal"
                variant="outlined"
                fullWidth
                InputProps={{ ...params.InputProps, type: 'search' }}
            />
        )}
    />

        {/* <CardIndexContainer cards={cards} randomCards={randomCards} /> */}

    </div>

);

export default Search;





