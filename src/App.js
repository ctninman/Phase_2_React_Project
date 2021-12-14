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

    // *** STATE VARIABLE *** //
  const [countries, setCountries] = useState([])
  const [countryList, setCountryList] = useState(countries)
  const [userName, setUserName] = useState('')
  const [fullUserObject, setFullUserObject] = useState({
    "userName": "Player",
    "flagsHighScore": 0,
    "populationHighScore": 0,
    "continentsHighScore": 0,
    "capitalsHighScore": 0
  })
  const [userScore, setUserScore] = useState(0)
  const [flagQuizHighScore, setFlagQuizHighScore] = useState (0)

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
      if (event.target.value === 'the world') {
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

    // *** JSX *** //
  return (
    <div className='App'>
      <NavBar 
        className='NavBar'
        userName={userName}
        fullUserObject={fullUserObject} 
        setUserName={setUserName}
        userScore={userScore}
        setUserScore={setUserScore}
        setFullUserObject={setFullUserObject}/>
        <Switch>
        <Route exact path='/countries'>
            <CountriesList 
              alphabetizeCountries={alphabetize} 
              countries={countries}/>
          </Route>
          <Route path='/quizzes'>
            <Quizzes 
              countryData={[...countries]} 
              orderNumbers={orderNumbers} 
              fullUserObject={fullUserObject}
              flagQuizHighScore={flagQuizHighScore}/>
          </Route>
          <Route path='/capitals'>
            <Capitals 
              countries={countries}/>
          </Route>
          <Route exact path='/continents'>
            <Continents 
              alphabetize={alphabetize} 
              filterContinents={filterByContinent} 
              countryList={countryList}
              countries={countries}
              allCountries={countries}
              setCountryList={setCountryList}/>
          </Route>
          <Route exact path='/population'>
            <Population 
              countries={[...countries.sort(orderNumbers)]}/>
          </Route>
          <Route exact path='/flags'>
            <Flags 
              filterContinents={filterByContinent} 
              allCountries={countries} 
              countryList={countryList} 
              onFlagPageLoad={setCountryList}/>
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
    </div>
  )
}

export default App;
