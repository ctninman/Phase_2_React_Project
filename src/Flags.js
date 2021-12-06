import Flag from './Flag'

function Flags ({countries}) {
  return (
    <div>
      <h1>You've been fetched</h1>
      {countries.map((country) => (
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