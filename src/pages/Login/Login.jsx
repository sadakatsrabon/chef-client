import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../Firebase/firebase.config';

const Login = () => {
    // const [email, setEmail] = useState([]);
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
        // console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
            .catch(error => {
                console.log(error.message);
                return;
            })

        setError('')
        if (password.length < 6) {
            setError('password must be more than 6 characters')
            return;
        }

    }
    return (
        <div className='container mt-5'>
            <form className='d-flex flex-column p-5' onSubmit={handleLogin}>
                <input className='' type="email" name="email" id="" placeholder='Valid Email' />
                <input className='' type="password" name="password" id="" placeholder='Password' />
                <button>Login</button>
                <Link to="/registration"><p>New To Food Loader?</p></Link>
                <p>{error}</p>
            </form>
            <div>
                <button onClick={handleGoogleSignin}>Google Login</button>
                <button onClick={handleGithubSignin}>Github Login</button>
            </div>
        </div>
    );
};

export default Login;