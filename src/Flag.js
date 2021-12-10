import {useState} from 'react'

function Flag ({country}) {

  const [ revealFlag, setRevealFlag ] = useState(false)

  return (
    <div onClick={() => setRevealFlag(!revealFlag)} className='flag_card'>
      {revealFlag 
        ?  
        <div> 
          <h2>{country.name.common} </h2> 
        </div>  
        : 
        <div> 
          <img className='capital_card_flag' src={country.flags.png} alt="Flag"/>
      </div> }
    </div>  
  )
}

export default Flag