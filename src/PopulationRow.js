function PopulationRow ({name, size, continent, flag}) {

  return (
    <li className='pop-icon' style={{display:"flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
      <h4 style={{marginRight: '15px', marginLeft: '15px', width: '50px', textAlign: 'left'}}>{flag}</h4>
      <h6 style={{marginRight: '15px', marginLeft: '15px', width: '200px', textAlign: 'left'}}>{name}</h6>
      <h6 style={{marginRight: '15px', marginLeft: '15px', width: '150px', textAlign: 'right'}}>{size}</h6>
      <h6 style={{marginRight: '15px', marginLeft: '15px', width: '90px', textAlign: 'center'}}>{continent}</h6>
    </li>
  )
}

export default PopulationRow