function QuizHome ({continentHighScore, flagHighScore, capitalHighScore, populationHighScore, fullUserObject}) {
  
  let totalScore = continentHighScore + flagHighScore + capitalHighScore + populationHighScore

  return (
    <div className='quiz-tv'>
      <h1 className='tab-header' style={{backgroundColor: 'black', color: 'white', marginLeft: '15%', marginRight: '15%'}}>{fullUserObject.userName}'s Total Score: {totalScore}</h1>
      <h2>Continents High Score: {continentHighScore}</h2>
      <h2>Flags High Score: {flagHighScore}</h2>
      <h2>Capitals High Score: {capitalHighScore}</h2>
      <h2>Population High Score: {populationHighScore}</h2>
    </div>
  )
}

export default QuizHome