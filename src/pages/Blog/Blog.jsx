import React from 'react';

const Blog = () => {
    return (
        <div className='container d-flex'>
            <h1>Answer Script</h1>
            <h2>In this page you can see some answer of PH question.</h2>
            <div>
                <h3>Questions:</h3>
                <h5>Q-1: </h5>
                <h5>Q-2: </h5>
                <h5>Q-3: </h5>
                <h5>Q-4: </h5>
                <h5>Q-5: </h5>
            </div>
            <div className='bg-secondary-subtle'>
                <h3>Answer:</h3>
                <h5>Anaswer to-1: </h5>
                <p></p>
                <hr />

                <h5>Anaswer to-2: </h5>
                <p></p>
                <hr />

                <h5>Anaswer to-3: </h5>
                <p></p>
                <hr />

                <h5>Anaswer to-4: </h5>
                <p></p>
                <hr />

                <h5>Anaswer to-5: </h5>
                <p></p>
                <hr />

            </div>
        </div>
    );
};

export default Blog;