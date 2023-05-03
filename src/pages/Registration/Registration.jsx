import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import app from '../../firebase.config';

const Registration = () => {
const auth = getAuth(app);

    // const [email, setEmail] = useState([]);
    const [error, setError] = useState([]);

    const handleSignup = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        // creat user in firebase

        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const loggedUser =result.user;
            console.log(loggedUser)
        })
        .catch(error => {
            console.error(error)
        })

        if(password.length <6 ) {
            setError('password must be more than 6 characters')
            return;
        }

    }
    return (
        <div className='mt-5'>
            <form className='d-flex flex-column p-5' onSubmit={handleSignup}>
                <input className='' type="text" name="Name" placeholder='Your name' />
                <input className='' type="email" name="email" id="" placeholder='Input A Valid Email' />
                <p>{error}</p>
                <input className='' type="password" name="password" id="" placeholder='Set new password' />
                <button>Signup</button>
                <Link to="/login"><p>Already Have An Account?</p></Link>
            </form>
        </div>
    );
};

export default Registration;