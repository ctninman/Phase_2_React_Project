import {useState} from 'react'
import { useHistory } from 'react-router-dom';
import StartScreen from './StartScreen';
import ActiveContinentQuiz from './ActiveContinentQuiz';

function ContinentQuiz ({countryData, continentHighScore, setContinentHighScore}) {
  
  let history = useHistory ()

  let randomCountry = countryData[Math.floor(Math.random()*countryData.length)];

  const [continentQuizCountry, setContinentQuizCountry] = useState(randomCountry)
  const [continentResponseGiven, setContinentResponseGiven] = useState(false)
  const [currentContinentQuestion, setCurrentContinentQuestion] = useState(0)
  const [continentQuizScore, setContinentQuizScore] = useState (0)

  function resetButtonColors () {
    let continentButtons = document.getElementsByClassName("continent-button");
    let i;
    for (i = 0; i < continentButtons.length; i++) {
      continentButtons[i].style.backgroundColor = "white";
      continentButtons[i].style.color = "red";
    }
  }

  function handleAnswer (event) {
    if (continentResponseGiven === false) {
      if (event.target.name === continentQuizCountry.continents[0]) {
        event.target.style.backgroundColor = 'green'
        setContinentQuizScore(continentQuizScore + 1)
      } else {
        event.target.style.backgroundColor = 'red'
        event.target.style.color = 'white'
      }
      setContinentResponseGiven(true)
    }
  }



  function setNextQuestion () {
    let newRandomCountry = countryData[Math.floor(Math.random()*countryData.length)];
    setContinentQuizCountry(newRandomCountry)
    let nextQuestion = currentContinentQuestion + 1
    setCurrentContinentQuestion(nextQuestion)
    setContinentResponseGiven(false)
    resetButtonColors()
    if (currentContinentQuestion >= 5){
      if (continentQuizScore > continentHighScore) {
        setContinentHighScore(continentQuizScore)
        document.getElementById('continent-quiz-tv').innerHTML = `<h1>NEW HIGH SCORE!</h1> <h1>Your Score: ${continentQuizScore}</h1> <button id='newHS'>View High Scores</button>`
        document.getElementById('newHS').addEventListener('click', function () {
          history.push('/quizzes')
        })
      } else if (continentQuizScore <= continentHighScore) {
        document.getElementById('continent-quiz-tv').innerHTML = `<h1>Your Score: ${continentQuizScore}</h1> <button id="newHS">View High Scores</button>`
        document.getElementById('newHS').addEventListener('click', function () {
          history.push('/quizzes')
        })
      }
    }
  }
  
  return (
    <div>
      {continentQuizCountry === randomCountry 
        ? 
        <StartScreen 
          startQuiz={setNextQuestion}
          message={'Population High Score:'}
          highScore={continentHighScore}/> 
        : 
        <ActiveContinentQuiz 
          setNextQuestion={setNextQuestion} 
          continentQuizCountry={continentQuizCountry} 
          handleAnswer={handleAnswer}
          currentContinentQuestion={currentContinentQuestion}
          continentQuizScore={continentQuizScore}/>
        }
    </div>
  )
}

export default ContinentQuiz