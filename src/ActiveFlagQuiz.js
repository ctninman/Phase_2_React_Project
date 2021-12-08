function ActiveFlagQuiz ({ flagQuizCountry, incorrectFlagOne, incorrectFlagTwo, incorrectFlagThree, handleFlagAnswer, setNextFlagQuestion}) {
  
  return (
  <div>
     <h1 className='menu-icon'>FlagQuiz</h1>
    <div>
      <img src={flagQuizCountry.flags.png} />
      <h1>Which country's flag is this?</h1>
    </div>
    <div>
      <button 
        name="flagAnswer1" 
        value={flagQuizCountry.name.common}
        onClick={handleFlagAnswer}
      > {flagQuizCountry.name.common} </button>
      <button 
        name="flagAnswer2"
        value={incorrectFlagOne.name.common}
        onClick={handleFlagAnswer}
        > {incorrectFlagOne.name.common} </button>
      <button 
      name="flagAnswer3"
      value={incorrectFlagTwo.name.common}
      onClick={handleFlagAnswer}
      > {incorrectFlagTwo.name.common} </button>
      <button 
        name="Answer4"
        value={incorrectFlagThree.name.common}
        onClick={handleFlagAnswer}
        > {incorrectFlagThree.name.common} </button>
    </div>
    <div>
      <button onClick={setNextFlagQuestion}>Next</button>
    </div>
  </div>
)
}

export default ActiveFlagQuiz