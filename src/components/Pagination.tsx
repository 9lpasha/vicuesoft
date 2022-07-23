import React from 'react';
import './Pagination.css'
import {BeerMini} from "../App";

interface PaginationProps {
    beers: Array<BeerMini>
    numPage: number
    setNumPage: (num: number) => void
}

const Pagination = ({beers, numPage, setNumPage}: PaginationProps) => {

    return (
        <div className="Pagination">
            {
                beers.slice(0, Math.ceil(beers.length/8)).map((el, i) => (
                    <div key={i} className={numPage === i ? "PaginationItemActive" : "PaginationItem"}
                         onClick={() => {
                             setNumPage(i)
                         }}>{i + 1}</div>
                ))
            }
        </div>
    );
};

export default Pagination;