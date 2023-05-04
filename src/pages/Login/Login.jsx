import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../Firebase/firebase.config';
import { Button, Col, Form, Row } from 'react-bootstrap';

const Login = () => {
  const [user, setUser] = useState([]);
  const auth = getAuth(app);
  const [error, setError] = useState([]);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignin = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user)
      })
      .catch(error => {
        setError(error.message);
      })
  }

  const handleGithubSignin = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const loginuser = result.user;
        console.log(loginuser)
        setUser(loginuser);
      })
      .catch(error => {
        setError(error.message);
      })
  }

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
      })
      .catch(error => {
        console.log(error.message);
        return;
      })
    setError('');
    if (password.length < 6) {
      setError('Password must be more than 6 characters');
      return;
    }
  }

  return (
    <Row className='justify-content-center mt-5 pt-5'>
      <Col md={6}>
        <h1 className='text-center'>Login</h1>
        <Form className='mt-4' onSubmit={handleLogin}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' name='email' placeholder='Enter email' required />
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' name='password' placeholder='Password' required />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Login
          </Button>
          <Link to='/registration' className='d-block mt-3'>
            New To Food Loader?
          </Link>
          <p className='text-danger mt-3'>{error}</p>
        </Form>
        <div className='mt-3'>
          <Button variant='outline-primary' onClick={handleGoogleSignin}>
            Google Login
          </Button>
          <Button variant='outline-dark ms-2' onClick={handleGithubSignin}>
            Github Login
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
