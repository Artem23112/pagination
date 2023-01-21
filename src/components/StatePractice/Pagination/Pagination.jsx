import React, { useState } from 'react';
import Card from './../../Card/Card';
import s from './Pagination.css';
import PaginationBths from './PaginationBths/PaginationBths';

const Pagination = ({ blocks, limit, limitNumOfBth }) => {
    const countPages = Math.ceil(blocks.length / limit);
    const [currentPageNum, setCurrentPageNum] = useState(1);

    console.log(currentPageNum)
    return (
        <div className="pagination">
            <div className="container">
                <div className="pagination-items">
                    {
                        blocks.slice((currentPageNum - 1) * limit, currentPageNum * limit)
                            .map((data, index) => {
                                return (<Card
                                    imgSrc={data.imgSrc}
                                    titleText={data.titleText}
                                    text={data.text}
                                    linkHref={data.linkHref}
                                    linkText={data.linkText}
                                    key={index}
                                />)
                            })
                    }
                </div>
                <div className="pagination-bths">
                    <PaginationBths
                        setCurrentPageNum={setCurrentPageNum}
                        limitNumOfBth={limitNumOfBth}
                        countPages={countPages}
                        currentPage={currentPageNum} />
                </div>
            </div>
        </div>
    )
}

export default Pagination;