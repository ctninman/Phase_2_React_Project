function PopulationRow ({name, size, continent}) {

  return (
    <div style={{display:"inline-block", padding:'10px'}}>
      <h3>{name}</h3>
      <h4>{size}</h4>
      <h4>{continent}</h4>
    </div>
  )
}

export default PopulationRow