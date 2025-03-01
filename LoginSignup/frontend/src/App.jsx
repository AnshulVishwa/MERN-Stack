import { useState } from 'react'
import './App.css'

function App() {
  const [ username , setUsername ] = useState("")
  const [ password , setPassword ] = useState("")
  const [ type , setType ] = useState("text")
  const [ eyes , setEyes ] = useState("")
  return (
    <>
      <form>
        <div className="username">
          <label>Username</label>
          <input 
            type="text" 
            name='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}  
          />
        </div>
        <div className="password">
          <label>Password</label>
          <input 
            type={type} 
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}  
          />
        </div>
      </form>
    </>
  )
}

export default App
