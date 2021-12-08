function Continent ({country}) {
  return (
    <div>
      <h1>{country.flag} {country.name.common}</h1>
    </div>
  )
}

export default Continent