import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import "./Styles/home.css"

function Home() {
  const [allUsers , setAllUsers] = useState()
  async function GetReq() {
    const response = await axios.get( "http://localhost:5000/info" )
    if( response ){
      setAllUsers(response.data.users)
    }
  }
  useEffect( () => {
    GetReq()
    console.log(allUsers)
  } , [] )
  return (
    <>
    <div className="mainDiv flex">
        <header className='flex'>
          <Navbar />
        </header>
        <div className="middleDiv"></div>
    </div>
    </>
  )
}

export default Home