import Flag from './Flag'

function Flags ({filterContinents, countryList}) {
  return (
    <div>
      <h1>Flags</h1>
      <button onClick={filterContinents} value={'all'}>The World</button> 
      <button onClick={filterContinents} value={'Africa'}>Africa</button>
      <button onClick={filterContinents} value={'Europe'}>Europe</button>
      <button onClick={filterContinents} value={'Asia'}>Asia</button>
      <button onClick={filterContinents} value={'Oceania'}>Oceania</button>
      <button onClick={filterContinents} value={'North America'}>North America</button>
      <button onClick={filterContinents} value={'South America'}>South America</button>
      {countryList.map((country) => (
        <Flag 
          key={country.name.common}
          country={country}
          style={{border: 5}} 
          style={{backgroundColor: '#234234'}}
        />
      ))}
    </div>
  )
}

export default Flags