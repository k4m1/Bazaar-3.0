import React from 'react';
// import CardIndexItem from './card_index_item';

const CardIndex = ({cards}) => (
    <div>
        <h1>CARDS:</h1>
        {cards.map(card => (
            <CardIndexItem
            card={card}
            key={card.id}
            />
        ))}
    </div>
);

export default CardIndex