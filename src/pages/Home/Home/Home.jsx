import React from 'react';
import { Stack, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import Cart from '../Cart/Cart';


const Home = () => {
    // const recipes = useLoaderData();
    // console.log(recipes);
    return (
        <div>
            <Stack gap={3} className='container'>
                <div className="bg-light border">
                    <Header></Header>
                </div>
                <div className="mt-5"><Cart></Cart></div>

                {/* about us section  */}
                <div className='container d-flex flex-column flex-md-row'>
                    <div className='col-md-6'>
                        <h1 className='text-center mb-4'>About Us</h1>

                        <Row>
                            <Col md={6}>
                                <h2>Our Services:</h2>
                                <p>We provide the best chefs in Bangladesh, and we deliver food to your door. If you have any problems with our chefs, please <a href='#'>contact us</a>.</p>
                                <h2>Food Selling:</h2>
                                <p>We sell tasty food online.</p>
                            </Col>
                            <Col md={6}>
                                <h2>Is Home Delivery Available?</h2>
                                <p>Yes, you can order food made by our special chefs, and we promise delivery to you.</p>
                                <h2>Returns:</h2>
                                <p>You can return a product within 10 minutes.</p>
                            </Col>
                        </Row>
                        <h6 className='text-center mt-4'>This website is credited only to Programming Hero.</h6>
                    </div>
                    <div className='col-md-6'>
                        <img src="https://th.bing.com/th/id/R.490b6e4b05463460ff7063a9a330f4ec?rik=hxyMLKQN8WYv0w&riu=http%3a%2f%2fgetdrawings.com%2fimages%2ffood-drawing-images-16.jpg&ehk=c4UpqPnP9trmsVNMSyWNP7ZoUJd3nb1WlAXlSTdyIy8%3d&risl=&pid=ImgRaw&r=0" className='img-fluid rounded mb-3 h-75 mt-5 pt-5'
                            alt="" />
                    </div>
                </div>
            </Stack >
        </div >
    );
};

export default Home;
