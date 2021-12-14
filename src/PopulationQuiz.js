import {useState} from 'react'
import { useHistory } from 'react-router-dom';
import ActivePopulationQuiz from './ActivePopulationQuiz';
import StartScreen from './StartScreen';


function PopulationQuiz ({countryData, orderNumbers, populationHighScore, setPopulationHighScore, fullUserObject}) {

  let history = useHistory()
  let newRandomCorrectCountry;
  let newRandomIncorrectOne;
  let newRandomIncorrectTwo;
  let newRandomIncorrectThree;

    // *** STATE VARIABLES *** //
  const [orderedCountriesArray, setOrderedContriesArray] = useState([]) 
  const [populationResponseGiven, setPopulationResponseGiven] = useState(false)
  const [currentPopulationQuestion, setCurrentPopulationQuestion] = useState(0)
  const [populationQuizScore, setPopulationQuizScore] = useState (0)


  function resetButtonColors () {
    let populationButtons = document.getElementsByClassName("population-button");
    let i;
    for (i = 0; i < populationButtons.length; i++) {
      populationButtons[i].style.backgroundColor = "lightgray";
      populationButtons[i].style.color = "black";
    }
  }

  function checkForDuplicates () {
    while (newRandomCorrectCountry === newRandomIncorrectOne) {
      newRandomIncorrectOne = countryData[Math.floor(Math.random()*countryData.length)]
    }
    while (newRandomCorrectCountry === newRandomIncorrectTwo) {
      newRandomIncorrectTwo = countryData[Math.floor(Math.random()*countryData.length)]
    }
    while (newRandomCorrectCountry === newRandomIncorrectThree) {
      newRandomIncorrectThree = countryData[Math.floor(Math.random()*countryData.length)]
    }
    while (newRandomIncorrectOne === newRandomIncorrectTwo) {
      newRandomIncorrectTwo = countryData[Math.floor(Math.random()*countryData.length)]
    }
    while (newRandomIncorrectOne === newRandomIncorrectThree) {
      newRandomIncorrectThree = countryData[Math.floor(Math.random()*countryData.length)]
    }
    while (newRandomIncorrectTwo === newRandomIncorrectThree) {
      newRandomIncorrectThree = countryData[Math.floor(Math.random()*countryData.length)]
    }
  }

  function handlePopulationAnswer (event) {
    if (populationResponseGiven === false) {
      if (event.target.value === orderedCountriesArray[0].name.common) {
        event.target.style.backgroundColor = 'green'
        event.target.style.color = 'white'
        event.target.style.borderColor = 'black'
        setPopulationQuizScore(populationQuizScore + 1)
      } else {
        event.target.style.backgroundColor = 'red'
        document.getElementById('correct-answer').style.backgroundColor = 'green'
     }
      setPopulationResponseGiven(true)
    }
  }

  
  function setNextPopulationQuestion () {
    let newRandomCorrectCountry = countryData[Math.floor(Math.random()*countryData.length)];
    let newRandomIncorrectOne = countryData[Math.floor(Math.random()*countryData.length)];
    let newRandomIncorrectTwo = countryData[Math.floor(Math.random()*countryData.length)];
    let newRandomIncorrectThree = countryData[Math.floor(Math.random()*countryData.length)];  
    checkForDuplicates() 
    let newRandomCountriesArray = [newRandomCorrectCountry, newRandomIncorrectOne, newRandomIncorrectTwo, newRandomIncorrectThree]
    setOrderedContriesArray(newRandomCountriesArray.sort(orderNumbers))
    let nextQuestion = currentPopulationQuestion + 1
    setCurrentPopulationQuestion(nextQuestion)
    setPopulationResponseGiven(false)
    resetButtonColors()
    if (currentPopulationQuestion >= 25){
      if (populationQuizScore > populationHighScore) {
        setPopulationHighScore(populationQuizScore)
        patchUserData()
        document.getElementById('population-quiz-tv').innerHTML = `<h1>NEW HIGH SCORE!</h1> <h1>Your Score: ${populationQuizScore}</h1> <button id='newHS'>View High Scores</button>`
        document.getElementById('newHS').addEventListener('click', function () {
          history.push('/quizzes')
        })
      } else if (populationQuizScore <= populationHighScore) {
        document.getElementById('population-quiz-tv').innerHTML = `<h1>Your Score: ${populationQuizScore}</h1> <button id="newHS">View High Scores</button>`
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
      body: JSON.stringify({populationHighScore: populationQuizScore}),
    })
  }

    // *** JSX *** //
  return (
    <div>
      {currentPopulationQuestion === 0
        ? 
        <StartScreen 
          startQuiz={setNextPopulationQuestion}
          message={'POPULATION - High Score:'}
          highScore={populationHighScore}/> 
        : 
        <ActivePopulationQuiz
          orderedCountriesArray={orderedCountriesArray}
          populationResponseGiven={populationResponseGiven}
          handlePopulationAnswer={handlePopulationAnswer}
          setNextPopulationQuestion={setNextPopulationQuestion}
          populationQuizScore={populationQuizScore}
          fullUserObject={fullUserObject}
          currentPopulationQuestion={currentPopulationQuestion}
        />}
    </div>
  )
}

export default PopulationQuiz

