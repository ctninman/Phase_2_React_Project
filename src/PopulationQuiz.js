import {useState} from 'react'
import ActivePopulationQuiz from './ActivePopulationQuiz';
import StartScreen from './StartScreen';


function PopulationQuiz ({countryData, orderNumbers}) {

  let randomCountry = countryData[Math.floor(Math.random()*countryData.length)];
  let randomWrongOne = countryData[Math.floor(Math.random()*countryData.length)];
  let randomWrongTwo = countryData[Math.floor(Math.random()*countryData.length)];
  let randomWrongThree = countryData[Math.floor(Math.random()*countryData.length)];
  let randomCountryArray = [randomCountry, randomWrongOne, randomWrongTwo, randomWrongThree]

console.log('rca', randomCountryArray);

  const [orderedCountriesArray, setOrderedContriesArray] = useState(randomCountryArray) 


  function handlePopulationAnswer (event) {
    console.log('rando', event.target.value);
    if (event.target.value === orderedCountriesArray[0].name.common) {
      console.log("CORRECTAMUNDO")
    } else {
      console.log("No sirree Bob.")
    }
  }

  
  function setNextPopulationQuestion () {
    console.log('clicky')
    let newRandomCorrectCountry = countryData[Math.floor(Math.random()*countryData.length)];
    let newRandomIncorrectOne = countryData[Math.floor(Math.random()*countryData.length)];
    let newRandomIncorrectTwo = countryData[Math.floor(Math.random()*countryData.length)];
    let newRandomIncorrectThree = countryData[Math.floor(Math.random()*countryData.length)];
    let newRandomCountriesArray = [newRandomCorrectCountry, newRandomIncorrectOne, newRandomIncorrectTwo, newRandomIncorrectThree]
    setOrderedContriesArray(newRandomCountriesArray.sort(orderNumbers))
  }

  return (
    <div>
      {orderedCountriesArray === randomCountryArray
        ? 
        <StartScreen startQuiz={setNextPopulationQuestion}/> 
        : 
        <ActivePopulationQuiz
          orderedCountriesArray={orderedCountriesArray}
          handlePopulationAnswer={handlePopulationAnswer}
          setNextPopulationQuestion={setNextPopulationQuestion}
        />}
    </div>
  )
}

export default PopulationQuiz

