import Continent from "./Continent"

function Continents ({alphabetize, filterContinents, countryList}) {

  return (
    <div>
      <div>
        <h1 className='tab-header'>Continents</h1>
        <button onClick={filterContinents} value={'all'}>All Continents</button>
        <button onClick={filterContinents} value={'Africa'}>Africa</button>
        <button onClick={filterContinents} value={'Europe'}>Europe</button>
        <button onClick={filterContinents} value={'Asia'}>Asia</button>
        <button onClick={filterContinents} value={'Oceania'}>Oceania</button>
        <button onClick={filterContinents} value={'North America'}>North America</button>
        <button onClick={filterContinents} value={'South America'}>South America</button>
        <h2 className='tab-header' style={{backgroundColor: 'white', color: 'black', marginLeft: '200px', marginRight: '200px'}}>There are {countryList.length} countries in </h2>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', flexWrap:'wrap'}}>
        {countryList.sort(alphabetize).map((country) => (
        <Continent 
          key={country.name.common}
          country={country}/>
        ))}
      </div>
    </div>
  )
}

export default Continents