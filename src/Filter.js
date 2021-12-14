function Filter({onSearchText, onSetSearchText}) {

  function onLetterChange (event) {
    onSetSearchText(event.target.value)
  }
  
  function onSearchChange (event) {
    onSetSearchText(event.target.value)
  }

    // *** JSX *** //
  return (
    <div className="Filter">
      <div>
        <input type="text" value={onSearchText} name="search" onChange={onSearchChange} placeholder="Search..." />
      </div>
      <div id='letter-filter' style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', margin: '5px'}}>
        <button onClick={onLetterChange} value="" style={{width: '35px'}}>All</button>
        <button onClick={onLetterChange} value="a">A</button>
        <button onClick={onLetterChange} value="b">B</button>
        <button onClick={onLetterChange} value="c">C</button>
        <button onClick={onLetterChange} value="d">D</button>
        <button onClick={onLetterChange} value="e">E</button>
        <button onClick={onLetterChange} value="f">F</button>
        <button onClick={onLetterChange} value="g">G</button>
        <button onClick={onLetterChange} value="h">H</button>
        <button onClick={onLetterChange} value="i">I</button>
        <button onClick={onLetterChange} value="j">J</button>
        <button onClick={onLetterChange} value="k">K</button>
        <button onClick={onLetterChange} value="l">L</button>
        <button onClick={onLetterChange} value="m">M</button>
        <button onClick={onLetterChange} value="n">N</button>
        <button onClick={onLetterChange} value="o">O</button>
        <button onClick={onLetterChange} value="p">P</button>
        <button onClick={onLetterChange} value="q">Q</button>
        <button onClick={onLetterChange} value="r">R</button>
        <button onClick={onLetterChange} value="s">S</button>
        <button onClick={onLetterChange} value="t">T</button>
        <button onClick={onLetterChange} value="u">U</button>
        <button onClick={onLetterChange} value="v">V</button>
        <button onClick={onLetterChange} value="w">W</button>
        <button onClick={onLetterChange} value="x">X</button>
        <button onClick={onLetterChange} value="y">Y</button>
        <button onClick={onLetterChange} value="z">Z</button>
      </div>
    </div>
  );
}

export default Filter;