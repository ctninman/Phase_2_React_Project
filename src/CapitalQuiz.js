import {useState} from 'react'
import ActiveCapitalQuiz from './ActiveCapitalQuiz'
import StartScreen from './StartScreen'


function CapitalQuiz ({countryData, capitalHighScore, setCapitalHighScore}) {
  
  let randomCountry = countryData[Math.floor(Math.random()*countryData.length)];
  let randomWrongOne = countryData[Math.floor(Math.random()*countryData.length)];
  let randomWrongTwo = countryData[Math.floor(Math.random()*countryData.length)];
  let randomWrongThree = countryData[Math.floor(Math.random()*countryData.length)];


  const [capitalQuizCountry, setCapitalQuizCountry] = useState(randomCountry)
  const [incorrectOne, setIncorrectOne] = useState(randomWrongOne)
  const [incorrectTwo, setIncorrectTwo] = useState(randomWrongTwo)
  const [incorrectThree, setIncorrectThree] = useState(randomWrongThree)

  function handleCapitalAnswer (event) {
    console.log('rando', event.target.value);
    if (event.target.value === capitalQuizCountry.name.common) {
      console.log("CORRECTAMUNDO")
    } else {
      console.log("No sirree Bob.")
    }
  }

  function setNextCapitalQuestion () {
    console.log('clicky')
    let newRandomCorrectCountry = countryData[Math.floor(Math.random()*countryData.length)];
    let newRandomIncorrectOne = countryData[Math.floor(Math.random()*countryData.length)];
    let newRandomIncorrectTwo = countryData[Math.floor(Math.random()*countryData.length)];
    let newRandomIncorrectThree = countryData[Math.floor(Math.random()*countryData.length)];
    setCapitalQuizCountry(newRandomCorrectCountry)
    setIncorrectOne(newRandomIncorrectOne)
    setIncorrectTwo(newRandomIncorrectTwo)
    setIncorrectThree(newRandomIncorrectThree)
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
          />}
    </div>
  )
}

export default CapitalQuiz