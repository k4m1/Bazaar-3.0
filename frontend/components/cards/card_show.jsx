import React from 'react';
import { Link } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';

class CardShow extends React.Component {

    componentDidMount() {
        this.props.fetchCard(this.props.cardId)
    }

    constructor(props) {
        super(props)
        // debugger
    }

    render() {

        let display;
        let image = Object.values(JSON.parse(this.props.card.image_uris))

             if (this.props.card === undefined) {
                 display = null
             } else {
                 display = (


                     <div className="product-details-container">
                         <div className="container">

                             <div className="product-details-info">

                                 <div className='product-details-image'>
                                     <img src={image} alt=""/>
                                 </div>

                                 <div className='product-details-content'>

                                     <div className='product-details-header'>

                                         <h1 className="product-details-content-name">{this.props.card.name}</h1>

                                         <div className="product-details-content-set">
                                             <a href="">{this.props.card.set_name}</a>
                                         </div>

                                     </div>

                                     <hr />

                                     <table className="product-details-table">
                                         <tr className="product-details-table-description">
                                             <td className="product-details-table-description-term">Rarity:</td>
                                             <td className="product-details-table-description-value">{this.props.card.rarity}</td>
                                         </tr>
                                         <tr>
                                             <td className="product-details-table-description-term">Card Type:</td>
                                             <td className="product-details-table-description-value">{this.props.card.type_line}</td>
                                         </tr> 
                                         <tr>
                                             <td className="product-details-table-description-term">Description:</td>
                                             <td className="product-details-table-description-value">{this.props.card.oracle_text}</td>
                                        </tr>
                                    </table>

                                     <div className='featured listing'>

                                     </div>

                                 </div>

                             </div>

                         </div>

                     </div>

                 )
             }

        return (
            <div>
                {display}
            </div>
        )

    };

}

export default CardShow