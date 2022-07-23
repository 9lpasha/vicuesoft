import React from 'react';
import {BeerMini} from "../App";
import './DetailPage.css'

interface DetailPageProps {
    beer: BeerMini | null
    setPage: (num: number) => void
}

const DetailPage = ({beer, setPage}: DetailPageProps) => {
    return (
        <div className='BeerPage'>
            <div onClick={() => {setPage(0)}} className='goBack'><b>Вернуться на главную страницу</b></div>
            <div className='beerNameTagline' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div className='beerName'>{beer?.name}</div>
                <div className='beerTagline'>{beer?.tagline}</div>
            </div>
            <div style={{display: 'flex'}}>
                <div className='beerNameImg'>
                    <img src={beer?.image} alt=""/>
                </div>
                <div className='beerDescCont'>
                    <div style={{fontSize: '20px', marginBottom: '15px', fontWeight: '600'}}>Description</div>
                    <div className='beerDescription'>{beer?.description}</div>
                    <div style={{fontSize: '20px', marginBottom: '15px'}}>
                        <div className='beerAbv'><span style={{fontWeight: '600'}}>Abv</span> - {beer?.abv}</div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div style={{fontSize: '20px', fontWeight: '600', marginRight: '50px'}}>Food pairing</div>
                        <div style={{fontSize: '16px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                            {beer?.food_pairing?.map((el) => <div className='beerFoodPairing'>{el}</div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;