import React from 'react';
import styles from './Card.css';

const Card = ({ imgSrc, titleText, text, linkText, linkHref }) => {

    return (
        <div className='card'>
            <img className='card__img' alt='' src={imgSrc} />
            <div className='card-info'>
                <h2 className='card-info__title'>{titleText}</h2>
                <p className='card-info__text'>{text}</p>
                <a href={linkHref} className='card-info__link'>{linkText}</a>
            </div>
        </div>
    )
}

export default Card;