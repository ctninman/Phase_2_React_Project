import CapitalCard from "./CapitalCard"

function Capitals ({countries}) {

  console.log('capitaldata', countries)
  return (
    <div>
      <h1>Capitals</h1>
      {countries.map((country) => (
        <CapitalCard 
          key={country.name.common}
          country={country}
          style={{border: 5}} 
          style={{backgroundColor: '#234234'}}
        />
      ))}
    </div>
  )
}

export default Capitals