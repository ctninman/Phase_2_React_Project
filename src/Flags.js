import {useEffect} from "react"

import Flag from './Flag'

function Flags ({filterContinents, countryList, onFlagPageLoad, allCountries}) {

  useEffect (() => {
    onFlagPageLoad(allCountries)
  }, [] )
  
  return (
    <div>
      <div>
        <h1 className='tab-header'>Flags</h1>
        <button onClick={filterContinents} value={'all'}>The World</button> 
        <button onClick={filterContinents} value={'Africa'}>Africa</button>
        <button onClick={filterContinents} value={'Europe'}>Europe</button>
        <button onClick={filterContinents} value={'Asia'}>Asia</button>
        <button onClick={filterContinents} value={'Oceania'}>Oceania</button>
        <button onClick={filterContinents} value={'North America'}>North America</button>
        <button onClick={filterContinents} value={'South America'}>South America</button>
      </div>
        <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-around'}}>
          {countryList.map((country) => (
            <Flag 
              key={country.name.common}
              country={country}
              style={{border: 5}} 
              style={{backgroundColor: '#234234'}}
            />
          ))}
      </div>
    </div>
  )
}

export default Flags