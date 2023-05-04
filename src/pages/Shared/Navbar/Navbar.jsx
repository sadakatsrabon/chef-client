
// import React from 'react';
// import { Link } from 'react-router-dom';
// import moment from 'moment';

// const Navbar = () => {
//   return (
//     <nav className="container navbar navbar-expand-lg navbar-light bg-light">

//       <Link className="navbar-brand ms-5" to="/"> <img width={100} src="../../../../public/GFGFGFG.jpg" alt="" /> </Link>
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <p className=' p-5'>{moment().format('LT')}</p>

//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav">
//           <li className="nav-item active">
//             <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="registration">Registration</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="login">Login</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="blog">Blog</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </div>
//     </nav>

//   );
// };

// export default Navbar;

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';

const NavigationBar = () => {
  return (
    <Navbar className='container' bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="../../../../public/GFGFGFG.jpg"
            width="70"
            height="40"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
         <p>--------{moment().format('LT')}-----------</p>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/registration">Registration</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;