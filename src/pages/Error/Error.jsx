import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const { error, status } = useRouteError();

    return (
        <div className='container d-flex flex-column align-items-center justify-content-center'>

            <div className="container">
                <div className="row">
                    <div className="col-md-12 d-flex align-items-center justify-content-center">
                        <img className='img-fluid w-25 mx-auto' src={"https://th.bing.com/th/id/OIP.fWdQXZCgnfStjhzbRhKOYQHaGn?pid=ImgDet&w=717&h=640&rs=1"} alt="Error" />
                    </div>
                </div>
            </div>
            <div className='text-center mt-3'>
                <h3>Sorry, the page you requested could not be found.</h3>
                <h1 className='display-1'>{status || 404}</h1>
                <h2>Error: {error.message}</h2>
            </div>
            <div className='mt-3'>
                <Link to="/">
                    <button className='btn btn-primary'>Return Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Error;
