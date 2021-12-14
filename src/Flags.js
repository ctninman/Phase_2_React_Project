import {useEffect} from "react"
import Flag from './Flag'

function Flags ({filterContinents, countryList, onFlagPageLoad, allCountries}) {

  useEffect (() => {
    onFlagPageLoad(allCountries)
  }, [] )
  
  return (
    <div style={{marginTop: '-10px'}}>
      <div>
        <h1 className='tab-header'>Flags</h1>
        <div style={{marginTop: '-25px'}}>
          <button onClick={filterContinents} value={'the world'}>The World</button> 
          <button onClick={filterContinents} value={'Africa'}>Africa</button>
          <button onClick={filterContinents} value={'Europe'}>Europe</button>
          <button onClick={filterContinents} value={'Asia'}>Asia</button>
          <button onClick={filterContinents} value={'Oceania'}>Oceania</button>
          <button onClick={filterContinents} value={'North America'}>North America</button>
          <button onClick={filterContinents} value={'South America'}>South America</button>
        </div>
      </div>
        <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-around'}}>
          {countryList.map((country) => (
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