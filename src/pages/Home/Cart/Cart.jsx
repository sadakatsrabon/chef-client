import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Cart = () => {

    // loading data from backend server'

    const [chefs, setChef] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/catagories')
            .then(res => res.json())
            .then(data => setChef(data));


    }, [])

    return (
        <div>
            <h1>ALL OF OUR CHEFS IS HERE.</h1>
            <p>PLEASE TAP ON A CARD TO KNOW ABOUT OUR CHEFS AND THE SUPER TESY RECIPES</p>
            {
                chefs.map(chef => 
                    // console.log(chef);
                    <div key={chef.id}>
                        <img src={chef.image} alt="" />
                        <h1>Name:{chef.name}</h1>
                    </div>

                )
            }
            <Link to="chef_recipes"><button className='btn btn-primary'>View Recipes</button></Link>
        </div>
    );
};

export default Cart;