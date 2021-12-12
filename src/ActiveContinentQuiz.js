function ActiveContinentQuiz ({currentContinentQuestion, continentQuizScore, handleAnswer, continentQuizCountry, setNextQuestion}) {
  
  return (
    <div className='quiz-tv' id='continent-quiz-tv'>
      <h1 className='menu-icon'>ContinentQuiz  Question:{currentContinentQuestion}/25  Score:{continentQuizScore}</h1>
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
        <button onClick={setNextQuestion}>Next</button>
      </div>
    </div>
  )
}

export default ActiveContinentQuiz