function QuizHome ({continentHighScore, flagHighScore, capitalHighScore, populationHighScore, fullUserObject}) {
  
  let totalScore = fullUserObject.continentsHighScore + fullUserObject.flagsHighScore + fullUserObject.capitalsHighScore + fullUserObject.populationHighScore

  let stateTotalScore = continentHighScore + flagHighScore + capitalHighScore + populationHighScore

  return (
    <div className='quiz-tv'>
      <h1 style={{color: 'red'}}>{fullUserObject.userName === "Player" ? 'Enter a username to save your high scores' : null}</h1>
      <h1 
        className='tab-header' 
        style={{backgroundColor: 'black', 
        color: 'white', marginLeft: '15%', 
        marginRight: '15%'}}>
          {fullUserObject.userName}'s Total Score: 
        {stateTotalScore > totalScore
          ?
        stateTotalScore
          :
        totalScore}
        </h1>
      <h2>Continents High Score: 
        {continentHighScore > fullUserObject.continentsHighScore 
          ?
        continentHighScore
          :
        ` ${fullUserObject.continentsHighScore}`}
      </h2>
      <h2>Flags High Score: 
        {flagHighScore > fullUserObject.flagsHighScore 
          ?
        flagHighScore
          :
        ` ${fullUserObject.flagsHighScore}`}
      </h2>
      <h2>Capitals High Score: 
        {capitalHighScore > fullUserObject.capitalsHighScore 
          ?
        capitalHighScore
          :
        ` ${fullUserObject.capitalsHighScore}`}
      </h2>
      <h2>Population High Score: 
        {populationHighScore > fullUserObject.populationHighScore 
          ?
        populationHighScore
          :
        ` ${fullUserObject.populationHighScore}`}
      </h2>
    </div>
  )
}

export default QuizHome