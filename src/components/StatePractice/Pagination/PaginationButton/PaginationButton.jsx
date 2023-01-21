import React from 'react';
import s from './PaginationButton.css';

const PaginationButton = ({ text, setCurrentPageNum, current }) => {

    return (
        <button className={['pagination-bth', current ? 'active' : ''].join(' ')} onClick={() => { setCurrentPageNum(text) }}>
            {text}
        </button>
    )
}

export default PaginationButton;