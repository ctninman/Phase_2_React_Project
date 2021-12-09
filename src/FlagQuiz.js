import {useState} from 'react'
import ActiveFlagQuiz from './ActiveFlagQuiz';
import StartScreen from './StartScreen';


function FlagQuiz ({countryData, flagHighScore, setFlagHighScore}) {

  let randomCountry = countryData[Math.floor(Math.random()*countryData.length)];
  let randomWrongOne = countryData[Math.floor(Math.random()*countryData.length)];
  let randomWrongTwo = countryData[Math.floor(Math.random()*countryData.length)];
  let randomWrongThree = countryData[Math.floor(Math.random()*countryData.length)];


  const [flagQuizCountry, setFlagQuizCountry] = useState(randomCountry)
  const [incorrectFlagOne, setIncorrectFlagOne] = useState(randomWrongOne)
  const [incorrectFlagTwo, setIncorrectFlagTwo] = useState(randomWrongTwo)
  const [incorrectFlagThree, setIncorrectFlagThree] = useState(randomWrongThree)

  function handleFlagAnswer (event) {
    console.log('rando', event.target.value);
    if (event.target.value === flagQuizCountry.name.common) {
      console.log("CORRECTAMUNDO")
    } else {
      console.log("No sirree Bob.")
    }
  }

  function setNextFlagQuestion () {
    console.log('clicky')
    let newRandomCorrectCountry = countryData[Math.floor(Math.random()*countryData.length)];
    let newRandomIncorrectOne = countryData[Math.floor(Math.random()*countryData.length)];
    let newRandomIncorrectTwo = countryData[Math.floor(Math.random()*countryData.length)];
    let newRandomIncorrectThree = countryData[Math.floor(Math.random()*countryData.length)];
    setFlagQuizCountry(newRandomCorrectCountry)
    setIncorrectFlagOne(newRandomIncorrectOne)
    setIncorrectFlagTwo(newRandomIncorrectTwo)
    setIncorrectFlagThree(newRandomIncorrectThree)
  }

  return (
    <div>
      {flagQuizCountry === randomCountry
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
          />}
    </div>
  )
}

export default FlagQuiz