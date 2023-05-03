// import React from 'react';

// const Login = () => {

//     const handleLogin = event => {
//         event.preventDefault();

//         const form = event.target;
//         // console.log(form);
//         // const email = form.email;
//         const password = form.password;
//         console.log(password)

//     }
//     return (
//         <div className='form-container d-flex flex-column'>
//             <h2 className='form-title'>Login</h2>

//             <form onBlur={handleLogin} className='d-flex flex-column'>
//                 <input type="email" name="email" id="" placeholder='Drop Your Email Here' required />
//                 <input type="password" name="password" id="" placeholder='Type Only The correct password' required />
//             </form>

//             <button type='submit' className='btn btn-primary'>Login</button>
//             <div className=''>

//             </div>
//         </div>
//     );
// };

// export default Login;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    // const [email, setEmail] = useState([]);

    const handleLogin = event => {
        event.preventDefault();
        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        
    }
    return (
        <div className='mt-5'>
            <form className='d-flex flex-column p-5' onSubmit={handleLogin}>
                <input className='' type="email" name="email" id="" placeholder='Valid Email' />
                <input className='' type="password" name="password" id="" placeholder='Password' />
                <button>Login</button>
                <Link to="/registration"><p>New To Food Loader?</p></Link>
            </form>
        </div>
    );
};

export default Login;