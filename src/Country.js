function Country ({country}) {

  const nativeNameObject = Object.values(country.name.nativeName)

  const officialLanguages = Object.values(country.languages)

  const officialCurrenciesObject = Object.values(country.currencies)

  return (
    <div className={'country_card'}>
      <h2 style={{textAlign: 'center'}}>{country.name.common}</h2>
      <img className={'flag_card'} style={{border: '2px solid'}}src={country.flags.png} alt="Flag" />
      <h5 style={{textAlign: 'center', marginTop: '0px'}}>{nativeNameObject[0].common}</h5>
      <h3>Capital: {country.capital}</h3>
      <h4>Continent: {country.continents[0]}</h4>
      <h5>Subregion: {country.subregion}</h5>
      <h4>Population: {(country.population).toLocaleString()}</h4>
      <h4>Area: {(country.area).toLocaleString()} square km</h4>
      <h4>{officialLanguages.length === 1 ? 'Official language:' : 'Official languages:'} {officialLanguages.join(', ')}</h4>
      <h4>Official Currency: {officialCurrenciesObject[0].symbol} <br/> {officialCurrenciesObject[0].name} </h4>
      <>{officialCurrenciesObject.length > 1 ? <h4>and {officialCurrenciesObject[1].symbol} {officialCurrenciesObject[1].name}</h4> : null}</>
      <h5>Driving Side of Street: {country.car.side} side</h5>
    </div>
  )
}

export default Country