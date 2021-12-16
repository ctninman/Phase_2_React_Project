import CapitalCard from "./CapitalCard"
import {useEffect} from "react"

function Capitals ({countries}) {

  useEffect (() => {
    document.title = "WQW - Capitals"
  }, [] )

  return (
    <div style={{marginTop: '-10px'}}>
      <h1 className='tab-header'>Capitals</h1>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
        {countries.map((country) => (
          <CapitalCard 
            key={country.name.common}
            country={country}
            style={{backgroundColor: '#234234'}}
          />
        ))}
      </div>
    </div>
  )
}

export default Capitals