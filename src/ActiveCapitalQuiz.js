function ActiveCapitalQuiz ({ capitalQuizCountry, incorrectOne, incorrectTwo, incorrectThree, handleCapitalAnswer, setNextCapitalQuestion, capitalQuizScore, currentCapitalQuestion, captialResponseGiven}) {
  
  function randomizeItems(items) {
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
  function randomizeList() {
    let list = document.getElementById("capital-quiz-buttons");
    let nodes = list.children, i = 0;
    nodes = Array.prototype.slice.call(nodes);
    nodes = randomizeItems(nodes);
    while(i < nodes.length) {
        list.appendChild(nodes[i]);
        ++i;
    }
    list.style.display="block";
  }

  function capitalOnClick () {
    if (captialResponseGiven === true) {
      randomizeList();
      setNextCapitalQuestion()
    }
  }

      // *** JSX *** //
    return (
    <div className='quiz-tv' id="capital-quiz-tv">
      <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
        <h1 className='menu-icon'>Capital Quiz</h1>
        <h1 style={{paddingRight: '25px'}}>Question: {currentCapitalQuestion}/25 {'   '} Score:{capitalQuizScore}</h1>
      </div>
      <div>
        <h1 className='tab-header' style={{backgroundColor: 'black', color: 'white', marginLeft: '50px', marginRight: '50px'}}>{capitalQuizCountry.capital[0]} is the capital of which country?</h1>
      </div>
      <div>
        <ul style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}} id='capital-quiz-buttons'>
          <li>
            <button 
              name="Answer1" 
              id="correct-answer"
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
        <button onClick={capitalOnClick} style={{backgroundColor: '#93C572', color: 'black', borderColor: 'black'}}>Next</button>
      </div>
    </div>
  )
}

export default ActiveCapitalQuiz