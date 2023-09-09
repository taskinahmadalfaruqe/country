import { useEffect } from "react";
import { useState } from "react";
import './AllCountry.css'
import CountryCard from "../CountryCard/CountryCard";


const AllCountry = () => {
  const [allCountryValue, setAllCountry]= useState([]);

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
      <div className="grid">
        {
          allCountryValue.map(singleCountry=> <CountryCard singleCountry={singleCountry} 
          key={singleCountry.ccn3} ></CountryCard>)
        }
      </div>
    </div>
  );
};
export default AllCountry;

