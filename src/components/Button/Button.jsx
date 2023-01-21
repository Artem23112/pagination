import React from 'react';
import styles from './Button.css';

const Button = ({type, text, view, href}) => {
    if (type === 'link') {
        return (
            <a className={['link', view].join(' ')} href={href} target='_blank'>{text}</a>
        )
    }
    
    return (
        <button className={['bth', view].join(' ')} type={type}>{text}</button>
    )
}

export default Button;