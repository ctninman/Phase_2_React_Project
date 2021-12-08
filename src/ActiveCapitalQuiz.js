function ActiveCapitalQuiz ({ capitalQuizCountry, incorrectOne, incorrectTwo, incorrectThree, handleCapitalAnswer, setNextCapitalQuestion}) {
  
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
    <div className='quiz-tv'>
       <h1 className='menu-icon'>CapitalQuiz</h1>
      <div>
        <h1>{capitalQuizCountry.capital[0]} is the capital of which country?</h1>
      </div>
      <div>
        <ul id='capital-quiz-buttons'>
          <li>
            <button 
              name="Answer1" 
              value={capitalQuizCountry.name.common}
              onClick={handleCapitalAnswer}
            > {capitalQuizCountry.name.common} </button>
          </li>
          <li>
            <button 
              name="Answer2"
              value={incorrectOne.name.common}
              onClick={handleCapitalAnswer}
            > {incorrectOne.name.common} </button>
          </li>
          <li>
            <button 
            name="Answer3"
            value={incorrectTwo.name.common}
            onClick={handleCapitalAnswer}
          > {incorrectTwo.name.common} </button>
          </li>
          <li>
            <button 
              name="Answer4"
              value={incorrectThree.name.common}
              onClick={handleCapitalAnswer}
            > {incorrectThree.name.common} </button>
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