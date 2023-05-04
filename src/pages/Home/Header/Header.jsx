import React from 'react';
import { Carousel } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Carousel className='w-100 h-50'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../../../../public/food_image/c2c2901c2a6de350bacb94c983170313--jollof-rice-african-recipes.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>OUR BANAGALI RICE</h3>
                        <p>It Is Truly Super Testy And More Then Testy. Power Ob BD cheaf</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../../../../public/food_image/cb8210ff907e5e1a42f6115d7f5ee60a.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>CHINGRI VUNA</h3>
                        <p>It Is Truly Super Testy And More Then Testy. Power Ob BD cheaf</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../../../../public/food_image/maxresdefault.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>DIM TOMATO</h3>
                        <p>
                            It Is Truly Super Testy And More Then Testy. Power Ob BD cheaf
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Header;