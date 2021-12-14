function ActiveContinentQuiz ({currentContinentQuestion, continentQuizScore, continentResponseGiven, handleAnswer, continentQuizCountry, setNextQuestion}) {
  
  function continentOnClick () {
    if (continentResponseGiven === true) {
      setNextQuestion()
    }
  }

  return (
    <div className='quiz-tv' id='continent-quiz-tv'>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
        <h1 className='menu-icon'>Continent Quiz</h1>
        <h1 style={{paddingRight: '25px'}}>Question: {currentContinentQuestion}/25 {'   '} Score:{continentQuizScore}</h1>
      </div>
      <div>
        <h1 className='tab-header' style={{backgroundColor: 'black', color: 'white', marginLeft: '150px', marginRight: '150px'}}>In what continent is {continentQuizCountry.name.common} located?</h1>
      </div>
      <div>
        <button className={'continent-button'} onClick={handleAnswer} name="Africa">Africa</button>
        <button className={'continent-button'} onClick={handleAnswer} name="Asia">Asia</button>
        <button className={'continent-button'} onClick={handleAnswer} name="Europe">Europe</button>
        <button className={'continent-button'} onClick={handleAnswer} name="Oceania">Oceania</button>
        <button className={'continent-button'} onClick={handleAnswer} name="North America">North America</button>
        <button className={'continent-button'} onClick={handleAnswer} name="South America">South America</button>
      </div>
      <div>
        <button onClick={continentOnClick} style={{backgroundColor: '#93C572', color: 'black', borderColor: 'black'}}>Next</button>
      </div>
    </div>
  )
}

export default ActiveContinentQuiz