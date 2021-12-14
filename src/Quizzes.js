import { Route, Switch, Link } from 'react-router-dom'
import { useState } from 'react'

import QuizHome from './QuizHome'
import CapitalQuiz from "./CapitalQuiz"
import ContinentQuiz from "./ContinentQuiz"
import FlagQuiz from "./FlagQuiz"
import PopulationQuiz from "./PopulationQuiz"

function Quizzes ({countryData, orderNumbers, fullUserObject}) {

    // *** STATE VARIABLES *** //
  const [continentHighScore, setContinentHighScore] = useState(fullUserObject.continentsHighScore)
  const [flagHighScore, setFlagHighScore] = useState(fullUserObject.flagsHighScore)
  const [capitalHighScore, setCapitalHighScore] = useState(fullUserObject.capitalsHighScore)
  const [populationHighScore, setPopulationHighScore] = useState(fullUserObject.populationHighScore)

    // *** JSX *** //
  return (
    <>
      <div className='quiz-page'>
        <h1 className='tab-header'>Quizzes</h1>
        <Link to="/quizzes" className='quiz-menu' activeStyle={{background: "#93C572"}}>Quiz Home</Link>
        <Link to="/quizzes/population-quiz" className='quiz-menu'>Population Quiz</Link>
        <Link to="/quizzes/flag-quiz" className='quiz-menu'>Flag Quiz</Link>
        <Link to="/quizzes/continent-quiz" className='quiz-menu'>Continent Quiz</Link>
        <Link to="/quizzes/capital-quiz" className='quiz-menu'>Capital Quiz</Link>
        <Switch>
          <Route exact path='/quizzes'>
            <QuizHome 
              continentHighScore={continentHighScore}
              populationHighScore={populationHighScore}
              flagHighScore={flagHighScore}
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
              fullUserObject={fullUserObject}/>
          </Route>
          <Route path='/quizzes/flag-quiz' >
            <FlagQuiz 
              className='quiz-menu' 
              countryData={countryData}
              flagHighScore={flagHighScore}
              setFlagHighScore={setFlagHighScore}
              fullUserObject={fullUserObject}/>
          </Route>
          <Route path='/quizzes/continent-quiz'> 
            <ContinentQuiz 
              className='quiz-menu' 
              countryData={countryData}
              continentHighScore={continentHighScore}
              setContinentHighScore={setContinentHighScore}
              fullUserObject={fullUserObject}/>
          </Route>
          <Route path='/quizzes/capital-quiz' >
            <CapitalQuiz 
              className='quiz-menu' 
              countryData={countryData}
              capitalHighScore={capitalHighScore}
              setCapitalHighScore={setCapitalHighScore}
              fullUserObject={fullUserObject}/>
          </Route>
        </Switch>
      </div>
    </>
  )
}

export default Quizzes