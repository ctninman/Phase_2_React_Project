import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'

const linkStyles = {
  display: "inline-block",
  width: "70px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "#609240",
  textDecoration: "none",
  color: "white",
  borderRadius: '5px'
};

function NavBar({ userName, fullUserObject, setUserName, setFullUserObject, userScore, setUserScore}) {

  const [login, setLogin] = useState('')
  
  let enteredUserName;

  useEffect(() => {
    fetchUserData()
  }, [userName] )

  useEffect(() => {
    setUserScore(fullUserObject.flagsHighScore + fullUserObject.populationHighScore + fullUserObject.continentsHighScore + fullUserObject.capitalsHighScore)
  }, [fullUserObject] )

  function handleLoginType (event) {
    setLogin(event.target.value)
  }

  function enterUserName (event) {
    event.preventDefault()
    document.getElementById('username-form').reset()
    console.log(login)
    setUserName(login)
  }

  function postUserData (object) {  
    if (fullUserObject.userName && fullUserObject.userName !== '')
      fetch(`http://localhost:3000/users`, {
        method: "POST",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify(object),
      })
        .then((res) => {
          return res.json()
        })
        .then(fullUserObject => setFullUserObject(fullUserObject));
  }

  function fetchUserData () {
    if (userName !== '') {
      fetch(`http://localhost:3000/users`, {method: 'GET'})
      .then(res => res.json())
      .then(function (userData) {
          let foundUser = userData.find((user) => {
            return userName === user.userName
          })
      
        if (foundUser) {
          console.log('hereIam', foundUser)
          setFullUserObject(foundUser)
        } else {
          console.log('aintathing')
          let newUserObject = {
            "userName": userName,
            "flagsHighScore": 0,
            "populationHighScore": 0,
            "continentsHighScore": 0,
            "capitalsHighScore": 0
          }
          postUserData(newUserObject)
        }
      })
    }
  }


    // *** JSX *** //
  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <div>
      <NavLink
        to='/'
        exact
        style={linkStyles}
        activeStyle={{background: "#93C572", color: 'black'}}
      >
        Home
      </NavLink>
      <NavLink
        to='/countries'
        exact
        style={linkStyles}
        activeStyle={{background: "#93C572", color: 'black'}}
      >
        Countries
      </NavLink>
      <NavLink
        to='/capitals'
        exact
        style={linkStyles}
        activeStyle={{background: "#93C572", color: 'black'}}
      >
        Capitals
      </NavLink>
      <NavLink
        to='/continents'
        exact
        style={linkStyles}
        activeStyle={{background: "#93C572", color: 'black'}}
      >
        Continents
      </NavLink>
      <NavLink
        to='/flags'
        exact
        style={linkStyles}
        activeStyle={{background: "#93C572", color: 'black'}}
      >
        Flags
      </NavLink>
      <NavLink
        to='/population'
        exact
        style={linkStyles}
        activeStyle={{background: "#93C572", color: 'black'}}
      >
        Population
      </NavLink>
      <NavLink
        to='/quizzes'
        exact
        style={linkStyles}
        activeStyle={{background: "#93C572", color: 'black'}}
      >
        Quizzes
      </NavLink>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
        <h3 
          style={{paddingRight: '5px', 
          verticalAlign: 'top', 
          marginTop: '5px', 
          color: 'black'}}>
          {userName === '' 
        ? 
          null 
        : 
          `${userName}: ${userScore} ⭐`}
        </h3>
         <form 
          onChange={handleLoginType}
          onSubmit={enterUserName}
          value={login}
          id='username-form'>
          <input 
            style={{marginTop: '8px'}} 
            name='username_input'
            type='text' 
            placeholder='Enter name to play!'>
          </input>
          <button
            type='submit'
            value="Enter"
            style={{marginTop: '2px'}} 
            id='login-button'
            text='Enter'>
              Enter
           </button>
        </form>
      </div>
    </div>
  )
}

export default NavBar