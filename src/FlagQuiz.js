import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import ActiveFlagQuiz from './ActiveFlagQuiz';
import StartScreen from './StartScreen';


function FlagQuiz ({countryData, flagHighScore, setFlagHighScore, fullUserObject}) {

  let history = useHistory()

  let randomCountry = countryData[Math.floor(Math.random()*countryData.length)];
  let randomWrongOne = countryData[Math.floor(Math.random()*countryData.length)];
  let randomWrongTwo = countryData[Math.floor(Math.random()*countryData.length)];
  let randomWrongThree = countryData[Math.floor(Math.random()*countryData.length)];


  const [flagQuizCountry, setFlagQuizCountry] = useState(countryData[Math.floor(Math.random()*countryData.length)])
  const [incorrectFlagOne, setIncorrectFlagOne] = useState(countryData[Math.floor(Math.random()*countryData.length)])
  const [incorrectFlagTwo, setIncorrectFlagTwo] = useState(countryData[Math.floor(Math.random()*countryData.length)])
  const [incorrectFlagThree, setIncorrectFlagThree] = useState(countryData[Math.floor(Math.random()*countryData.length)])
  const [flagResponseGiven, setFlagResponseGiven] = useState(false)
  const [currentFlagQuestion, setCurrentFlagQuestion] = useState(0)
  const [flagQuizScore, setFlagQuizScore] = useState (0)

  function resetButtonColors () {
    let flagButtons = document.getElementsByClassName("flag-button");
    let i;
    for (i = 0; i < flagButtons.length; i++) {
      flagButtons[i].style.backgroundColor = "lightgray";
      flagButtons[i].style.color = "black";
    }
  }

  function handleFlagAnswer (event) {
    if (flagResponseGiven === false) {
      if (event.target.value === flagQuizCountry.name.common) {
        event.target.style.backgroundColor = 'green'
        event.target.style.color = 'white'
        setFlagQuizScore(flagQuizScore + 1)
      } else {
        event.target.style.backgroundColor = 'red'
        event.target.style.color = 'white'
        document.getElementById('correct-answer').style.backgroundColor = 'green'
        document.getElementById('correct-answer').style.color = 'white'
      }
      setFlagResponseGiven(true)
    }
  }

  function setNextFlagQuestion () {
    let newRandomCorrectCountry = countryData[Math.floor(Math.random()*countryData.length)];
    let newRandomIncorrectOne = countryData[Math.floor(Math.random()*countryData.length)];
    let newRandomIncorrectTwo = countryData[Math.floor(Math.random()*countryData.length)];
    let newRandomIncorrectThree = countryData[Math.floor(Math.random()*countryData.length)];
    setFlagQuizCountry(countryData[Math.floor(Math.random()*countryData.length)])
    setIncorrectFlagOne(countryData[Math.floor(Math.random()*countryData.length)])
    setIncorrectFlagTwo(countryData[Math.floor(Math.random()*countryData.length)])
    setIncorrectFlagThree(countryData[Math.floor(Math.random()*countryData.length)])

    let nextQuestion = currentFlagQuestion + 1
    setCurrentFlagQuestion(nextQuestion)
    setFlagResponseGiven(false)
    resetButtonColors()
    if (currentFlagQuestion >= 25){
      if (flagQuizScore > flagHighScore) {
        setFlagHighScore(flagQuizScore)
        patchUserData()
        document.getElementById('flag-quiz-tv').innerHTML = `<h1>NEW HIGH SCORE!</h1> <h1>Your Score: ${flagQuizScore}</h1> <button id='newHS'>View High Scores</button>`
        document.getElementById('newHS').addEventListener('click', function () {
          history.push('/quizzes')
        })
      } else if (flagQuizScore <= flagHighScore) {
        document.getElementById('flag-quiz-tv').innerHTML = `<h1>Your Score: ${flagQuizScore}</h1> <button id="newHS">View High Scores</button>`
        document.getElementById('newHS').addEventListener('click', function () {
          history.push('/quizzes')
        })
      }
    }
  }

  const patchUserData = function () {  
    fetch(`http://localhost:3000/users/${fullUserObject.id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({flagsHighScore: flagQuizScore}),
    })
  }

  return (
    <div>
      {currentFlagQuestion === 0
        ? 
        <StartScreen 
          startQuiz={setNextFlagQuestion}
          message={'Flags High Score'}
          highScore={flagHighScore}/> 
        : 
        <ActiveFlagQuiz
          flagQuizCountry={flagQuizCountry}
          incorrectFlagOne={incorrectFlagOne}
          incorrectFlagTwo={incorrectFlagTwo}
          incorrectFlagThree={incorrectFlagThree}
          handleFlagAnswer={handleFlagAnswer}
          setNextFlagQuestion={setNextFlagQuestion}
          flagQuizScore={flagQuizScore}
          currentFlagQuestion={currentFlagQuestion}
          />}
    </div>
  )
}

export default FlagQuiz