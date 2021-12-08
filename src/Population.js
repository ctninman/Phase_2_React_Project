import {useState} from "react"
import PopulationRow from './PopulationRow'

function Population ({countries}) {
  
  const [selectedContinent, setSelectedContinent] = useState("all");
  const [selectedSize, setSelectedSize] = useState('all_sizes')

  function handleContinentChange(event) {
    setSelectedContinent(event.target.value);
    console.log('etv', event.target.value)
  }

  function handleSizeChange(event) {
    setSelectedSize(event.target.value);
    console.log('size etv', event.target.value)
  }

  const countriesToDisplay = countries.filter((country) => {
    if (selectedContinent === "all") return true;

    return country.continents[0] === selectedContinent;
  }).filter(country => {
    if(selectedSize === 'all_sizes'){
      return true
    } else if (selectedSize === 'extra_large') {
      return country.population >= 100000000
    } else if (selectedSize === 'large') {
      return country.population >= 50000000 && country.population < 100000000
    } else if (selectedSize === 'medium') {
      return country.population >=10000000 && country.population < 50000000
    } else if (selectedSize === 'small') {
      return country.population >= 1000000 && country.population < 10000000
    } else if (selectedSize === 'extra_small') {
      return country.population < 1000000
    }
  });
  
  return (
    <div>
      <h1>Population</h1>
      <select onChange={handleContinentChange} name="continent_select" id="continent_select">
        <option value="all">All Continents</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
      </select>

      <select onChange={handleSizeChange} name="size_select" id="size_select">
        <option value="all_sizes">All Sizes</option>
        <option value="extra_large">Greater than 100 Million</option>
        <option value="large">Between 50 Million - 100 Million</option>
        <option value="medium">Between 10 Million - 50 Million</option>
        <option value="small">Between 1 Million - 10 Million</option>
        <option value="extra_small">Less than 1 Million</option>
      </select>

      <h3>There {countriesToDisplay.length === 1 ? 'is' : 'are'} {countriesToDisplay.length} {countriesToDisplay.length === 1 ? 'country' : 'countries'} in {selectedContinent} that are {selectedSize}</h3>

      <ul className="Items">
        {countriesToDisplay.map((country) => (
          <PopulationRow 
            key={country.name.common} 
            name={country.name.common} 
            size={(country.population).toLocaleString()} 
            continent={country.continents[0]} 
            flag={country.flag}/>
        ))}
      </ul>
    </div>
  )
}

export default Population