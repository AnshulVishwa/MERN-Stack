import React, { useEffect, useState } from 'react'
import Chat from '../Chat/Chat'
import TextInput from '../TextInput/TextInput'
import { useLocation } from 'react-router-dom'
import RightNavbar from '../Navbar/RightNavbar'
import axios from "axios"

function RightSection() {
    const [ reload , setReload ] = useState("")
    const [ user2Details , setUser2Details ] = useState()
    const path = useLocation()
    const user1name = path.pathname.split("/")[2]
    const user2name = path.pathname.split("/")[3]

    async function getUser2Detail() {
        const result = await axios.get( `http://localhost:5000/ad_info/all/${user2name}` )

        setUser2Details(result.data[0])
    }
    useEffect( () => {
      getUser2Detail()
    } , [user2name] )
  return (
    <>
        <div className='rightChat'>
            <div className="navbarpart2">
              <RightNavbar details={user2Details} />
            </div>

            {/* chat box where chat will appear */}
            <div className="setGetChat">
              <Chat username={user1name} reload={reload} setReload={setReload} user2Name={user2name}/>
            </div>

            {/* input */}
            <div className="chatuTexting">
              <TextInput user1={user1name} user2={user2name} setReload={setReload}/>
            </div>
        </div>
    </>
  )
}

export default RightSection
