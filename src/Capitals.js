import CapitalCard from "./CapitalCard"

function Capitals ({countries}) {

  console.log('capitaldata', countries)
  return (
    <div>
      <h1 className='tab-header'>Capitals</h1>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
        {countries.map((country) => (
          <CapitalCard 
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

export default Capitals