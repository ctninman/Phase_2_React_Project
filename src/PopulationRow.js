function PopulationRow ({name, size, continent, flag, country}) {

  return (
    <div key={country.area} className='pop-icon' style={{display:"flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
      <h4 key={name} style={{marginRight: '15px', marginLeft: '15px', width: '50px', textAlign: 'left'}}>{flag}</h4>
      <h6 key={country.cca3} style={{marginRight: '15px', marginLeft: '15px', width: '200px', textAlign: 'left'}}>{name}</h6>
      <h6 key={size} style={{marginRight: '15px', marginLeft: '15px', width: '150px', textAlign: 'right'}}>{size}</h6>
      <h6 key={country.ccn3} style={{marginRight: '15px', marginLeft: '15px', width: '90px', textAlign: 'center'}}>{continent}</h6>
    </div>
  )
}

export default PopulationRow