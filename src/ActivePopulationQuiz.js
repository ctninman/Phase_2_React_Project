function ActivePopulationQuiz ({ orderedCountriesArray, handlePopulationAnswer, setNextPopulationQuestion}) {
  
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
  <div className='quiz-tv'>
     <h1 className='menu-icon'>Population Quiz</h1>
    <div>
      <h1>Which of these countries has the highest population?</h1>
    </div>
    <div>
      <ul id='population-quiz-buttons'>
        <li>
          <button 
            name="populationAnswer1" 
            value={orderedCountriesArray[0].name.common}
            onClick={handlePopulationAnswer}
          > {orderedCountriesArray[0].name.common} {orderedCountriesArray[0].population}</button>
        </li>
        <li>
          <button 
            name="populationAnswer2"
            value={orderedCountriesArray[1].name.common}
            onClick={handlePopulationAnswer}
            > {orderedCountriesArray[1].name.common} {orderedCountriesArray[1].population}</button>
        </li>
        <li>
          <button 
          name="populationAnswer3"
          value={orderedCountriesArray[2].name.common}
          onClick={handlePopulationAnswer}
          > {orderedCountriesArray[2].name.common} {orderedCountriesArray[2].population}</button>
        </li>
        <li>
          <button 
            name="populationAnswer4"
            value={orderedCountriesArray[3].name.common}
            onClick={handlePopulationAnswer}
            > {orderedCountriesArray[3].name.common} {orderedCountriesArray[3].population}</button>
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