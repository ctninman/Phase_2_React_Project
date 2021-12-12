import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import ActiveCapitalQuiz from './ActiveCapitalQuiz'
import StartScreen from './StartScreen'


function CapitalQuiz ({countryData, capitalHighScore, setCapitalHighScore, fullUserObject}) {
  
  let history = useHistory()

  let randomCountry = countryData[Math.floor(Math.random()*countryData.length)];
  let randomWrongOne = countryData[Math.floor(Math.random()*countryData.length)];
  let randomWrongTwo = countryData[Math.floor(Math.random()*countryData.length)];
  let randomWrongThree = countryData[Math.floor(Math.random()*countryData.length)];


  const [capitalQuizCountry, setCapitalQuizCountry] = useState(randomCountry)
  const [incorrectOne, setIncorrectOne] = useState(randomWrongOne)
  const [incorrectTwo, setIncorrectTwo] = useState(randomWrongTwo)
  const [incorrectThree, setIncorrectThree] = useState(randomWrongThree)
  const [capitalResponseGiven, setCapitalResponseGiven] = useState(false)
  const [currentCapitalQuestion, setCurrentCapitalQuestion] = useState(0)
  const [capitalQuizScore, setCapitalQuizScore] = useState (0)


  function resetButtonColors () {
    let capitalButtons = document.getElementsByClassName("capital-button");
    let i;
    for (i = 0; i < capitalButtons.length; i++) {
      capitalButtons[i].style.backgroundColor = "lightgray";
      capitalButtons[i].style.color = "black";
    }
  }

  function handleCapitalAnswer (event) {
    if (capitalResponseGiven === false) {
      if (event.target.value === capitalQuizCountry.name.common) {
        event.target.style.backgroundColor = 'green'
        setCapitalQuizScore(capitalQuizScore + 1)
      } else {
        event.target.style.backgroundColor = 'red'
        event.target.style.color = 'white'
        document.getElementById('correct-answer').style.backgroundColor = 'green'
      }
      setCapitalResponseGiven(true)
    }
  }

  function setNextCapitalQuestion () {
    let newRandomCorrectCountry = countryData[Math.floor(Math.random()*countryData.length)];
    let newRandomIncorrectOne = countryData[Math.floor(Math.random()*countryData.length)];
    let newRandomIncorrectTwo = countryData[Math.floor(Math.random()*countryData.length)];
    let newRandomIncorrectThree = countryData[Math.floor(Math.random()*countryData.length)];
    setCapitalQuizCountry(newRandomCorrectCountry)
    setIncorrectOne(newRandomIncorrectOne)
    setIncorrectTwo(newRandomIncorrectTwo)
    setIncorrectThree(newRandomIncorrectThree)


    let nextCapitalQuestion = currentCapitalQuestion + 1
    setCurrentCapitalQuestion(nextCapitalQuestion)
    setCapitalResponseGiven(false)
    resetButtonColors()
    if (currentCapitalQuestion >= 25){
      if (capitalQuizScore > capitalHighScore) {
        setCapitalHighScore(capitalQuizScore)
        patchUserData()
        document.getElementById('capital-quiz-tv').innerHTML = `<h1>NEW HIGH SCORE!</h1> <h1>Your Score: ${capitalQuizScore}</h1> <button id='newHS'>View High Scores</button>`
        document.getElementById('newHS').addEventListener('click', function () {
          history.push('/quizzes')
        })
      } else if (capitalQuizScore <= capitalHighScore) {
        document.getElementById('capital-quiz-tv').innerHTML = `<h1>Your Score: ${capitalQuizScore}</h1> <button id="newHS">View High Scores</button>`
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
      body: JSON.stringify({capitalsHighScore: capitalQuizScore}),
    })
  }

  return (
    <div>
      {capitalQuizCountry === randomCountry
        ? 
        <StartScreen 
          startQuiz={setNextCapitalQuestion}
          message={'Capitals High Score:'}
          highScore={capitalHighScore}/> 
        : 
        <ActiveCapitalQuiz
          capitalQuizCountry={capitalQuizCountry}
          incorrectOne={incorrectOne}
          incorrectTwo={incorrectTwo}
          incorrectThree={incorrectThree}
          handleCapitalAnswer={handleCapitalAnswer}
          setNextCapitalQuestion={setNextCapitalQuestion}
          currentCapitalQuestion={currentCapitalQuestion}
          capitalQuizScore={capitalQuizScore}
          />}
    </div>
  )
}

export default CapitalQuiz