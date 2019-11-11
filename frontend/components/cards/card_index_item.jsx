import React from 'react';
import { withRouter } from 'react-router-dom';

class IndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        // debugger
        const cardId = this.props.card.id;
        this.props.history.push(`/cards/${cardId}`);
    }

    render() {
        const { name, image_uris, set_name, rarity, collector_number, id } = this.props.card;
        let image = Object.values(JSON.parse(image_uris))
        return (

<div className="product-card" onClick={this.handleClick}>

    <div className="product-details">

        <div className='product-image'>   
            <img src={image} className="image" />
        </div>

        <div className="product-summary">
                <div className="product-name">{name}</div>
                <div className="product-misc">
                    <span className="product-set">{`${set_name}`}</span>
                    <span className='spinny-span'>{`Rarity: ${rarity}  •  Number: ${collector_number}`}</span>
                </div>
        </div>        

    </div>

</div>
        );
    }
}

export default withRouter(IndexItem);
