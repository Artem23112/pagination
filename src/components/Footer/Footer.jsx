import React from 'react';
import styles from './Footer.css';

const Footer = () => {

    return (
        <div className='footer'>
            @Copyright все права защищены {new Date().getFullYear()} год.
        </div>
    )
}

export default Footer;