import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/favicon.ico'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



const Header = () => {
    return (
        <Navbar bg="light" variant="light">
        <Container >
          <img className='image' src={logo} alt="" />
          <Navbar.Brand href="#home" className='title'>Quiz-Ace</Navbar.Brand>
          <div className='header'>
          <Link to='/' >Home</Link>
          <Link to='/Topic'>Topic</Link>
          <Link to='/Statistics'>Statistics</Link>
          <Link to='/Blog'>Blog</Link>
          <Link to='/About'>About</Link>
        </div>

          </Container>
      </Navbar>
              
    );
};

export default Header;