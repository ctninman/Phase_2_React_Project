function ActiveCapitalQuiz ({ capitalQuizCountry, incorrectOne, incorrectTwo, incorrectThree, handleCapitalAnswer, setNextCapitalQuestion}) {
  
    return (
    <div>
       <h1 className='menu-icon'>CapitalQuiz</h1>
      <div>
        <h1>{capitalQuizCountry.capital[0]} is the capital of which country?</h1>
      </div>
      <div>
        <button 
          name="Answer1" 
          value={capitalQuizCountry.name.common}
          onClick={handleCapitalAnswer}
        > {capitalQuizCountry.name.common} </button>
        <button 
          name="Answer2"
          value={incorrectOne.name.common}
          onClick={handleCapitalAnswer}
          > {incorrectOne.name.common} </button>
        <button 
        name="Answer3"
        value={incorrectTwo.name.common}
        onClick={handleCapitalAnswer}
        > {incorrectTwo.name.common} </button>
        <button 
          name="Answer4"
          value={incorrectThree.name.common}
          onClick={handleCapitalAnswer}
          > {incorrectThree.name.common} </button>
      </div>
      <div>
        <button onClick={setNextCapitalQuestion}>Next</button>
      </div>
    </div>
  )
}

export default ActiveCapitalQuiz