function Test ({orderedCountriesArray}) {

  console.log(orderedCountriesArray)
  return (
    <h1>{orderedCountriesArray[0].name.common}</h1>
  )
}

export default Test