import React, { createContext } from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

export const RingContext = createContext('recipes');

const Main = () => {
    return (
        <div>
            <RingContext.Provider value='chefs recipes'>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </RingContext.Provider>
        </div>
    );
};

export default Main;