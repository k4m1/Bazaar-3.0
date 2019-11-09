import React from 'react';
import CardIndexItem from './card_index_item';
import { fetchCards } from '../../actions/card_actions';



class CardIndex extends React.Component {

    componentDidMount() {
        this.props.fetchCards()
        console.log(this.props.cards)

    }

    constructor(props) {
        super(props)

    }

    render() {

        let display; 
            if ( this.props.cards ) {
                display = (
                    <div className="cataloge-wrapper">
                        <h1>CARDS:</h1>
                        <div className="cataloge-content">
                        {this.props.cards.map(card => (
                            <CardIndexItem
                                card={card}
                                key={card.id}
                            />
                        ))}
                        </div>
                    </div>
                )
            } else {
                display = null
            }

        return (
            <div>
                { display }
            </div>
        )
    }

}
export default CardIndex