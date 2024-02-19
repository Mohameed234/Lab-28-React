import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Nav.css"
function Nav() {
  return (
    <nav>
        <NavLink to="/home" >Home</NavLink>
        <NavLink to="/products">Products</NavLink>
   
    </nav>
  )
}

export default Nav