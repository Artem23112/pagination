import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.css';

const Nav = () => {
    return (
        <div className='nav'>
            <Link className='nav-item' to='/news'>News</Link>
            <Link className='nav-item' to='/reviews'>Reviews</Link>
            <Link className='nav-item' to='/about'>About</Link>
            <Link className='nav-item' to='/home'>Home</Link>
        </div>
    )
}

export default Nav;