import { useState } from 'react';
import './Country.css'

const Country = ({ country, handelVisitedCountries }) => {
    const { name, flags, population, area } = country;

    const [visited, setVisited] = useState(false);

    // toggle this function with useState
    const handelVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className='country'>
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <br />
            <button onClick={() => handelVisitedCountries(country)}>Mark Visit</button>
            <button onClick={handelVisited}>{visited ? 'Visited' : 'Going'}</button>
            <p>{visited ? 'visited this place' : 'i want to visit'}</p>
        </div>
    );
};

export default Country;