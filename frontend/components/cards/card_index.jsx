import React from 'react';
import ReactDOM from 'react-dom';
import CardIndexItem from './card_index_item';
import { fetchCards } from '../../actions/card_actions';
import {Link} from 'react-router-dom';

import Slider from "react-slick";
import Particles from 'react-particles-js';
import LazyLoad from 'react-lazyload';

class CardIndex extends React.Component {

    componentDidMount() {
        this.props.fetchCards()
        window.scrollTo(0, 0)
    }

    constructor(props) {
        super(props)

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


        let display; 
            let carousel;

        // debugger

            if ( this.props.cards[0] ) {

                // debugger
                // if (this.props.randomCards[0]) {

                //     carousel = (
                //         <Slider {...settingsCarousel} className="card-carousel">

                //             {this.props.randomCards.map(card =>
                //                 <Link to={`/cards/${card.id}`}>
                //                     <img key={card.id} src={Object.values(JSON.parse(card.image_uris))} />
                //                 </Link>)}


                //         </Slider>
                //     )

                // } else {
                //     carousel = null
                // }


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
                    "retina_detect": true
                }} />

        <div className='banner-container'>
            <div className='banner-content'>
                <div className='banner-overlay'>
                    <div className='banner-subhead'>Magic: the Gathering</div>
                    <div className='banner-title'>Throne of Eldraine</div>
                    <button className='banner-button hvr-fade'>Explore Now</button>
                </div>
                    <img className="banner-image" src="https://tcgplayer-marketing.s3.amazonaws.com/web/release/2019-10/magic_throne_of_eldraine_hero_1920x590_10042019.jpg" alt=""/>
            </div>
        </div>

        <div className="cataloge-wrapper">
            
                <div className="index-header-container">

                    <section className="index-header sort-toolbar">

                        <div className="sort-toolbar-results-count">{`${this.props.cards.length} results in Magic: the Gathering`}</div>

                        <div className="sort-toolbar-option">

                            <label className="sort-toolbar-label">Sort Products By:</label>
                                <select className="sort-toolbar-select-form-control hvr-underline-from-left">

                                    {/* remember to update these actions for your fitlers */}
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

                <div className='card-carousel'>

                    <h1 className='carousel-title'>Featured Cards</h1>

                    <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

                    <Slider {...settingsCarousel} className="card-carousel">

                {this.props.randomCards.map(card =>
                    <Link to={`/cards/${card.id}`}>
                        <img key={card.id} src={card.image_uris} />
                    </Link>)}


            </Slider>
        </div>


                        
        <div className="list">
            
                
                <div className="cataloge-content">
                    {this.props.cards.map(card => (
                <div>
                    <LazyLoad height={300} offset={200} once={true}>

                        <CardIndexItem
                            card={card}
                            key={card.id}
                            value={card.name}
                        />
                    </LazyLoad>
                </div>

                    ))}
                </div> 

            

        </div>
    );
  };
                          
                          
                          
                          
                          
                          
                    </div>
                </div>
                )
            } else {
                display = null
            }

        return (
            <div>
                {/* <div className="product-filter-container">
                    <div className="product-filter-box">
                        <li className="filter-box-list-item"></li>
                        <li className="filter-box-list-item"></li>
                        <li className="filter-box-list-item"></li>
                    </div>
                </div> */}
                { display }
            </div>
        )
    }

}

export default CardIndex