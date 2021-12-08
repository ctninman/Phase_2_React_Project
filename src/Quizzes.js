import { Route, Switch, Link } from 'react-router-dom'

import CapitalQuiz from "./CapitalQuiz"
import ContinentQuiz from "./ContinentQuiz"
import FlagQuiz from "./FlagQuiz"
import PopulationQuiz from "./PopulationQuiz"


function Quizzes ({countryData}) {
  return (
    <>
      <div className='quiz-page'>
        <h1>Quizzes</h1>
        <Link to="/quizzes/population-quiz" className='quiz-menu'>Population Quiz</Link>
        <Link to="/quizzes/flag-quiz" className='quiz-menu'>Flag Quiz</Link>
        <Link to="/quizzes/continent-quiz" className='quiz-menu'>Continent Quiz</Link>
        <Link to="/quizzes/capital-quiz" className='quiz-menu'>Capital Quiz</Link>
        <Switch>
          <Route exact path='/quizzes' />
          <Route exact path='/quizzes/population-quiz' >
            <PopulationQuiz className='quiz-menu' countryData={countryData}/>
          </Route>
          <Route path='/quizzes/flag-quiz' >
            <FlagQuiz className='quiz-menu' countryData={countryData}/>
          </Route>
          <Route path='/quizzes/continent-quiz'> 
            <ContinentQuiz className='quiz-menu' countryData={countryData}/>
          </Route>
          <Route path='/quizzes/capital-quiz' >
            <CapitalQuiz className='quiz-menu' countryData={countryData}/>
          </Route>
        </Switch>
      </div>
    </>
  )
}

export default Quizzes

{/* <Switch>
<Route exact path='/continent-quiz'>
    <ContinentQuiz countryData={countryData}/>
  </Route>
  <Route path='/capital-quiz'>
    <CapitalQuiz countryData={countryData}/>
  </Route>
  <Route path='/population-quiz'>
    <PopulationQuiz countryData={countryData}/>
  </Route>
  <Route exact path='/flag-quiz'>
    <FlagQuiz countryData={countryData}/>
  </Route>
</Switch> */}