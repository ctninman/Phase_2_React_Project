import CapitalCard from "./CapitalCard"
import {useEffect} from "react"

function Capitals ({countries, capitalCountryList, setCapitalCountryList, capitalsContinent, setCapitalsContinent}) {


  useEffect (() => {
    document.title = "WQW - Capitals"
  }, [] )

  function filterCapitalsByContinent (event) {
    const filteredContinent = countries.filter((country) => {
      if (event.target.value === 'the world') {
        return true
      } else if (event.target.value === country.continents[0]) {
        return true
      }
        return false
    }) 
    setCapitalCountryList(filteredContinent)
    setCapitalsContinent(event.target.value)
  }

  return (
    <div style={{marginTop: '-10px'}}>
      <h1 className='tab-header'>Capitals of {capitalsContinent}</h1>
      <div style={{marginTop: '-25px'}}>
          <button onClick={filterCapitalsByContinent} value={'the world'}>The World</button> 
          <button onClick={filterCapitalsByContinent} value={'Africa'}>Africa</button>
          <button onClick={filterCapitalsByContinent} value={'Europe'}>Europe</button>
          <button onClick={filterCapitalsByContinent} value={'Asia'}>Asia</button>
          <button onClick={filterCapitalsByContinent} value={'Oceania'}>Oceania</button>
          <button onClick={filterCapitalsByContinent} value={'North America'}>North America</button>
          <button onClick={filterCapitalsByContinent} value={'South America'}>South America</button>
        </div>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
        {capitalCountryList.sort((a, b) => 0.5 - Math.random()).map((country) => (
          <CapitalCard 
            key={country.name.common}
            country={country}
            style={{backgroundColor: '#234234'}}
          />
        ))}
      </div>
    </div>
  )
}

export default Capitals