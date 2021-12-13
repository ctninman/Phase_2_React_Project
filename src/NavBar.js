import { useEffect } from 'react';
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

function NavBar({ userName, fullUserObject, setUserName, setFullUserObject}) {

  let enteredUserName;

  function enterUserName () {
    enteredUserName = document.getElementById("username_input").value
    document.querySelector("#username_input").value = ""
    document.querySelector("#username_input").placeholder = "Enter Name"
    setUserName(enteredUserName)
  }

  useEffect(() => {
    fetchUserData()
  }, [userName] )

  // useEffect(() => {
  //   if (fullUserObject.userName && fullUserObject.userName !== '') {
  //     postUserData(fullUserObject)
  //   }
  // }, [fullUserObject])



  function postUserData (object) {  
    if (fullUserObject.userName && fullUserObject.userName !== '')
      fetch(`http://localhost:3000/users`, {
        method: "POST",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify(object),
      })
        .then((res) => res.json())
        .then(fullUserObject => console.log(fullUserObject));
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
          setFullUserObject({...foundUser})
          
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
          setFullUserObject(newUserObject)
        }
      })
    }
  }

  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <div>
      <NavLink
        to='/'
        exact
        style={linkStyles}
        activeStyle={{background: "#93C572"}}
      >
        Home
      </NavLink>
      <NavLink
        to='/countries'
        exact
        style={linkStyles}
        activeStyle={{background: "#93C572"}}
      >
        Countries
      </NavLink>
      <NavLink
        to='/capitals'
        exact
        style={linkStyles}
        activeStyle={{background: "#93C572"}}
      >
        Capitals
      </NavLink>
      <NavLink
        to='/continents'
        exact
        style={linkStyles}
        activeStyle={{background: "#93C572"}}
      >
        Continents
      </NavLink>
      <NavLink
        to='/flags'
        exact
        style={linkStyles}
        activeStyle={{background: "#93C572"}}
      >
        Flags
      </NavLink>
      <NavLink
        to='/population'
        exact
        style={linkStyles}
        activeStyle={{background: "#93C572"}}
      >
        Population
      </NavLink>
      <NavLink
        to='/quizzes'
        exact
        style={linkStyles}
        activeStyle={{background: "#93C572"}}
      >
        Quizzes
      </NavLink>
      </div>
      <div>
          <input id='username_input' type='text' placeholder='Enter Name'></input>
          <button type='button' onClick={enterUserName} >Enter</button>
        <h5 style={{margin: 0}}>{userName === '' ? null : `${userName}, World explorer rating: `}</h5>
      </div>
    </div>
  )
}

export default NavBar


// function postUserData () {
//   fetch(`http://localhost:3000/users`, {
//     method: "POST",
//     headers: {"Content-Type": "application/json",},
//     body: JSON.stringify(fullUserObject),
//   })
//     .then((res) => res.json())
//     .then(fullUserObject => console.log(fullUserObject));
// }

// function fetchUserData () {
//   return fetch(`http://localhost:3000/users`, {method: 'GET'})
//   .then(res => res.json())
//   .then(function (userData) {
//     let foundUser = userData.find((user) => {
//       return userName === user.userName
//     })
//     if (foundUser) {
//       setFullUserObject({...foundUser})
//     } else {
//       let newUserObject = {
//         "userName": userName,
//         "flagsHighScore": 0,
//         "populationHighScore": 0,
//         "continentsHighScore": 0,
//         "capitalsHighScore": 0
//       }
//       setFullUserObject(newUserObject)
//       postUserData(newUserObject)
//     }
//   })
// }
