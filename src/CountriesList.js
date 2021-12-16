import { useState, useEffect } from "react"
import Country from "./Country"
import Filter from './Filter'

function CountriesList ({countries, alphabetizeCountries}) {

    // *** STATE VARIABLES *** //
  const [searchText, setSearchText] = useState('')

  const filteredCountryList = countries.filter((country) => {
    return country.name.common.toLowerCase().startsWith(searchText.toLowerCase())
  })

  useEffect (() => {
    document.title = "WQW - Countries"
  }, [] )

    // *** JSX *** //
  return (
    <div style={{marginTop: '-10px'}}>
      <div>
        <h1 className='tab-header'>Country Information</h1>
      </div>
      <div style={{marginTop: '0px'}} >
        <Filter onSearchText={searchText} onSetSearchText={setSearchText}/>
      </div>
      <div 
        style={{display:'flex', 
          flexDirection: 'row', 
          flexWrap: 'wrap', 
          justifyContent: 'center'}}
          > 
          {filteredCountryList.sort(alphabetizeCountries).map((country) => (
            <Country 
            key={country.name.common}
            country={country}
          />
        ))}
      </div>
    </div>
  )
}

export default CountriesList