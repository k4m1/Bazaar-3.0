import React from 'react';
import { Link } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import CardIndexItem from './card_index_item';
import Slider from "react-slick";
import Particles from 'react-particles-js';



class CardShow extends React.Component {

    componentDidMount() {
        // debugger
        this.props.fetchCard(this.props.match.params.cardId)
            .then(this.setState({['test']: "work dammit"}))
        window.scrollTo(0, 0)

    }

    constructor(props) {
        super(props)
        // debugger
        // debugger
        test: ""
    }


    render() {

    const settingsCarousel = {
        dots: true,
        infinite: true,
        speed: 225,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        draggable: true,
        pauseOnHover: true,
        swipeToSlide: true,
        centerMode: true

    };

    console.log('banana uno')

    let display;
    let carousel;
    

            if (this.props.card === undefined) {
                display = null
                console.log('banana')

                // if (this.props.randomCards[0]) {
                // carousel = (
                //     <Slider {...settingsCarousel} className="">

                //         {this.props.randomCards.map(card =>
                //             <Link to={`/cards/${card.id}`}>
                //                 <img src={Object.values(JSON.parse(card.image_uris))} />
                //             </Link>)}
                //     </Slider>
                //     )
                // }

            

            } else {

                
                display = (

            <div className="workPlz">

                        <Particles
                            className="canvas-tings"
                            params={{
                                "particles": {
                                    "number": {
                                        "value": 125,
                                        "density": {
                                            "enable": true,
                                            "value_area": 800
                                        }
                                    },
                                    "line_linked": {
                                        "enable": false
                                    },
                                    "move": {
                                        "speed": 2,
                                        "out_mode": "out"
                                    },
                                    "shape": {
                                        "type": [
                                            "images",
                                            "circle"
                                        ],
                                        "images": [
                                            {
                                                "src": "blueMana.png",
                                                "height": 20,
                                                "width": 20
                                            },
                                            {
                                                "src": "redMana.png",
                                                "height": 20,
                                                "width": 20
                                            },
                                            {
                                                "src": "blackMana.png",
                                                "height": 20,
                                                "width": 20
                                            },
                                            {
                                                "src": "whiteMana.png",
                                                "height": 20,
                                                "width": 20
                                            },
                                            {
                                                "src": "greenMana.png",
                                                "height": 20,
                                                "width": 20
                                            }
                                        ]
                                    },

                                    "size": {
                                        "value": 30,
                                        "random": false,
                                        "anim": {
                                            "enable": true,
                                            "speed": 6,
                                            "size_min": 10,
                                            "sync": false
                                        }
                                    }
                                },
                                "retina_detect": false
                            }} />


                    <div className="product-details-container">
                        <div className="container">

                            <div className="product-details-info">

                                <div className='product-details-image'>
                                        <img src={Object.values(JSON.parse(this.props.card.image_uris))} className="product-details-image-picture" />
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
                                        <tbody>
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

                                    <tr>
                                        <td className="product-details-table-description-term">Flavor:</td>
                                        <td className="product-details-table-description-value">{this.props.card.flavor_text}</td>
                                    </tr>
                                    </tbody>

                                </table>

                                    <hr />

                                    <div className='featured listing'>

                                    </div>

                                    
                                </div>


                            </div>

                        </div>

                            {/* <div className='card-carousel'>

                                <h1 className='carousel-title'>Featured Cards</h1>

                                <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

                                <Slider {...settingsCarousel} className="card-carousel">

                                    {this.props.randomCards.map(cardCar =>
                                        <Link to={`/cards/${cardCar.id}`}>
                                            <img key={cardCar.id} src={Object.values(JSON.parse(cardCar.image_uris))} />
                                        </Link>)}


                                </Slider>

                            </div> */}


                    </div>

                {/* <div className="price-guide">
                    <div className="price-guide-description">
                        <img src="logo_PriceGuide.png" />

                        <span>
                            <strong>Want to learn how to become a pricing pro?</strong>
                            Learn how we price cards <a href="">here</a>
                        </span>
                        
                    </div>
                </div> */}

            </div>

                )
            }

    return (
        <div className="">
            {display}
        </div>
    )

};

}

export default CardShow