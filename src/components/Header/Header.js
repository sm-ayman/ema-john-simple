import React from 'react';
import './header.css'
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="" />
            <div>
                <Link to='/'>Shop</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/inventory'>Inventory</Link>
                <Link to='/about'>About</Link>
            </div>
        </nav>
    );
};

export default Header;