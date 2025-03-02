import { useState } from 'react'
import axios from "axios"
import '../App.css'
import React from 'react'
import background from "../images/background.jpg"

function Signup() {
    const [ username , setUsername ] = useState("")
    const [ password , setPassword ] = useState("")
    const [ eyes , setEyes ] = useState(false)

    async function handlePostReqRes(e) {
        e.preventDefault()
        const value = (document.querySelector(".rememberInput").checked == "on") ? true : false
        const response  = await axios.post("/api/user" , {username , password , value})
        alert(response.data.message)     
    }
  return (
    <>
      <img className='background' src={background} alt="" />
      <form onSubmit={handlePostReqRes}>
        <img src={background} className="image" />
        <div className="formContent">

          <h3>Signup</h3>
          <div className="username">
            <span>
              <i className="fa-solid fa-user"/>
            </span>
            <input 
              className='userinput'
              type={"text"} 
              name='username'
              value={username}
              placeholder='Username'
              onChange={(e) => setUsername(e.target.value)}  
            />
          </div>
          <div className="password">
            <span>
              <i
                className={ (eyes) ? "fa-solid fa-lock-open" : "fa-solid fa-lock" } 
                onClick={() => setEyes(!eyes)} 
              />
            </span>
            <input 
              className='passinput'
              type={(eyes) ? "text" : "password"} 
              name='password'
              value={password}
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}  
            />
          </div>
          <div className="rememberMe">
            <div className="input">
              <input 
                type="checkbox"
                name='rememberMe' 
                className='rememberInput' 
              />
              <span>Remember me</span>
            </div>
            <div className="login">
              <span>Login</span>
            </div>
          </div>
          <div className="btn">
            <button>Signup</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Signup