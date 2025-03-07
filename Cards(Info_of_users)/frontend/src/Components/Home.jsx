import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import "./Styles/home.css"
import back_image from "../assets/home.jpg"

function Home() {
  const [allUsers , setAllUsers] = useState()
  const [users , setUsers] = useState()

  async function GetReq() {
    const response = await axios.get( "http://localhost:5000/info" )
    if( response ){
      console.log(response.data.users)
      setAllUsers(response.data.users)
      setUsers(() => response.data.users.filter( (v , i) => ( i < 6 ) ))
        console.log(users)
    }
  }

  useEffect( () => {
    GetReq()
  } , [] )
  return (
    <>
    <div className="mainDiv flex">
        <img src={back_image} />
        <header className='flex'>
          <Navbar />
        </header>
        <div className="middleDiv flex">
          {
            users?.map( (v , i) => (
              <div className="card flex">
                <div className="cardContent flex">
                  <span className="heading cardInfo">{v.username}</span>
                  <span className="age cardInfo">{v.age}</span>
                  <span className="profession cardInfo">{v.profession}</span>
                </div>
              </div>
             ) )
          }
        </div>
    </div>
    </>
  )
}

export default Home