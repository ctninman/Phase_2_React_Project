import {useState} from 'react'

function Flag ({country}) {

  const [ revealFlag, setRevealFlag ] = useState(false)

  return (
    <div 
      onClick={() => setRevealFlag(!revealFlag)} 
      className='flag_card' 
      // style={{display: 'flex',
      // flexDirection: 'row', 
      // flexWrap: 'wrap', 
      // justifyContent: 'center',
      // height: '140px', 
      // width: '210px',
      // alignContent: 'center'}}
      >
      {revealFlag 
        ?  
        <div style ={{display: 'flex', justifyContent: 'center', backgroundColor: 'white', height: '130px', width: '200px', borderRadius: '5px', color: 'darkblue'}}> 
          <h2>{country.name.common} </h2> 
        </div>  
        : 
        <div style={{display: 'flex', justifyContent: 'center'}}> 
          <img style={{border: '2px solid', borderRadius: '3px'}}className='capital_card_flag' src={country.flags.png} alt="Flag"/>
      </div> }
    </div>  
  )
}

export default Flag