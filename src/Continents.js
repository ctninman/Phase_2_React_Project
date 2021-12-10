import Continent from "./Continent"

function Continents ({alphabetize, filterContinents, countryList}) {

  return (
    <div>
      <h1>Continents</h1>
      <button onClick={filterContinents} value={'all'}>All Continents</button>
      <button onClick={filterContinents} value={'Africa'}>Africa</button>
      <button onClick={filterContinents} value={'Europe'}>Europe</button>
      <button onClick={filterContinents} value={'Asia'}>Asia</button>
      <button onClick={filterContinents} value={'Oceania'}>Oceania</button>
      <button onClick={filterContinents} value={'North America'}>North America</button>
      <button onClick={filterContinents} value={'South America'}>South America</button>
      <h2>There are {countryList.length} countries in </h2>
      {countryList.sort(alphabetize).map((country) => (
      <Continent 
        key={country.name.common}
        country={country}/>
      ))}
    </div>
  )
}

export default Continents