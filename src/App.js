import Flag from './Flag'
import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [countries, setCountries] = useState([])

  useEffect (() => {
  fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {
      const unMemberCountries = data.filter((country) => country.unMember === true);
      console.log('un', unMemberCountries);
      setCountries(unMemberCountries)
    })
  }, [] )

  
  //   const unMemberCountries = countries.filter((country) => country.unMember === true);
  //   console.log('un', unMemberCountries);

  // console.log('ctries', countries)

  return (
    <div>
      <h1>You've been fetched</h1>
      {countries.map((country) => (
        <Flag 
          key={country.name.common}
          country={country}
          style={{border: 5}} 
          style={{backgroundColor: '#234234'}}
        />
      ))}
    </div>
  )
}

export default App;
