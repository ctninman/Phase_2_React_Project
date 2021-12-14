function StartScreen ({startQuiz, message, highScore}) {
  
  return(
    <div className={'quiz-tv'}>
      <h1>{message} {highScore}</h1>
      <button onClick={startQuiz}>Start New Quiz</button>
    </div>
  )
}

export default StartScreen