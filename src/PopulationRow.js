function PopulationRow ({name, size, continent, flag}) {

  return (
    <div className='pop-icon' style={{display:"flex", flexDirection: 'row', alignContent: 'center'}}>
      <h1 style={{marginRight: '15px', marginLeft: '15px'}}>{flag}</h1>
      <h3 style={{marginRight: '15px', marginLeft: '15px'}}>{name}</h3>
      <h3 style={{marginRight: '15px', marginLeft: '15px'}}>{size}</h3>
      <h3 style={{marginRight: '15px', marginLeft: '15px'}}>{continent}</h3>
    </div>
  )
}

export default PopulationRow