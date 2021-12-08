import { useState, useEffect } from 'react';
import { Route, Switch, } from 'react-router-dom'
import Capitals from './Capitals'
import Flags from './Flags'
import Continents from './Continents'
import Population from './Population'
import Home from './Home'
import Quizzes from './Quizzes';
import NavBar from './NavBar';
import CountriesList from './CountriesList';

import './App.css'

function App() {
  const [countries, setCountries] = useState([])
  const [countryList, setCountryList] = useState(countries)



  useEffect (() => {
  fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {
      const unMemberCountries = data.filter((country) => country.unMember === true || country.cca2 === 'PS' || country.cca2 === 'GW');
      console.log('un', unMemberCountries);
      setCountries(unMemberCountries)
    })
  }, [] )

  function filterByContinent (event) {
    const filteredContinent = countries.filter((country) => {
      if (event.target.value === 'all') {
        return true
      } else if (event.target.value === country.continents[0]) {
        return true
      }
    }) 
    setCountryList(filteredContinent)
  }

  function alphabetize ( a, b ) {
    if ( a.name.common < b.name.common ){
      return -1;
    }
    if ( a.name.common > b.name.common ){
      return 1;
    }
    return 0;
  }

  function orderNumbers ( a, b ) {
    if ( a.population < b.population ){
      return 1;
    }
    if ( a.population > b.population ){
      return -1;
    }
    return 0;
  }


  return (
    <div className='App'>
      <NavBar className='NavBar'/>
        <Switch>
        <Route exact path='/countries'>
            <CountriesList alphabetizeCountries={alphabetize} countries={countries}/>
          </Route>
          <Route path='/quizzes'>
            <Quizzes countryData={[...countries]} orderNumbers={orderNumbers}/>
          </Route>
          <Route path='/capitals'>
            <Capitals countries={countries}/>
          </Route>
          <Route exact path='/continents'>
            <Continents alphabetize={alphabetize} filterContinents={filterByContinent} countryList={countryList}/>
          </Route>
          <Route exact path='/population'>
            <Population countries={[...countries.sort(orderNumbers)]}/>
          </Route>
          <Route exact path='/flags'>
            <Flags filterContinents={filterByContinent} allCountries={countries} countryList={countryList} onFlagPageLoad={setCountryList}/>
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
    </div>
  )
}


export default App;
