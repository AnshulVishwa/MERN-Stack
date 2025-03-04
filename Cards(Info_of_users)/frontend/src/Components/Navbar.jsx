import React from 'react'
import "./Styles/navbar.css"

function Navbar() {
  return (
    <nav className='flex'>
        <div>Home</div>
        <div className="searchBox flex">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input className='searchInput' placeholder='Search'/>
        </div>
        <div>About us</div>
        <div>Update details</div>
    </nav>
  )
}

export default Navbar