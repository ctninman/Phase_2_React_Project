

function Filter({onSearchText, onSetSearchText}) {

  

  function onLetterChange (event) {
    console.log("eventletter", event.target.value)
  }
  
  function onSearchChange (event) {
    onSetSearchText(event.target.value)
    console.log('osc', event.target.value);
  }

  return (
    <div className="Filter">
      <input type="text" value={onSearchText} name="search" onChange={onSearchChange} placeholder="Search..." />
      <select name="filter" onChange={onLetterChange}>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
      </select>
    </div>
  );
}

export default Filter;