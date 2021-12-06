import Flag from './Flag'
import { useState, useEffect } from 'react';
import { Route, Switch, } from 'react-router-dom'
import Capitals from './Capitals'
import Flags from './Flags'
import Continents from './Continents'
import Languages from './Languages'
import Population from './Population'
import Home from './Home'
import Quizzes from './Quizzes';
import NavBar from './NavBar';

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

//   return (
    
//     <div>
//       <h1>You've been fetched</h1>
//       {countries.map((country) => (
//         <Flag 
//           key={country.name.common}
//           country={country}
//           style={{border: 5}} 
//           style={{backgroundColor: '#234234'}}
//         />
//       ))}
//     </div>
//   )
// }

  return (
    <div>
      <NavBar />
        <Switch>
          <Route path='/quizzes'>
            <Quizzes />
          </Route>
          <Route path='/capitals'>
            <Capitals/>
          </Route>
          <Route exact path='/continents'>
            <Continents />
          </Route>
          <Route exact path='/population'>
            <Population />
          </Route>
          <Route exact path='/flags'>
            <Flags countries={countries}/>
          </Route>
          <Route exact path='/languages'>
            <Languages />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
    </div>
  )
}


export default App;
