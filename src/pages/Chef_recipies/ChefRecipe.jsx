import React, { useEffect, useState } from 'react';

const ChefRecipe = () => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('https://food-loader-sadakatsrabon.vercel.app/alldata')
            .then(res => res.json())
            .then(data => setDetails(data));
        console.log(details);

    }, [])
    return (
        <div className='mt-5 mp-5 container'>
            <div className='mt-5'>
                <h1>Details Is Ready Here.</h1>
                <p>Please Read all the data carafully to know abou our chef and recipes.</p>
            </div>
            <div>
                {details.map(detail =>{
                    console.log(detail);
                    <h2>{detail.bio_description}</h2>
                })}
            </div>
        </div>
    );
};

export default ChefRecipe;