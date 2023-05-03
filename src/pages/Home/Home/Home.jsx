import React from 'react';
import { Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import Cart from '../Cart/Cart';


const Home = () => {
    return (
        <div>
            <Stack gap={3} className='container'>
                <div className="bg-light border">
                    <Header></Header>
                    <Cart></Cart>
                </div>
                <div className="bg-light border">Second item</div>
                <div className="bg-light border">Third item</div>
            </Stack>
        </div>
    );
};

export default Home;