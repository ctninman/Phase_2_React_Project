function ActiveFlagQuiz ({ flagQuizCountry, incorrectFlagOne, incorrectFlagTwo, incorrectFlagThree, handleFlagAnswer, setNextFlagQuestion, flagQuizScore, currentFlagQuestion}) {
  
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
  <div className='quiz-tv' id='flag-quiz-tv'>
    <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
      <h1 className='menu-icon'>FlagQuiz</h1>
      <h1 style={{paddingRight: '25px'}}>Question: {currentFlagQuestion}/25 {'   '} Score:{flagQuizScore}</h1>
    </div>
      <div>
        <div style={{height: '210px'}}>
          <img style={{height: '210px'}} className='flag-image' src={flagQuizCountry.flags.png} alt='Random Flag'/>
        </div>
        <div>
          <h1 className='tab-header' style={{backgroundColor: 'black', color: 'white', marginLeft: '200px', marginRight: '200px'}}>Which country's flag is this?</h1>
        </div>
      </div>
      <div id='flag-quiz-container'>
        <ul style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}} id='flag-quiz-buttons'>
          <li>
              <button 
                name="flagAnswer1" 
                id="correct-answer"
                className={'flag-button'}
                style={{backgroundColor: 'lightgray'}}
                style={{color: 'black'}}
                value={flagQuizCountry.name.common}
                onClick={handleFlagAnswer}
              > {flagQuizCountry.name.common} </button>
          </li>
          <li>
              <button 
                name="flagAnswer2"
                className={'flag-button'}
                style={{backgroundColor: 'lightgray'}}
                style={{color: 'black'}}
                value={incorrectFlagOne.name.common}
                onClick={handleFlagAnswer}
                > {incorrectFlagOne.name.common} </button>
          </li>
          <li>
              <button 
              name="flagAnswer3"
              className={'flag-button'}
              style={{backgroundColor: 'lightgray'}}
              style={{color: 'black'}}
              value={incorrectFlagTwo.name.common}
              onClick={handleFlagAnswer}
              > {incorrectFlagTwo.name.common} </button>
          </li>
          <li>
              <button 
                name="flagAnswer4"
                className={'flag-button'}
                style={{backgroundColor: 'lightgray'}}
                style={{color: 'black'}}
                value={incorrectFlagThree.name.common}
                onClick={handleFlagAnswer}
                > {incorrectFlagThree.name.common} </button>
          </li>
        </ul>
      </div>
    <div>
      <button onClick={flagOnClick} style={{backgroundColor: '#93C572', color: 'white', borderColor: 'black'}}>Next</button>
    </div>
  </div>
)
}

export default ActiveFlagQuiz