import { useState } from 'react'

function CapitalCard ({country}) {

  const [ revealCapital, setRevealCapital ] = useState(false)

  return (
    <div onClick={() => setRevealCapital(!revealCapital)} className='capital_card'>
      {revealCapital 
        ?  
        <div style ={{display: 'flex', justifyContent: 'center', height: '120px', width: '150px', borderRadius: '5px', color: 'darkblue'}}>
          <div style={{backgroundColor: 'black', color: 'white', height: '75px', borderRadius: '5px', width: '150px', wordWrap: 'break-word', alignItems: 'center', border: '2px solid', borderColor: 'white'}}>
            <h3>{country.capital}</h3>
          </div>    
        </div>  
        : 
        <div style={{display: 'inline-block', textAlign: 'center'}}>   
          <img 
            style={{height: '75px', border: '2px solid', borderRadius: '3px', alignSelf: 'center'}}
            className='capital_card_flag' 
            src={country.flags.png} 
            alt='Flag'/>
          <h3 style={{textAlign: 'center', backgroundColor: 'white', padding: '5px', borderRadius: '5px', marginTop: '5px', overflowWrap: 'anywhere', border: '2px solid'}}>{country.name.common}</h3>
        </div> 
      }
    </div>  
  )
}

export default CapitalCard