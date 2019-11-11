import React from 'react';
import CardIndexItem from './card_index_item';
import { fetchCards } from '../../actions/card_actions';

import Slider from "react-slick";

class CardIndex extends React.Component {

    componentDidMount() {
        this.props.fetchCards()
        // console.log(this.props.cards)
        // fetch('https://api.scryfall.com/cards/random/')
        //     .then(response => response.json())
        //     .then(image1 => this.setState({ image1 }))
    }

    constructor(props) {
        super(props)

    }

    render() {

        const settingsCarousel = {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            draggable: true,
            pauseOnHover: true,
            swipeToSlide: true,
            centerMode: true

        };


        let display; 
            if ( this.props.cards ) {
                display = (

                <div>

                    <div className='banner-container'>
                        <div className='banner-content'>
                            <div className='banner-overlay'>
                                <div className='banner-subhead'>Magic: the Gathering</div>
                                <div className='banner-title'>Throne of Eldraine</div>
                                <button className='banner-button'>Explore Now</button>
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

                            <div className='card-carousel'>

                                <h1 className='carousel-title'>Featured Cards</h1>

                                <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

                                <Slider {...settingsCarousel} className="">

                                    <div>
                                        <h3>1</h3>
                                    </div>
                                    <div>
                                        <h3>2</h3>
                                    </div>
                                    <div>
                                        <h3>3</h3>
                                    </div>
                                    <div>
                                        <h3>4</h3>
                                    </div>
                                    <div>
                                        <h3>5</h3>
                                    </div>
                                    <div>
                                        <h3>6</h3>
                                    </div>
                                    <div>
                                        <h3>7</h3>
                                    </div>
                                    <div>
                                        <h3>8</h3>
                                    </div>
                                    <div>
                                        <h3>9</h3>
                                    </div>
                                    <div>
                                        <h3>10</h3>
                                    </div>
                                    <div>
                                        <h3>11</h3>
                                    </div>
                                    <div>
                                        <h3>12</h3>
                                    </div>
                                </Slider>
                        </div>

                        <div className="cataloge-content">
                        {this.props.cards.map(card => (
                            <CardIndexItem
                                card={card}
                                key={card.id}
                            />
                        ))}
                        </div>
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