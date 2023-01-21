import React, {useState} from 'react';
import Nav from '../Nav/Nav';
import styles from './Header.css';

const Header = () => {


    return (
        <div className='header'>
            <div className='container header-container'>
                <a className='logo-link' href='#'>
                    <img
                        className='logo'
                        src='https://i.pinimg.com/originals/f6/7a/3a/f67a3a261f0c952640f9c1d214d73e96.png'
                        alt='logo'
                    />
                </a>
                <Nav/>
            </div>
        </div>
    )
}

export default Header;