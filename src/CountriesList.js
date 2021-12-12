import { useState } from "react"
import Country from "./Country"
import Filter from './Filter'

function CountriesList ({countries, alphabetizeCountries}) {

  const [searchText, setSearchText] = useState('')

  const filteredCountryList = countries.filter((country) => {
    return country.name.common.toLowerCase().startsWith(searchText)
  })

  return (
    <div>
      <div>
        <h1 className='tab-header'>Country Information</h1>
      </div>
      <Filter onSearchText={searchText} onSetSearchText={setSearchText}/>
      {filteredCountryList.sort(alphabetizeCountries).map((country) => (
        <Country 
          key={country.name.common}
          country={country}
          style={{border: 5}} 
          style={{backgroundColor: '#234234'}}
        />
      ))}
    </div>
  )
}

export default CountriesList