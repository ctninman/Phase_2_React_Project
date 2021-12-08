function PopulationRow ({name, size, continent, flag}) {

  return (
    <div className='pop-icon' style={{display:"inline-block", padding:'10px'}}>
      <h1 style={{margin: '0px'}}>{flag}</h1>
      <h3 style={{margin: '0px'}}>{name}</h3>
      <h4 style={{margin: '0px'}}>{size}</h4>
      <h4 style={{margin: '0px'}}>{continent}</h4>
    </div>
  )
}

export default PopulationRow