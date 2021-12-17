import {useEffect} from 'react'

function Home () {

  useEffect (() => {
    document.title = "WORLD QUIZ World"
  }, [] )

  return (
    <div>
      <div>
        <h1 className='tab-header'>Welcome to WORLD QUIZ WORLD!</h1>
      </div>
      <div>
        <div>
          <h1>🇦🇬🇰🇪🇸🇬🇪🇨🇳🇷🇧🇩🇳🇱🇲🇦🇳🇵🇹🇳🇨🇺🇦🇿🇨🇾🇦🇷🇻🇺🇩🇯🇿🇼🇨🇳🇳🇮🇬🇷🇬🇩🇺🇸🇧🇪</h1>
        </div>
        <div className='quiz-tv' style={{marginLeft: '15%', marginRight: '15%'}} >
          <h1>🇳🇴 Explore and learn the flags, capitals, 🇹🇬<br/> continents, and population<br/>of all the countries of the world.</h1>
          <h2>🇵🇭 Do you have what it takes 🇪🇸<br/> to reach 100 ⭐ in the quiz section?</h2>
          <h3>Create or enter your username to keep track of your high scores</h3>
        </div>
           <div>
          <h1>🇧🇪🇺🇸🇬🇩🇬🇷🇳🇮🇨🇳🇿🇼🇩🇯🇻🇺🇦🇷🇨🇾🇦🇿🇨🇺🇹🇳🇳🇵🇲🇦🇳🇱🇧🇩🇳🇷🇪🇨🇸🇬🇰🇪🇦🇬</h1>
        </div>
      </div>
      <footer style={{textAlign: 'left', color: 'white', paddingLeft: '10px', paddingBottom: '10px', paddingTop: '20px'}}>
          Background photo by <a style={{color: 'lightgray'}}href={'https://unsplash.com/@marjan_blan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'}>Marjan Blan | @marjanblan</a> on <a style={{color: 'lightgray'}} href={"https://unsplash.com/s/photos/world-map?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}>Unsplash</a>
        </footer>
    </div>
  )
}

export default Home