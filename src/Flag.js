import {useState} from 'react'

function Flag ({country}) {

  const [ revealFlag, setRevealFlag ] = useState(false)

  return (
    <div onClick={() => setRevealFlag(!revealFlag)} className='flag_card'>
      {revealFlag 
        ?  
        <div style ={{display: 'flex', justifyContent: 'center', height: '130px', width: '200px', borderRadius: '5px', alignItems: 'center'}}>
          <div style={{display: 'flex', justifyContent: 'center', height: '80px', width: '200px', borderRadius: '5px', color: 'white', backgroundColor: 'black', alignItems: 'center', border: '2px solid white'}}> 
            <h2>{country.name.common} </h2> 
          </div>
        </div>  
        : 
        <div style={{display: 'flex', justifyContent: 'center'}}> 
          <img style={{border: '2px solid', borderRadius: '3px'}}className='capital_card_flag' src={country.flags.png} alt="Flag"/>
      </div> }
    </div>  
  )
}

export default Flag