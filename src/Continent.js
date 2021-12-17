function Continent ({country}) {

  return (
    <div 
      style=
        {{paddingLeft: '10px',
        display: 'flex', 
        flexDirection: 'row',
        border: '2px solid', 
        alignContent: 'space-around', 
        textAlign: 'left',
        flexWrap: 'wrap',
        backgroundColor: 'white', 
        margin: '10px', 
        width: '150px', 
        height: '40px', 
        flexWrap: 'wrap', 
        borderRadius: '5px'}}>
      <h4>{country.flag} {country.name.common}</h4>
    </div>
  )
}

export default Continent