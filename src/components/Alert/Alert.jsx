import React from 'react';
import styles from './Alert.css';

const Alert = ({view, text, textLink}) => {
    return (
        <div className={['alert', view].join(' ')}>
            <span className=''>{text}</span>
            <a className='alert-link' href='#'>{textLink}</a>
        </div>
    )
}

export default Alert;