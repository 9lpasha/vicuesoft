import React, {useEffect, useState} from 'react';
import './App.css';
import MainPage from "./components/MainPage";
import DetailPage from "./components/DetailPage";
import axios from "axios";

export interface BeerMini {
    name: string,
    description: string,
    image: string,
    tagline?: string,
    abv?: string,
    food_pairing?: Array<string>
}

function App() {

    const [page, setPage] = useState<number>(0)
    const [beers, setBeers] = useState<Array<BeerMini>>([])
    const [numPageBeers, setNumPageBeers] = useState<number>(0)
    const [beer, setBeer] = useState<BeerMini | null>(null)
    const [beerInput, setBeerInput] = useState<string>('')

    useEffect(() => {
        axios.get(`https://api.punkapi.com/v2/beers?beer_name=${beerInput}`)
            .then((response) => {
                let tempAr: Array<BeerMini> = []
                response.data.forEach((el: any) => {
                    if(el.name.toLowerCase().includes(beerInput.toLowerCase()))
                    tempAr.push({
                        name: el.name,
                        description: el.description,
                        image: el.image_url,
                        tagline: el.tagline,
                        abv: el.abv,
                        food_pairing: el.food_pairing
                    })
                })
                setBeers(tempAr)
                console.log(tempAr)
            })
    }, [numPageBeers, beerInput])

    useEffect(() => {
        if(beerInput != '')
        setNumPageBeers(0)
    }, [beerInput])

    return (
        <div className="App">
            {page == 0 ?
                <MainPage setPage={setPage} beers={beers} setBeer={setBeer} beerInput={beerInput}
                setBeerInput={setBeerInput} setNumPage={setNumPageBeers} numPage={numPageBeers}></MainPage> :
                <DetailPage beer={beer} setPage={setPage}></DetailPage>
            }
        </div>
    );
}

export default App;
