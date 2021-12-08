function ActiveFlagQuiz ({ flagQuizCountry, incorrectFlagOne, incorrectFlagTwo, incorrectFlagThree, handleFlagAnswer, setNextFlagQuestion}) {
  
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
  let list = document.getElementById("flag-quiz-buttons");
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

  function flagOnClick () {
    randomizeList();
    setNextFlagQuestion()
  }

  return (
  <div className='quiz-tv'>
     <h1 className='menu-icon'>FlagQuiz</h1>
      <div>
        <img src={flagQuizCountry.flags.png} />
        <h1>Which country's flag is this?</h1>
      </div>
      <div>
        <ul id='flag-quiz-buttons'>
          <li>
              <button 
                name="flagAnswer1" 
                value={flagQuizCountry.name.common}
                onClick={handleFlagAnswer}
              > {flagQuizCountry.name.common} </button>
          </li>
          <li>
              <button 
                name="flagAnswer2"
                value={incorrectFlagOne.name.common}
                onClick={handleFlagAnswer}
                > {incorrectFlagOne.name.common} </button>
          </li>
          <li>
              <button 
              name="flagAnswer3"
              value={incorrectFlagTwo.name.common}
              onClick={handleFlagAnswer}
              > {incorrectFlagTwo.name.common} </button>
          </li>
          <li>
              <button 
                name="flagAnswer4"
                value={incorrectFlagThree.name.common}
                onClick={handleFlagAnswer}
                > {incorrectFlagThree.name.common} </button>
          </li>
        </ul>
      </div>
    <div>
      <button onClick={flagOnClick}>Next</button>
    </div>
  </div>
)
}

export default ActiveFlagQuiz