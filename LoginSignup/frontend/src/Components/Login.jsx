import { useState } from 'react'
import axios from "axios"
import '../App.css'
import React from 'react'
import background from "../images/background.jpg"

function Login() {
    const [ username , setUsername ] = useState("")
    const [ password , setPassword ] = useState("")
    const [ eyes , setEyes ] = useState(false)

    async function handlePostReqRes(e) {
        e.preventDefault()
        const response = await axios.get(`/api/user/`, {
            params: {
              username: username,
              password: password
            }
          });
          
        alert(response.data.message)     
    }
  return (
    <>
      <img className='background' src={background} alt="" />
      <form onSubmit={handlePostReqRes}>
        <img src={background} className="image" />
        <div className="formContent">

          <h3>Login</h3>
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
              <span>Signup</span>
            </div>
          </div>
          <div className="btn">
            <button>Login</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Login