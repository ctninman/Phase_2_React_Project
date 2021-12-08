import { NavLink } from 'react-router-dom'

const linkStyles = {
  display: "inline-block",
  width: "70px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavLink
        to='/'
        exact
        style={linkStyles}
        activeStyle={{background: 'darkblue'}}
      >
        Home
      </NavLink>
      <NavLink
        to='/countries'
        exact
        style={linkStyles}
        activeStyle={{background: 'darkblue'}}
      >
        Countries
      </NavLink>
      <NavLink
        to='/capitals'
        exact
        style={linkStyles}
        activeStyle={{background: 'darkblue'}}
      >
        Capitals
      </NavLink>
      <NavLink
        to='/continents'
        exact
        style={linkStyles}
        activeStyle={{background: 'darkblue'}}
      >
        Continents
      </NavLink>
      <NavLink
        to='/flags'
        exact
        style={linkStyles}
        activeStyle={{background: 'darkblue'}}
      >
        Flags
      </NavLink>
      <NavLink
        to='/population'
        exact
        style={linkStyles}
        activeStyle={{background: 'darkblue'}}
      >
        Population
      </NavLink>
      <NavLink
        to='/quizzes'
        exact
        style={linkStyles}
        activeStyle={{background: 'darkblue'}}
      >
        Quizzes
      </NavLink>
    </div>
  )
}

export default NavBar