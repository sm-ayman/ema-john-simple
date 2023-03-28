import React, { useContext } from 'react';
import './header.css'
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <nav className='navbar'>
            <img src={logo} alt="" />
            <div>
                <Link to='/'>Shop</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/inventory'>Inventory</Link>
                <Link to='/about'>About</Link>
                {
                    user?.uid?
                        <button className='btn-logout' onClick={logOut}>Log out</button>
                        :
                        <>
                            <Link to='/login'>Log in</Link>
                            <Link to='/signup'>Sign Up</Link>
                        </>
                }
                <span className='user-email'>{user?.email}</span>
            </div>
        </nav>
    );
};

export default Header;