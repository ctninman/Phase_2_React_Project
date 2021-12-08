import {useState} from 'react'

function ContinentQuiz ({countryData}) {
  
  let randomCountry = countryData[Math.floor(Math.random()*countryData.length)];

  const [flagQuizCountry, setFlagQuizCountry] = useState(randomCountry)


  function handleAnswer (event) {
    console.log('rando', flagQuizCountry.continents[0], flagQuizCountry.name.common);
    if (event.target.name === flagQuizCountry.continents[0]) {
      console.log("CORRECTAMUNDO")
    } else {
      console.log("No sirree Bob.")
    }
  }

  function setNextQuestion () {
    let newRandomCountry = countryData[Math.floor(Math.random()*countryData.length)];
    setFlagQuizCountry(newRandomCountry)
  }
  
  return (
    <div className='quiz-tv'>
      <h1 className='menu-icon'>ContinentQuiz</h1>
      <div>
        <h1>In what continent is {flagQuizCountry.name.common} located?</h1>
      </div>
      <div>
        <button onClick={handleAnswer} name="Africa">Africa</button>
        <button onClick={handleAnswer} name="Asia">Asia</button>
        <button onClick={handleAnswer} name="Europe">Europe</button>
        <button onClick={handleAnswer} name="Oceania">Oceania</button>
        <button onClick={handleAnswer} name="North America">North America</button>
        <button onClick={handleAnswer} name="South America">South America</button>
      </div>
      <div>
        <button onClick={setNextQuestion}>Next</button>
      </div>
    </div>
  )
}

export default ContinentQuiz