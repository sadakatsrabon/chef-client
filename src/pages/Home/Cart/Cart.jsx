import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ChefsContext } from '../../../layouts/Main';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Cart = () => {

    // loading data from backend server with context api'

    const [chefs] = useContext(ChefsContext)
    // console.log(chefs)

    return (
        <div>
            <h1>ALL OF OUR CHEFS IS HERE.</h1>
            <p>PLEASE TAP ON A CARD TO KNOW ABOUT OUR CHEFS AND THE SUPER TESY RECIPES</p>

            <Row>
                {chefs.map(chef =>
                    <Col key={chef.id} className="m-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={chef.picture} />
                            <Card.Body>
                                <Card.Title>{chef.name}</Card.Title>
                                <Card.Text>
                                    Years Of Experience: {chef.years_of_experience}
                                    <br />
                                    Number of recipes: {chef.num_recipes}
                                    <br />
                                    Likes: {chef.likes}
                                </Card.Text>
                                <Link to="chef_recipes"><Button variant="primary">View Recipes</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>

        </div>
    );
};

export default Cart;

