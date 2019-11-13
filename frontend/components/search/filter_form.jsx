import React from 'react';
import { updateFilter } from '../../actions/filter_actions'

const handleChange = (filter, updateFilter) => e => (
    updateFilter(filter, e.currentTarget.value)
);

const FilterForm = ({ cards, updateFilter }) => (
    <div>

        <input
            type="text"
            value={cards}
            onChange={handleChange(updateFilter)}
        />

    </div>
);

export default FilterForm;
