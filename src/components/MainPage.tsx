import React, {useState} from 'react';
import {FindBeer} from "./FindBeer";
import './MainPage.css'
import {BeerMini} from "../App";
import Pagination from "./Pagination";

interface MainPageProps {
    setPage: (num: number) => void
    beers: Array<BeerMini>
    setBeer: (num: BeerMini) => void
    beerInput: string
    setBeerInput: (num: string) => void
    numPage: number
    setNumPage: (num: number) => void
}

const MainPage = ({setPage, beers, setBeer, beerInput, setBeerInput, setNumPage, numPage}: MainPageProps) => {

    return (
        <div className='MainPage'>
            <FindBeer data={beerInput} setData={setBeerInput}></FindBeer>
            <div className='BeersContainer'>
                {beers.slice(numPage * 8, (numPage + 1) * 8).map((el, index) => (
                    <div key={index} className='BeerMini'
                    onClick={() => {
                        setPage(1)
                        setBeer(el)
                    }}>
                        <img src={el.image} alt=""/>
                        <div>
                            <div style={{marginBottom: '10px'}}><b>{el.name}</b></div>
                            <div style={{textAlign: 'start'}}>{el.description.length <= 140 ? el.description : el.description.slice(0, 140) + '...'}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <Pagination numPage={numPage} setNumPage={setNumPage} beers={beers}></Pagination>
            </div>
        </div>
    );
};

export default MainPage;