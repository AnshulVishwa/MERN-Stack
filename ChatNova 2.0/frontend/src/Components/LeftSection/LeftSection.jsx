import React, { useEffect, useState } from 'react'
import Profile from '../Profile/Profile'
import Navbar from '../Navbar/Navbar'
import UserList from '../UserList/UserList'
import { useLocation } from 'react-router-dom'
import axios from "axios"

function LeftSection({pictures}) {
    const [ showProfile , setShowProfile ] = useState(false)
    const [ moreDetails , setMoreDetails ] = useState()
    const [ userInfo , setUserInfo ] = useState()
    const path = useLocation()
    const username = (path.pathname.split("/")[1] == "chat") ? path.pathname.split("/")[2] : path.pathname.split("/")[1] 
    async function getUserDetails(){
        const moreUserInfo = await axios.get( `http://localhost:5000/ad_info/all/${username}` )
        const more = await axios.get( `http://localhost:5000/user/all/${username}` )
        setMoreDetails(more.data[0])
        setUserInfo(moreUserInfo.data[0])
    }
    useEffect( () => {
        getUserDetails()
    } , [] )
  return (
    <div className='leftList'>
        <Profile pictures={pictures} more={moreDetails} details={userInfo} set={setShowProfile} show={showProfile} />

        {/* left side */}
        
        <Navbar userProfile={userInfo} set={setShowProfile}/>

        {/* button for all unread archieve and blocked users */}
        <div className='SomeBtn flex'>
            <button className="all btnall flex">All</button>
            <button className="Unread btnall flex">Unread</button>
            <button className="archieve btnall flex">Archieve</button>
            <button className="Blocked btnall flex">Blocked</button>
        </div>

        {/* users list on left side */}
        <UserList username={username}/>
    </div>
  )
}

export default LeftSection
