function ActiveContinentQuiz ({handleAnswer, flagQuizCountry, setNextQuestion}) {
  
  return (
    <div className='quiz-tv'>
      <h1 className='menu-icon'>ContinentQuiz</h1>
      <div>
        <h1>In what continent is {flagQuizCountry.name.common} located?</h1>
      </div>
      <div>
        <button onClick={handleAnswer} name="Africa">Africa</button>
        <button onClick={handleAnswer} name="Asia">Asia</button>
        <button onClick={handleAnswer} name="Europe">Europe</button>
        <button onClick={handleAnswer} name="Oceania">Oceania</button>
        <button onClick={handleAnswer} name="North America">North America</button>
        <button onClick={handleAnswer} name="South America">South America</button>
      </div>
      <div>
        <button onClick={setNextQuestion}>Next</button>
      </div>
    </div>
  )
}

export default ActiveContinentQuiz