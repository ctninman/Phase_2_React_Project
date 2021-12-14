function Continent ({country}) {

  return (
    <div 
      style=
        {{paddingLeft: '10px',
        display: 'flex', 
        border: '2px solid', 
        alignContent: 'space-around', 
        backgroundColor: 'white', 
        margin: '10px', 
        width: '200px', 
        height: '45px', 
        flexWrap: 'wrap', 
        borderRadius: '5px'}}>
      <h3>{country.flag} {country.name.common}</h3>
    </div>
  )
}

export default Continent