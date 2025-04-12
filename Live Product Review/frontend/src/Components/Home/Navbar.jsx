import React from 'react'
import "./Home.css"

function Navbar() {
  return (
    <nav className='flex nav'>
        <div className="optionsHome flex">
            <div>Home</div>
            <div>Product Reviews</div>
            <div>About us</div>
            <div>Help</div>
            <div>Login</div>
        </div>
        <div className="borderHome"></div>
    </nav>
  )
}

export default Navbar
