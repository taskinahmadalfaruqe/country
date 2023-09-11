import { useState } from 'react';
import './CountryCard.css'
const CountryCard = ({singleCountry,handelVisitedCountry}) => {
    const [visited, setVisited]=useState(false);
    const isVisited=()=>{
        setVisited(!visited)
        if(visited == false){
            handelVisitedCountry(singleCountry);
        }
    }
    const {name, flags, capital}=singleCountry;
    return (
        <div className={`cardDesign ${visited && 'visitedBG'}`}>
            <p className='name'>Name: {name?.common}</p>
            <p className='name'>Capital: {capital? `${capital}`:"No Capital"}</p>
            <img src={flags.png} alt="Flags" className='height' />
            <button onClick={isVisited} className={`btn ${visited && 'visited'}`}>{visited?'Visited':'Going'}</button>
        </div>
    );
};

export default CountryCard;