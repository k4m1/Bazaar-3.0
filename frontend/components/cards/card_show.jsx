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

             if (this.props.card === undefined) {
                 display = null
             } else {
                 display = (


                     <div className="product-details-container">
                         <div className="container">

                             <div className="product-details-info">

                                 <div className='product-details-image'>

                                 </div>

                                 <div className='product-details-content'>

                                     <div className='product-details-header'>

                                         <h1 className="product-details-content-name">{this.props.card.name}</h1>

                                         <div className="product-details-content-set">
                                             <a href="">{this.props.set_name}</a>
                                         </div>

                                     </div>

                                     <hr />

                                     {/* <table className='product-details-table'>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <dl className='product-details-desciption'>
                                        <dt className='product-details-description-term'>Rarity, #:</dt>
                                        <dd className='product-details-description-value'>R, 69</dd>

                                        <dt className='product-details-description-term'>Card Type:</dt>
                                        <dd className='product-details-description-value'>Legendary creature</dd>
                                    </dl>
                                </tr>
                            </tbody>
                        </table> */}

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