import React from 'react';
import './header.css'
import logo from '../../images/logo.svg';

const Header = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="" />
            <div>
                <a href='/shop'>Shop</a>
                <a href='/orders'>Orders</a>
                <a href='/inventory'>Inventory</a>
                <a href='/about'>About</a>
            </div>
        </nav>
    );
};

export default Header;