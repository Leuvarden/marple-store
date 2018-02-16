import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "./header.css";

class Banner extends Component {
    constructor() {
        super();
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            bannerSlides: [{
                "id": "",
                "title": "",
                "summary": "",
                "imageName": "",
                "alt": "",
                "buttonText": ""
            }],
            carouselControllers: {
                index: 0,
                direction: null
            }
        };
    }

    componentDidMount() {
        fetch("/promo")
            .then(res => res.json())
            .then(promoData => this.setState({
                bannerSlides: promoData.bannerSlides
            }));
    }

    render() {
        const slides = this.state.bannerSlides;
        const { index, direction } = this.state.carouselControllers;

        return (
            <section className="banner">
                <Carousel activeIndex={index} direction={direction} onSelect={this.handleSelect} className="banner_carousel">
                    {slides.map((item, index) => 
                        <Carousel.Item key={index} className="banner_slide">
                            <img src={item.imageName && `images/${item.imageName}.jpg`} alt={item.alt}></img>
                            <Carousel.Caption>
                                <h2 className="text-uppercase">{item.title}</h2>
                                <p className="text-primary">{item.summary}</p>
                                <p>
                                    <button className="btn text-uppercase">{item.buttonText}</button>
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )}
                </Carousel>
            </section>
        );
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            carouselControllers: {
                index: selectedIndex,
                direction: e.direction
            }
        });
    }
}

export default Banner;
