import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);

    const handelVisitedCountries = country => {
        const newVisitedCountry = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry);
    }

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h3>Visited Country: {visitedCountries.length}</h3>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="countries">
                {
                    countries.map(country =>
                        <Country
                            key={countries.cca3}
                            country={country}
                            handelVisitedCountries={handelVisitedCountries}
                        ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;