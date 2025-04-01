import React, { useEffect } from 'react'
import {useState} from "react"
import SettComp from './SettComp.jsx'

function Navbar({set , userProfile}) {
  const [ showSettings , setShowSettings ] = useState(false)
  const pp = userProfile?.profile_picture
  return (
    <div className="navbar flex">
        <div className="nav-profile-image profile-pic" onClick={() => set((prev) => (prev) ? false : true)}>
          <img className='profile-picture-user-left' src={`/${pp}`}></img>
        </div>
        <div className="search-bar-home flex">
        <i className="fa-solid fa-search"></i>
        <input type="text" className="searchInput" placeholder='Search' />
        </div>
        <div className="settings" onClick={() => setShowSettings( (prev) => prev ? false : true ) }>
          <i className="fa-solid fa-bars"></i>
        </div>
        { < SettComp show={showSettings} setShow={setShowSettings} /> }
    </div>
  )
}

export default Navbar
