import CapitalCard from "./CapitalCard"

function Capitals ({countries}) {

  return (
    <div style={{marginTop: '-10px'}}>
      <h1 className='tab-header'>Capitals</h1>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
        {countries.map((country) => (
          <CapitalCard 
            key={country.name.common}
            country={country}
            style={{backgroundColor: '#234234'}}
          />
        ))}
      </div>
    </div>
  )
}

export default Capitals