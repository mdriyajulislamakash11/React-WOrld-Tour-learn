import { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountry, loadHendleFlags }) => {
    // console.log(country)

    const { name, flags, population, area, } = country;

    console.log(loadHendleFlags)

    const [visite, setVisit] = useState(false)

    function loadHandle() {
        setVisit(!visite)
    }

    return (
        <div className={`box ${visite ? 'visited' : 'non-visited'}`}>
            <h3 style={{ color: visite ? 'red' : 'white' }}>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <button onClick={() =>
                handleVisitedCountry(country)}>Mark Visited</button>
            <br />

            <button onClick={() => loadHendleFlags(country.flags.png)}>add flags</button>
            <br />
            <button onClick={loadHandle}>{visite ? 'Visited' : 'Going...'}</button>
            {visite ? ' i have visite here now' : ' i want to visite'}
        </div>
    );
};

export default Country;