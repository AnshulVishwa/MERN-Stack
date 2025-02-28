import { useState } from 'react'
import './App.css'
import axios from "axios"
function App() {
  const [ username , setUsername ] = useState("")
  const [ id , setID ] = useState("")
  async function CreateUser(e) {
    e.preventDefault();
    const response = await axios.post("http://localhost:5000/user" , {username})
    alert(response.data.msg)
  }
  async function GetUser(){
    const response = await axios.get(`http://localhost:5000/user/?id=${id}`)
    alert(response.data.msg)
  }
  return (
    <>
      <input  
        type='text' 
        name='id' 
        placeholder='Enter ID'
        value={id}
        onChange={(e) => setID(e.target.value)}  
      />
      <button onClick={GetUser}>^</button>
      <form onSubmit={CreateUser}>
        <input 
          type='text' 
          name='username' 
          placeholder='Enter your username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}  
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
