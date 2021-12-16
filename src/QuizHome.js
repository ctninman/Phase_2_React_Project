function QuizHome ({continentHighScore, flagHighScore, capitalHighScore, populationHighScore, fullUserObject, userScore}) {

  return (
    <div className='quiz-tv'>
      <h1 style={{color: 'red'}}>{fullUserObject.userName === "Player" ? 'Enter a username to save your high scores' : null}</h1>
      <h1 
        className='tab-header' 
        style={{backgroundColor: 'black', 
        color: 'white', marginLeft: '15%', 
        marginRight: '15%'}}>
          {fullUserObject.userName}'s Total Score: {userScore}
        </h1>
      <h2>
        Continents High Score: {continentHighScore}
      </h2>
      <h2>
        Flags High Score: {flagHighScore}
      </h2>
      <h2>
        Capitals High Score: {capitalHighScore}
      </h2>
      <h2>
        Population High Score: {populationHighScore}
      </h2>
    </div>
  )
}

export default QuizHome