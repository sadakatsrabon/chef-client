import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const { error, status } = useRouteError();
    console.log(error.message);

    return (
        <div className='container'>
            <div>
            <img className='' src={"https://th.bing.com/th/id/OIP.fWdQXZCgnfStjhzbRhKOYQHaGn?pid=ImgDet&w=717&h=640&rs=1"} alt="Image" />
            </div>
            <div className=''>
                <h3>Sorry Man!! Could Not Found The Page Thats You requested.</h3>
                <h1 className=''>{status || 404}</h1>
                <h2>Error:{error.message}</h2>
            </div>
            <div className=''>
                <Link to="/"><button className=''>Return Home</button></Link>
            </div>
        </div>
    );
};

export default Error;