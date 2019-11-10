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

                            <div className="index-header-container">

                                <section className="index-header sort-toolbar">

                                    <div className="sort-toolbar-results-count">{`${this.props.cards.length} results in Magic: the Gathering`}</div>

                                    <div className="sort-toolbar-option">

                                        <label className="sort-toolbar-label">Sort Products By:</label>
                                            <select className="sort-toolbar-select-form-control">
                                                <option value="Sales DESC">Best Selling</option>
                                                <option value="Sales DESC">Relevance</option>
                                                <option value="Sales DESC">A-Z</option>
                                                <option value="Sales DESC">Price: High to Low</option>
                                                <option value="Sales DESC">Price: Low to High</option>
                                            </select>
                                    </div>

                                        <div className="sort-toolbar-option">

                                            <label className="sort-toolbar-label">Sort Prices By:</label>
                                                <select className="sort-toolbar-select-form-control">
                                                    <option value="Sales DESC">Price + Shipping</option>
                                                    <option value="Sales DESC">Just Price</option>
                                                </select>
                                        </div>
                                </section>
                            </div>
                        <div className="cataloge-content">
                        {this.props.cards.map(card => (
                            <CardIndexItem
                                card={card}
                                key={card.id}
                                id={card.name}
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
                <div className="product-filter-container">
                    <div className="product-filter-box">
                        <li className="filter-box-list-item"></li>
                        <li className="filter-box-list-item"></li>
                        <li className="filter-box-list-item"></li>
                    </div>
                </div>
                { display }
            </div>
        )
    }

}
export default CardIndex