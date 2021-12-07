import { useState } from "react"
import Country from "./Country"
import Filter from './Filter'

function CountriesList ({countries}) {

  const [searchText, setSearchText] = useState('')

  const filteredCountryList = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(searchText)
  })

  return (
    <div>
      <Filter onSearchText={searchText} onSetSearchText={setSearchText}/>
      <h1>Country Information</h1>
      {filteredCountryList.map((country) => (
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