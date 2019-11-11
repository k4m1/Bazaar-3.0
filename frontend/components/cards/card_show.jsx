import React from 'react';
import { Link } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';

const CardShow = ({ card, cardId, fetchCard }) => {
    const cards = {
        [cardId]: card
    };

    return (
        <div className="">
            <div className="">
                <Link to="/">Back to Index</Link>
            </div>
            <div className="">
                <CardDetail card={card} />
            </div>
        </div>
    );
};

export default CardShow;