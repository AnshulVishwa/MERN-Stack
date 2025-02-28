import { useEffect } from 'react'
import './App.css'
import axios from "axios"
function App() {
  async function GetRequest() {
    const response = await axios.get("http://localhost:5000")
    alert(response.data.msg + " -> Status " + response.status )
    
  }
  useEffect( () => {
    GetRequest()
  } )
  return (
    <>
      
    </>
  )
}

export default App
