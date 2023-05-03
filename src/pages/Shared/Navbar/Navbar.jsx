// import React from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import moment from 'moment';

// const NavigationBar = () => {
//   return (
//     <Navbar bg="light" expand="lg" fixed="top">
//       <Container>
//         <Navbar.Brand as={Link} to="/">
//           <img
//             src="../../../../public/GFGFGFG.jpg"
//             width="30"
//             height="30"
//             className="d-inline-block align-top"
//             alt="Logo"
//           />
//         </Navbar.Brand>


//         <p className=''>{moment().format('LT')}</p>


//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ml-auto">
//             <Nav.Link as={Link} to="blog">Blog</Nav.Link>
//             <Nav.Link as={Link} to="login">Login</Nav.Link>
//             <Nav.Link as={Link} to="registration">Registration</Nav.Link>
//             <Nav.Link as={Link} to="contact">Contact_Us</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavigationBar;

import React from 'react';
import { Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Navbar = () => {
    return (
        <div className='container'>
            <Stack direction="horizontal" gap={3}>
                <div className="">
                    <Link to="/"><img className='w-25 h-25' src="../../../../public/GFGFGFG.jpg" alt="" /></Link>
                </div>
                <div> 
                    <p>{moment().format('LT')}</p>
                </div>
                <div className="d-flex">
                    <Link className='text-decoration-none me-4 fs-5' to="blog">Blog</Link>
                    <Link className='text-decoration-none me-4 fs-5' to="login">Login</Link>
                    <Link className='text-decoration-none me-4 fs-5' to="registration">Registration</Link>
                    <Link className='text-decoration-none me-4 fs-5' to="contact">Contact_Us</Link>
                </div>
            </Stack>
            
        </div>
    );
};

export default Navbar;