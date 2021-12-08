import {useState} from 'react'
import StartScreen from './StartScreen';
import ActiveContinentQuiz from './ActiveContinentQuiz';

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
    <div>
      {flagQuizCountry === randomCountry 
        ? 
        <StartScreen startQuiz={setNextQuestion}/> 
        : 
        <ActiveContinentQuiz 
          setNextQuestion={setNextQuestion} 
          flagQuizCountry={flagQuizCountry} 
          handleAnswer={handleAnswer}/>
        }
    </div>
  )
}

export default ContinentQuiz