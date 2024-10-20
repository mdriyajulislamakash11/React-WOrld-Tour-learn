import { useEffect } from "react"
import { useState } from "react"
import Country from "./country/Country"
import './Countries.css'


export default function Countries() {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedCountryFlags, setVisitedCountryFlags] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = (country) => {
        console.log('Add this to your visited Country')
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
        console.log(country)
    }

    const loadHendleFlags = (flag) => {
        console.log('add flags')
        const newVisitedFlags = [...visitedCountries, flag];
        setVisitedCountryFlags(newVisitedFlags);
        console.log(flag)
    }
    return (
        <div>
            <h3>Country: {countries.length}</h3>

            {/* visited country */}
            <div>
                <h3>Visited Countries: {visitedCountries.length}</h3>
                <ul>
                    {
                        visitedCountries.map(country => <li
                            key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>

            {/* images visit section */}
            <div className="img-container">
                {
                    visitedCountryFlags.map(flag => <img src={flag}></img>)
                }
            </div>

            {/* display countries */}
            <div className="country-container">
                {
                    countries.map(country =>
                        <Country key={country.cc13}
                            handleVisitedCountry={handleVisitedCountry}
                            loadHendleFlags={loadHendleFlags}
                            country={country}></Country>)
                }
            </div>
        </div>
    )
}