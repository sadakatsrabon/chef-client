import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ChefsContext } from '../../../layouts/Main';

const Cart = () => {

    // loading data from backend server with context api'

    const [chefs] = useContext(ChefsContext)
    // console.log(chefs)

    return (
        <div>
            <h1>ALL OF OUR CHEFS IS HERE.</h1>
            <p>PLEASE TAP ON A CARD TO KNOW ABOUT OUR CHEFS AND THE SUPER TESY RECIPES</p>
            {
                chefs.map(chef =>
                    // console.log(chef)
                    <div key={chef.id}>
                        <img className='w-25' src={chef.picture} alt="" />
                        <h4>{chef.name}</h4>
                        <p>Years Of Experience: {chef.years_of_experience}</p>
                        <p>Number of recipes :{chef.num_recipes}</p>
                        <h5>Likes:{chef.likes}</h5>
                    </div>

                )
            }
            <Link to="chef_recipes"><button className='btn btn-primary'>View Recipes</button></Link>
        </div>
    );
};

export default Cart;