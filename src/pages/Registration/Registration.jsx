import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../Firebase/firebase.config';
import { Form, Button } from 'react-bootstrap';

const Registration = () => {
  const auth = getAuth(app);

  const [error, setError] = useState('');

  const handleSignup = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setError('');

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errors = error.message;
        setError(errors);
      });
  };

  return (
    <div className="mt-5">
      <Form className="p-5" onSubmit={handleSignup}>
        <h2 className="mb-4">Create an account</h2>
        <Form.Group controlId="formName">
          <Form.Label>Your name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" required />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter a valid email" required />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter a password" required />
        </Form.Group>

        <Form.Group controlId="formImage">
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="url" placeholder="Enter a URL for your profile picture" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Signup
        </Button>

        <p className="mt-3">
          Already have an account? <Link to="/login">Log in here</Link>
        </p>

        {error && <p className="text-danger">{error}</p>}
      </Form>
    </div>
  );
};

export default Registration;
