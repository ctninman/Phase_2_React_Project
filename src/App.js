import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
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

    // *** STATE VARIABLES *** //
  const [countries, setCountries] = useState([])
  const [countryList, setCountryList] = useState([])
  const [userName, setUserName] = useState('')
  const [fullUserObject, setFullUserObject] = useState({
    "userName": "Player",
    "flagsHighScore": 0,
    "populationHighScore": 0,
    "continentsHighScore": 0,
    "capitalsHighScore": 0
  })
  const [userScore, setUserScore] = useState(0)
  const [continentHighScore, setContinentHighScore] = useState(fullUserObject.continentsHighScore)
  const [flagHighScore, setFlagHighScore] = useState(fullUserObject.flagsHighScore)
  const [capitalHighScore, setCapitalHighScore] = useState(fullUserObject.capitalsHighScore)
  const [populationHighScore, setPopulationHighScore] = useState(fullUserObject.populationHighScore)
  const [login, setLogin] = useState('')

  useEffect (() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {
      const unMemberCountries = data.filter((country) => country.unMember === true || country.cca2 === 'PS' || country.cca2 === 'GW');
      console.log('un', unMemberCountries);
      setCountries(unMemberCountries)
      setCountryList(unMemberCountries)
    })
  }, [] )

  function enterUserName (event) {
    event.preventDefault()
    document.getElementById('username-form').reset()
    setUserName(login)
    if (login !== '') {
      fetch(`http://localhost:3000/users`, {method: 'GET'})
      .then(res => res.json())
      .then(function (userData) {
          let foundUser = userData.find((user) => {
            return login === user.userName
          })
        if (foundUser) {
          setFullUserObject(foundUser)
          setContinentHighScore(foundUser.continentsHighScore)
          setCapitalHighScore(foundUser.capitalsHighScore)
          setFlagHighScore(foundUser.flagsHighScore)
          setPopulationHighScore(foundUser.populationHighScore)
          setUserScore(foundUser.flagsHighScore + foundUser.populationHighScore + foundUser.continentsHighScore + foundUser.capitalsHighScore)
        } else {
          let newUserObject = {
            "userName": login,
            "flagsHighScore": 0,
            "populationHighScore": 0,
            "continentsHighScore": 0,
            "capitalsHighScore": 0
          }
          postUserData(newUserObject)
        }
      })
    }
  }

  function postUserData (object) {  
    if (fullUserObject.userName && fullUserObject.userName !== '')
      fetch(`http://localhost:3000/users`, {
        method: "POST",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify(object),
      })
        .then((res) => {
          return res.json()
        })
        .then(fullUserObject => {
          setFullUserObject(fullUserObject)
          setContinentHighScore(fullUserObject.continentsHighScore)
          setCapitalHighScore(fullUserObject.capitalsHighScore)
          setFlagHighScore(fullUserObject.flagsHighScore)
          setPopulationHighScore(fullUserObject.populationHighScore)
          setUserScore(fullUserObject.flagsHighScore + fullUserObject.populationHighScore + fullUserObject.continentsHighScore + fullUserObject.capitalsHighScore)
        });
  }

  function filterByContinent (event) {
    const filteredContinent = countries.filter((country) => {
      if (event.target.value === 'the world') {
        return true
      } else if (event.target.value === country.continents[0]) {
        return true
      }
        return false
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
        userScore={userScore}
        enterUserName={enterUserName}
        login={login}
        setLogin={setLogin}/>
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
              userScore={userScore}
              setUserScore={setUserScore}
              continentHighScore={continentHighScore}
              setContinentHighScore={setContinentHighScore}
              capitalHighScore={capitalHighScore}
              setCapitalHighScore={setCapitalHighScore}
              flagHighScore={flagHighScore}
              setFlagHighScore={setFlagHighScore}
              populationHighScore={populationHighScore}
              setPopulationHighScore={setPopulationHighScore}
              fullUserObject={fullUserObject}
              setFullUserObject={setFullUserObject}/>
          </Route>
          <Route path='/capitals'>
            <Capitals 
              countries={[...countries.sort((a, b) => 0.5 - Math.random())]}/>
          </Route>
          <Route exact path='/continents'>
            <Continents 
              alphabetize={alphabetize} 
              filterContinents={filterByContinent} 
              countryList={countryList}
              countries={countries}
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
        <footer style={{textAlign: 'left', color: 'white', paddingLeft: '10px', paddingBottom: '10px', paddingTop: '20px'}}>
          Background photo by <a style={{color: 'lightgray'}}href={'https://unsplash.com/@marjan_blan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'}>Marjan Blan | @marjanblan</a> on <a style={{color: 'lightgray'}} href={"https://unsplash.com/s/photos/world-map?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}>Unsplash</a>
        </footer>
    </div>
  )
}

export default App;
