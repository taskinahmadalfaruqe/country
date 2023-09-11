import { useEffect } from "react";
import { useState } from "react";
import './AllCountry.css'
import CountryCard from "../CountryCard/CountryCard";


const AllCountry = () => {
  const [allCountryValue, setAllCountry]= useState([]);
  const [visitedCountry, setVisitedCountry]=useState([]);

  let handelVisitedCountry=(singleCountry)=>{
    const newVisitedCountryArray= [...visitedCountry,singleCountry];
    setVisitedCountry(newVisitedCountryArray)
  }

  useEffect(()=>{
    const fetchData= async()=>{
      try {
        const fetchCountry= await fetch('https://restcountries.com/v3.1/all');
        const CountryData = await fetchCountry.json();
        setAllCountry(CountryData);
      } catch (error) {
        return alert("Data Fetch Error")
      }
    }
    fetchData();
  },[])
  
  return (
    <div>
      <p className="countrySize">Total Country: {allCountryValue.length}</p>
      

      <div className="visitedCountry">
        <p className="countrySizeRecent"> Recent Visited Country: {visitedCountry.length} of {allCountryValue.length} </p>

        <div className="grid">
        {
          visitedCountry.map(singleVisitedCountry=><CountryCard singleCountry={singleVisitedCountry} key={singleVisitedCountry.cca3}> </CountryCard>)
        }
      </div>
      </div>


      <div className="grid">
        {
          allCountryValue.map(singleCountry=><CountryCard 
            singleCountry={singleCountry}
            key={singleCountry.cca3} 
            handelVisitedCountry={handelVisitedCountry} > </CountryCard>)
        }
      </div>
    </div>
  );
};
export default AllCountry;

