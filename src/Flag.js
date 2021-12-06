function Flag ({country}) {

  return (
    <div className={'country_card'}>
      <h2>{country.name.common}</h2>
      <img className={'flag_card'} src={country.flags.png}  />
      <h3>Capital: {country.capital}</h3>
      <h4>Population: {(country.population).toLocaleString()}</h4>
    </div>
  )
}

export default Flag