import {useEffect} from "react"
import Flag from './Flag'

function Flags ({ flagCountryList, setFlagCountryList, allCountries, flagsContinent, setFlagsContinent}) {

  

  useEffect (() => {
    document.title = "WQW - Flags"
  }, [] )

  function filterFlagsByContinent (event) {
    const filteredContinent = allCountries.filter((country) => {
      if (event.target.value === 'the world') {
        return true
      } else if (event.target.value === country.continents[0]) {
        return true
      }
        return false
    }) 
    setFlagCountryList(filteredContinent)
    setFlagsContinent(event.target.value)
  }
  
  return (
    <div style={{marginTop: '-10px'}}>
      <div>
        <h1 className='tab-header'>Flags of {flagsContinent}</h1>
        <div style={{marginTop: '-25px'}}>
          <button onClick={filterFlagsByContinent} value={'the world'}>The World</button> 
          <button onClick={filterFlagsByContinent} value={'Africa'}>Africa</button>
          <button onClick={filterFlagsByContinent} value={'Europe'}>Europe</button>
          <button onClick={filterFlagsByContinent} value={'Asia'}>Asia</button>
          <button onClick={filterFlagsByContinent} value={'Oceania'}>Oceania</button>
          <button onClick={filterFlagsByContinent} value={'North America'}>North America</button>
          <button onClick={filterFlagsByContinent} value={'South America'}>South America</button>
        </div>
      </div>
        <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-around'}}>
          {flagCountryList.sort((a, b) => 0.5 - Math.random()).map((country) => (
            <Flag 
              key={country.name.common}
              country={country}
            />
          ))}
      </div>
    </div>
  )
}

export default Flags