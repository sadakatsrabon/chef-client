import React, { createContext, useEffect, useState } from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

export const ChefsContext = createContext('recipes');

const Main = () => {
    const [chefs, setChef] = useState([]);

    useEffect(() => {
        fetch('https://food-loader-sadakatsrabon.vercel.app/alldata')
            .then(res => res.json())
            .then(data => setChef(data));


    }, [])
    return (
        <div>
            <ChefsContext.Provider value={[chefs]}>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </ChefsContext.Provider>
        </div>
    );
};

export default Main;