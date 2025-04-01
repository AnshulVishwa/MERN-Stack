import React from 'react'

function RightNavbar({details}) {
  return (
    <div className="right-nav-div flex" >
        <div className="right-nav-profile flex right-nav-h-w">
          <div className='rnav-image profile-pic'>
            <img src={`/${details?.profile_picture}`}/>
          </div>
          <div className="rnav-username flex">
            <p className="username-text">{details?.username}</p>
          </div>
        </div>
        
        <div className="right-nav-setting flex right-nav-h-w">
          <div className="rnav-search-icon flex"><i className="fa-solid fa-magnifying-glass"></i></div>
          <div className="rnav-3dot-icon flex"><i className="fa-solid fa-ellipsis-vertical"></i></div>
        </div>
    </div>
  )
}

export default RightNavbar
