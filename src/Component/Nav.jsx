import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  
  return (
        <div>
          <div className='nav'>
         <nav>
         <NavLink  to ="/">Home</NavLink>
          <NavLink  to="/Movies" >Movies</NavLink>
          <NavLink  to="/Food">Food</NavLink>
          <NavLink  to="/Technology">Technology</NavLink>
          <NavLink  to="/Tourism">Tourism</NavLink>
          <NavLink  to="/Fitness">Fitness</NavLink>
          
         </nav>
        </div>
        <hr/>
        </div>
        
  )
}

export default Nav