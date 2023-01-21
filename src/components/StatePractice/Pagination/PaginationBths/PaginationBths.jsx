import React from 'react';
import PaginationButton from '../PaginationButton/PaginationButton';
import s from './PaginationBths.css'

const PaginationBths = ({ limitNumOfBth, countPages, currentPage, setCurrentPageNum }) => {
    const bths = [];

    // 1 2 3 4 5
    if (countPages <= limitNumOfBth) {
        for (let i = 1; i <= limitNumOfBth; i++) {
            bths.push(
                <PaginationButton
                    setCurrentPageNum={setCurrentPageNum}
                    text={i}
                    key={i}
                    current={i === currentPage}
                />)
        }
    }

    // 1 ... 45 46 47 48 49 ... 100
    else if (currentPage > 4 && currentPage < countPages - 3) {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
            bths.push(
                <PaginationButton
                    setCurrentPageNum={setCurrentPageNum}
                    text={i}
                    key={i}
                    current={i === currentPage}
                />)
        }

        bths.unshift(<PaginationButton text={1} setCurrentPageNum={setCurrentPageNum} key={1} />, <span>...</span>);
        bths.push(<span>...</span>, <PaginationButton text={countPages} setCurrentPageNum={setCurrentPageNum} key={countPages} />)
    }

    // 1 2 3 4 5 ... 100
    else if (currentPage <= 4) {
        for (let i = 1; i <= limitNumOfBth; i++) {
            bths.push(
                <PaginationButton
                    setCurrentPageNum={setCurrentPageNum}
                    text={i}
                    key={i}
                    current={i === currentPage}
                />)
        }

        bths.push(<span>...</span>, <PaginationButton text={countPages} setCurrentPageNum={setCurrentPageNum} key={countPages} />)
    }
    // 1 ... 96 97 98 99 100
    else if (currentPage >= countPages - 4) {
        for (let i = countPages - 4; i <= countPages; i++) {
            bths.push(
                <PaginationButton
                    setCurrentPageNum={setCurrentPageNum}
                    text={i}
                    key={i}
                    current={i === currentPage}
                />)
        }

        bths.unshift(<PaginationButton text={1} setCurrentPageNum={setCurrentPageNum} key={1} />, <span>...</span>)
    }

    return (
        <div className='bths-wrapper'>
            {bths}
        </div>
    )
}

export default PaginationBths;