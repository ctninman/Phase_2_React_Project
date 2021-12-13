function ActivePopulationQuiz ({ orderedCountriesArray, handlePopulationAnswer, setNextPopulationQuestion, populationQuizScore, currentPopulationQuestion}) {
  
  function randomizeItems(items)
  {
      let cached = items.slice(0), temp, i = cached.length, rand;
      while(--i)
      {
          rand = Math.floor(i * Math.random());
          temp = cached[rand];
          cached[rand] = cached[i];
          cached[i] = temp;
      }
      return cached;
  }
  function randomizeList()
  {
  let list = document.getElementById("population-quiz-buttons");
      let nodes = list.children, i = 0;
      nodes = Array.prototype.slice.call(nodes);
      nodes = randomizeItems(nodes);
      while(i < nodes.length)
      {
          list.appendChild(nodes[i]);
          ++i;
      }
  list.style.display="block";
  }

  function populationOnClick () {
    randomizeList();
    setNextPopulationQuestion()
  }

  return (
  <div className='quiz-tv' id="population-quiz-tv">
     <h1 className='menu-icon'>Population Quiz  Question: {currentPopulationQuestion}/25   Score:{populationQuizScore}</h1>
    <div>
      <h1 className='tab-header' style={{backgroundColor: 'black', color: 'white', marginLeft: '100px', marginRight: '100px'}}>Which of these countries has the highest population?</h1>
    </div>
    <div>
      <ul id='population-quiz-buttons' style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <li>
          <button 
            name="populationAnswer1" 
            id='correct-answer'
            className={'population-button'}
            value={orderedCountriesArray[0].name.common}
            onClick={handlePopulationAnswer}
          > {orderedCountriesArray[0].name.common} </button>
        </li>
        <li>
          <button 
            name="populationAnswer2"
            className={'population-button'}
            value={orderedCountriesArray[1].name.common}
            onClick={handlePopulationAnswer}
            > {orderedCountriesArray[1].name.common} </button>
        </li>
        <li>
          <button 
          name="populationAnswer3"
          className={'population-button'}
          value={orderedCountriesArray[2].name.common}
          onClick={handlePopulationAnswer}
          > {orderedCountriesArray[2].name.common} </button>
        </li>
        <li>
          <button 
            name="populationAnswer4"
            className={'population-button'}
            value={orderedCountriesArray[3].name.common}
            onClick={handlePopulationAnswer}
            > {orderedCountriesArray[3].name.common}</button>
        </li>
      </ul>
    </div>
    <div>
      <button onClick={populationOnClick}>Next</button>
    </div>
  </div>
)
}

export default ActivePopulationQuiz