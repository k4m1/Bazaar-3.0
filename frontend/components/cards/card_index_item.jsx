import React from 'react';
import { withRouter } from 'react-router-dom';

class IndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const cardId = this.props.card.id;
        this.props.history.push(`/cards/${cardId}`);
    }

    render() {
        const { name, printed_text, image_uris  } = this.props.card;
        return (
            <div
                className="card-index-item"
                onClick={this.handleClick}
            >
                <div className="index-item-info">
                    <span className="index-item-category">Description:</span>
                    <span className="index-item-copy">{printed_text}</span>
                </div>
                <img src={Object.values(image_uris).first()} />
            </div>
        );
    }
}

export default withRouter(IndexItem);
