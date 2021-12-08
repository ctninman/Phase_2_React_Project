import {useState} from 'react'

function PopulationQuiz ({countryData}) {

  //   const [incorrectOne, setIncorrectOne  = useState(countryData[Math.floor(Math.random()*countryData.length)]);
  //   let incorrectResponseTwo = countryData[Math.floor(Math.random()*countryData.length)];
  //   let incorrectResponseThree = countryData[Math.floor(Math.random()*countryData.length)];
  //   let correctResponse = countryData[Math.floor(Math.random()*countryData.length)];

  // const [populationQuizCountry, setPopulationQuizCountry] = useState({countryOne, countryTwo, countryThree, countryFour})


  // function handleAnswer (event) {
  //   console.log('rando', populationQuizCountry.continents[0], populationQuizCountry.name.common);
  //   if (event.target.name === flagQuizCountry.continents[0]) {
  //     console.log("CORRECTAMUNDO")
  //   } else {
  //     console.log("No sirree Bob.")
  //   }
  // }

  // function setNextQuestion () {
  //   let newIncorrectOne = countryData[Math.floor(Math.random()*countryData.length)];
  //   let newIncorrectTwo = countryData[Math.floor(Math.random()*countryData.length)];
  //   let newIncorrectThree = countryData[Math.floor(Math.random()*countryData.length)];
  //   let newCorrect = countryData[Math.floor(Math.random()*countryData.length)];
  //   setFlagQuizCountry(newRandomCountry)
  // }

  return (
    <div style={{justifyContent: 'center'}}>
      <h1 className='menu-icon'>PopulationQuiz</h1>
      <div>
        <h1>In what continent is ... located?</h1>
      </div>
      <div>
        <button name="Answer1">Africa</button>
        <button name="Answer2">Asia</button>
        <button name="Answer3">Europe</button>
        <button name="Answer4">Oceania</button>
      </div>
      <div>
        <button>Next</button>
      </div>
    </div>
  )
}

export default PopulationQuiz