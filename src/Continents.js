import Continent from "./Continent"
import {useEffect, useState} from 'react'

function Continents ({alphabetize, countries, continentCountryList, setContinentCountryList}) {
   
    // *** STATE VARIABLES *** // 
  const [selectedContinents, setSelectedContinents] = useState("the world");

  // useEffect (() => {
  //   setCountryList(countries)
  // }, [])

  useEffect (() => {
    document.title = "WQW - Continents"
  }, [] )

  function filterByContinent (event) {
    const filteredContinent = countries.filter((country) => {
      if (event.target.value === 'the world') {
        return true
      } else if (event.target.value === country.continents[0]) {
        return true
      }
      return false
    })
    setContinentCountryList(filteredContinent) 
    setSelectedContinents(event.target.value)
  }

    // *** JSX *** //
  return (
    <div style={{marginTop: '-10px'}}>
      <div >
        <h1 className='tab-header'>Continents</h1>
        <div style={{marginTop: '-25px'}}>
          <button onClick={filterByContinent} value={'the world'}>All Continents</button>
          <button onClick={filterByContinent} value={'Africa'}>Africa</button>
          <button onClick={filterByContinent} value={'Europe'}>Europe</button>
          <button onClick={filterByContinent} value={'Asia'}>Asia</button>
          <button onClick={filterByContinent} value={'Oceania'}>Oceania</button>
          <button onClick={filterByContinent} value={'North America'}>North America</button>
          <button onClick={filterByContinent} value={'South America'}>South America</button>
          <button onClick={filterByContinent} value={'Antarctica'}>Antarctica</button>

        </div>
        <h2 
          className='tab-header' 
          style=
            {{backgroundColor: '#609240', 
            color: 'white', marginLeft: '200px', 
            marginRight: '200px', 
            marginTop: '0px'}}
          >There are {continentCountryList.length} countries in {selectedContinents}.
        </h2>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', flexWrap:'wrap', justifyContent: 'space-between'}}>
        {continentCountryList.sort(alphabetize).map((country) => (
          <Continent 
          key={country.name.common}
          country={country}/>
        ))}
      </div>
    </div>
  )
}

export default Continents