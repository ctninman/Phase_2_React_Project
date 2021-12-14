import {useState} from "react"
import PopulationRow from './PopulationRow'

function Population ({countries}) {
  
    // *** STATE VARIABLE *** //
  const [selectedContinent, setSelectedContinent] = useState("the world");
  const [selectedSize, setSelectedSize] = useState('any size')

  function handleContinentChange(event) {
    setSelectedContinent(event.target.value);
  }

  function handleSizeChange(event) {
    setSelectedSize(event.target.value);
  }

  const countriesToDisplay = countries.filter((country) => {
    if (selectedContinent === "the world") return true;
    return country.continents[0] === selectedContinent;
  }).filter(country => {
    if(selectedSize === 'any size'){
      return true
    } else if (selectedSize === 'more than 100 Million people') {
      return country.population >= 100000000
    } else if (selectedSize === 'between 50 million - 100 million people') {
      return country.population >= 50000000 && country.population < 100000000
    } else if (selectedSize === "between 10 million - 50 million people") {
      return country.population >=10000000 && country.population < 50000000
    } else if (selectedSize === "between 1 million - 10 million people") {
      return country.population >= 1000000 && country.population < 10000000
    } else if (selectedSize === 'fewer than 1 million people') {
      return country.population < 1000000
    }
  });

    // *** JSX *** //  
  return (
    <div style={{marginTop: '-10px'}}>
      <div>
        <h1 className='tab-header'>Population</h1>
      </div>
      <div>
        <select onChange={handleContinentChange} name="continent_select" id="continent_select">
          <option value="the world">All Continents</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
        </select>

        <select onChange={handleSizeChange} name="size_select" id="size_select">
          <option value="any size">All Sizes</option>
          <option value="more than 100 Million people">Greater than 100 Million</option>
          <option value="between 50 million - 100 million people">Between 50 Million - 100 Million</option>
          <option value="between 10 million - 50 million people">Between 10 Million - 50 Million</option>
          <option value="between 1 million - 10 million people">Between 1 Million - 10 Million</option>
          <option value="fewer than 1 million people">Less than 1 Million</option>
        </select>

        <h3 
          className='tab-header'  
          style={{backgroundColor: "#609240", 
          color: 'white', marginLeft: '200px', 
          marginRight: '200px', marginBottom: '0px'}}
          >There {countriesToDisplay.length === 1 ? 'is' : 'are'} {countriesToDisplay.length} {countriesToDisplay.length === 1 ? 'country' : 'countries'} in {selectedContinent} that have {selectedSize}.
        </h3>
        <div style={{display: 'flex', flexFlow: 'column wrap', justifyContent: 'center'}}>
          <ol className="Items" style={{fontSize: '150%', display: 'table', margin: '0 auto', flexDirection: 'column', justifyContent: 'center', alignContent: 'center'}}>
            {countriesToDisplay.map((country) => (
              <li >
                <PopulationRow 
                key={country.name.common} 
                name={country.name.common} 
                size={(country.population).toLocaleString()} 
                continent={country.continents[0]} 
                flag={country.flag}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Population