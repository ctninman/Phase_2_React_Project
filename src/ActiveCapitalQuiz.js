function ActiveCapitalQuiz ({ capitalQuizCountry, incorrectOne, incorrectTwo, incorrectThree, handleCapitalAnswer, setNextCapitalQuestion, capitalQuizScore, currentCapitalQuestion}) {
  
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
  let list = document.getElementById("capital-quiz-buttons");
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

  function capitalOnClick () {
    randomizeList();
    setNextCapitalQuestion()
  }

  

    return (
    <div className='quiz-tv' id="capital-quiz-tv">
       <h1 className='menu-icon'>CapitalQuiz Question:{currentCapitalQuestion}/25  Score:{capitalQuizScore}</h1>
      <div>
        <h1>{capitalQuizCountry.capital[0]} is the capital of which country?</h1>
      </div>
      <div>
        <ul id='capital-quiz-buttons'>
          <li>
            <button 
              name="Answer1" 
              className={'capital-button'}
              value={capitalQuizCountry.name.common}
              onClick={handleCapitalAnswer}
            > {capitalQuizCountry.flag} {capitalQuizCountry.name.common} </button>
          </li>
          <li>
            <button 
              name="Answer2"
              className={'capital-button'}
              value={incorrectOne.name.common}
              onClick={handleCapitalAnswer}
            > {incorrectOne.flag} {incorrectOne.name.common} </button>
          </li>
          <li>
            <button 
            name="Answer3"
            className={'capital-button'}
            value={incorrectTwo.name.common}
            onClick={handleCapitalAnswer}
          > {incorrectTwo.flag} {incorrectTwo.name.common} </button>
          </li>
          <li>
            <button 
              name="Answer4"
              className={'capital-button'}
              value={incorrectThree.name.common}
              onClick={handleCapitalAnswer}
            > {incorrectThree.flag} {incorrectThree.name.common} </button>
          </li>
        </ul>
      </div>
      <div>
        <button onClick={capitalOnClick}>Next</button>
      </div>
    </div>
  )
}

export default ActiveCapitalQuiz