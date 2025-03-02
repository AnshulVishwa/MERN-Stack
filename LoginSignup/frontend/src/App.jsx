import { useState } from 'react'
import background from "./images/background.jpg"
import './App.css'

function App() {
  const [ username , setUsername ] = useState("")
  const [ password , setPassword ] = useState("")
  const [ eyes , setEyes ] = useState(false)
  return (
    <>
      <img className='background' src={background} alt="" />
      <form>
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
              <input type="checkbox" />
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

export default App
