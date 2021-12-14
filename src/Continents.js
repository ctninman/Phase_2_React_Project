import Continent from "./Continent"
import {useEffect, useState} from 'react'

function Continents ({alphabetize, filterContinents, countries, countryList, setCountryList, allCountries, onContinentPageLoad}) {
   
    // *** STATE VARIABLES *** // 
  const [selectedContinents, setSelectedContinents] = useState("the world");

  useEffect (() => {
    setCountryList(allCountries)
  }, [] )

  function filteredByContinent (event) {
    const filteredContinent = countries.filter((country) => {
      if (event.target.value === 'the world') {
        return true
      } else if (event.target.value === country.continents[0]) {
        return true
      }
    })
    setCountryList(filteredContinent) 
    setSelectedContinents(event.target.value)
  }

    // *** JSX *** //
  return (
    <div style={{marginTop: '-10px'}}>
      <div >
        <h1 className='tab-header'>Continents</h1>
        <div style={{marginTop: '-25px'}}>
          <button onClick={filteredByContinent} value={'the world'}>All Continents</button>
          <button onClick={filteredByContinent} value={'Africa'}>Africa</button>
          <button onClick={filteredByContinent} value={'Europe'}>Europe</button>
          <button onClick={filteredByContinent} value={'Asia'}>Asia</button>
          <button onClick={filteredByContinent} value={'Oceania'}>Oceania</button>
          <button onClick={filteredByContinent} value={'North America'}>North America</button>
          <button onClick={filteredByContinent} value={'South America'}>South America</button>
          <button onClick={filteredByContinent} value={'Antarctica'}>Antarctica</button>

        </div>
        <h2 className='tab-header' style={{backgroundColor: '#609240', color: 'white', marginLeft: '200px', marginRight: '200px', marginTop: '0px'}}>There are {countryList.length} countries in {selectedContinents}.</h2>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', flexWrap:'wrap', justifyContent: 'space-between'}}>
        {countryList.sort(alphabetize).map((country) => (
        <Continent 
          key={country.name.common}
          country={country}/>
        ))}
      </div>
    </div>
  )
}

export default Continents