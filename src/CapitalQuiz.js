import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import ActiveCapitalQuiz from './ActiveCapitalQuiz'
import StartScreen from './StartScreen'


function CapitalQuiz ({countryData, capitalHighScore, setCapitalHighScore, fullUserObject, setUserScore, checkForDuplicates}) {
  
  let history = useHistory()

    // *** STATE VARIABLES *** //
  const [capitalQuizCountry, setCapitalQuizCountry] = useState({})
  const [incorrectOne, setIncorrectOne] = useState({})
  const [incorrectTwo, setIncorrectTwo] = useState({})
  const [incorrectThree, setIncorrectThree] = useState({})
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

  //  function checkForDuplicates (a, b, c, d, setterB, setterC, setterD, array) {
  //   while (capitalQuizCountry === incorrectOne) {
  //     setIncorrectOne(countryData[Math.floor(Math.random()*countryData.length)])
  //   }
  //   while (capitalQuizCountry === incorrectTwo) {
  //     setIncorrectTwo(countryData[Math.floor(Math.random()*countryData.length)])
  //   }
  //   while (capitalQuizCountry === incorrectThree) {
  //     setIncorrectThree(countryData[Math.floor(Math.random()*countryData.length)])
  //   }
  //   while (incorrectOne === incorrectTwo) {
  //     setIncorrectTwo(countryData[Math.floor(Math.random()*countryData.length)])
  //   }
  //   while (incorrectOne === incorrectThree) {
  //     setIncorrectThree(countryData[Math.floor(Math.random()*countryData.length)])
  //   }
  //   while (incorrectTwo === incorrectThree) {
  //     setIncorrectThree(countryData[Math.floor(Math.random()*countryData.length)])
  //   }
  // }

  function handleCapitalAnswer (event) {
    if (capitalResponseGiven === false) {
      if (event.target.value === capitalQuizCountry.name.common) {
        event.target.style.backgroundColor = 'green'
        event.target.style.color = 'white'
        event.target.style.borderColor = 'black'
        setCapitalQuizScore(capitalQuizScore + 1)
      } else {
        event.target.style.backgroundColor = 'red'
        document.getElementById('correct-answer').style.backgroundColor = 'green'
      }
      setCapitalResponseGiven(true)
    }
  }

  function setNextCapitalQuestion () {
    setCapitalQuizCountry(countryData[Math.floor(Math.random()*countryData.length)])
    setIncorrectOne(countryData[Math.floor(Math.random()*countryData.length)])
    setIncorrectTwo(countryData[Math.floor(Math.random()*countryData.length)])
    setIncorrectThree(countryData[Math.floor(Math.random()*countryData.length)])
    // checkForDuplicates(capitalQuizCountry, incorrectOne, incorrectTwo, incorrectThree, setIncorrectOne, setIncorrectTwo, setIncorrectThree, countryData)
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
    .then((res) => {
      return res.json()
    })
    .then(user => setUserScore(user.flagsHighScore + user.continentsHighScore + user.capitalsHighScore + user.populationHighScore));
  }

    // *** JSX *** //
  return (
    <div>
      {currentCapitalQuestion === 0
        ? 
        <StartScreen 
          startQuiz={setNextCapitalQuestion}
          message={'CAPITALS - High Score:'}
          highScore={capitalHighScore}/> 
        : 
        <ActiveCapitalQuiz
          capitalQuizCountry={capitalQuizCountry}
          capitalResponseGiven={capitalResponseGiven}
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