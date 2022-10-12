import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/favicon.ico'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';





const Header = () => {
 
    return (

      <>  
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">  
        <Container>  
        <img className='image' src={logo} alt="" />
          <Navbar.Brand href="#home" className='ms-2 name'>Quiz-Ace</Navbar.Brand>  
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />  
          <Navbar.Collapse id="responsive-navbar-nav">  
             
            <Nav className='ms-5 ps-5'>  
            <Link className='header' to='/' >Home</Link>
            <Link className='header'to='/Topic'>Topic</Link>
            <Link className='header'to='/Statistics'>Statistics</Link>
            <Link className='header'to='/Blog'>Blog</Link>
            <Link className='header' to='/About'>About us</Link>
            </Nav>  

          </Navbar.Collapse>  
        </Container>  
      </Navbar>  
    </>  

    

              
    );
};

export default Header;