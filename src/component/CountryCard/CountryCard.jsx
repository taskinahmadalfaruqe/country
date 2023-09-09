import './CountryCard.css'
const CountryCard = ({singleCountry}) => {
    console.log(singleCountry)
    const {name, flags, capital}=singleCountry;
    return (
        <div className="cardDesign">
            <p className='name'>Name: {name?.common}</p>
            <p className='name'>Capital: {capital}</p>
            <img src={flags.png} alt="Flags" className='height' />
        </div>
    );
};

export default CountryCard;