function QuizHome ({continentHighScore, flagHighScore, capitalHighScore, populationHighScore}) {
  
  let totalScore = continentHighScore + flagHighScore + capitalHighScore + populationHighScore

  return (
    <div className='quiz-tv'>
      <h1 className='tab-header' style={{backgroundColor: 'black', color: 'white', marginLeft: '250px', marginRight: '250px'}}>Your Total Score: {totalScore}</h1>
      <h2>Continent High Score: {continentHighScore}</h2>
      <h2>Flag High Score: {flagHighScore}</h2>
      <h2>Capital High Score: {capitalHighScore}</h2>
      <h2>Population High Score: {populationHighScore}</h2>
    </div>
  )
}

export default QuizHome