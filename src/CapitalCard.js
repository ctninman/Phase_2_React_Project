import { useState } from 'react'

function CapitalCard ({country}) {

  const [ revealCapital, setRevealCapital ] = useState(false)

  return (
    <div onClick={() => setRevealCapital(!revealCapital)} className='capital_card'>

      {revealCapital ?  <div> {country.capital} </div>  : <div> <img className='capital_card_flag' src={country.flags.png} />
      <h3>{country.name.common}</h3>
      </div> }
    </div>  
  )
}

export default CapitalCard