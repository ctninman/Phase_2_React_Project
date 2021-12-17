import { Route, Switch, NavLink } from 'react-router-dom'

import QuizHome from './QuizHome'
import CapitalQuiz from "./CapitalQuiz"
import ContinentQuiz from "./ContinentQuiz"
import FlagQuiz from "./FlagQuiz"
import PopulationQuiz from "./PopulationQuiz"
import { useEffect } from 'react'

function Quizzes ({countryData, 
  orderNumbers, 
  fullUserObject, 
  setUserScore, 
  userScore, 
  continentHighScore, 
  setContinentHighScore, 
  capitalHighScore, 
  setCapitalHighScore, 
  flagHighScore, 
  setFlagHighScore, 
  populationHighScore,
  setPopulationHighScore}) {

    useEffect (() => {
      document.title = "WQW - Quizzes"
    }, [] )

  // function checkForDuplicates (a, b, c, d, setterB, setterC, setterD, countryArray) {
  //   while (a === b) {
  //     setterB(countryArray[Math.floor(Math.random()*countryArray.length)])
  //   }
  //   while (a === c) {
  //     setterC(countryArray[Math.floor(Math.random()*countryArray.length)])
  //   }
  //   while (a === d) {
  //     setterD(countryArray[Math.floor(Math.random()*countryArray.length)])
  //   }
  //   while (b === c) {
  //     setterC(countryArray[Math.floor(Math.random()*countryArray.length)])
  //   }
  //   while (b === d) {
  //     setterD(countryArray[Math.floor(Math.random()*countryArray.length)])
  //   }
  //   while (c === d) {
  //     setterD(countryArray[Math.floor(Math.random()*countryArray.length)])
  //   }
  // }

    // *** JSX *** //
  return (
    <>
      <div className='quiz-page'>
        <h1 className='tab-header'>Quizzes</h1>
        <NavLink to="/quizzes"  exact className='quiz-menu' activeStyle={{background: "#93C572", color: 'black'}}>Quiz Home</NavLink>
        <NavLink to="/quizzes/population-quiz" className='quiz-menu' activeStyle={{background: "#93C572", color: 'black'}}>Population Quiz</NavLink>
        <NavLink to="/quizzes/flag-quiz" className='quiz-menu' activeStyle={{background: "#93C572", color: 'black'}}>Flag Quiz</NavLink>
        <NavLink to="/quizzes/continent-quiz" className='quiz-menu' activeStyle={{background: "#93C572", color: 'black'}}>Continent Quiz</NavLink>
        <NavLink to="/quizzes/capital-quiz" className='quiz-menu' activeStyle={{background: "#93C572", color: 'black'}}>Capital Quiz</NavLink>
        <Switch>
          <Route exact path='/quizzes'>
            <QuizHome 
              continentHighScore={continentHighScore}
              populationHighScore={populationHighScore}
              flagHighScore={flagHighScore}
              userScore={userScore}
              capitalHighScore={capitalHighScore}
              fullUserObject={fullUserObject}/>
          </Route>
          <Route exact path='/quizzes/population-quiz' >
            <PopulationQuiz 
              className='quiz-menu' 
              countryData={countryData} 
              orderNumbers={orderNumbers}
              populationHighScore={populationHighScore}
              setPopulationHighScore={setPopulationHighScore}
              setUserScore={setUserScore}
              fullUserObject={fullUserObject}/>
          </Route>
          <Route path='/quizzes/flag-quiz' >
            <FlagQuiz 
              className='quiz-menu' 
              countryData={countryData}
              flagHighScore={flagHighScore}
              setFlagHighScore={setFlagHighScore}
              setUserScore={setUserScore}
              fullUserObject={fullUserObject}/>
          </Route>
          <Route path='/quizzes/continent-quiz'> 
            <ContinentQuiz 
              className='quiz-menu' 
              countryData={countryData}
              continentHighScore={continentHighScore}
              setContinentHighScore={setContinentHighScore}
              setUserScore={setUserScore}
              fullUserObject={fullUserObject}/>
          </Route>
          <Route path='/quizzes/capital-quiz' >
            <CapitalQuiz 
              className='quiz-menu' 
              countryData={countryData}
              capitalHighScore={capitalHighScore}
              setCapitalHighScore={setCapitalHighScore}
              setUserScore={setUserScore}
              fullUserObject={fullUserObject}/>
          </Route>
        </Switch>
      </div>
    </>
  )
}

export default Quizzes