import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
import Msgs from './Components/Msgs'

function App() {
  const [ data , setData ] = useState([])
  const [ day , setDay ] = useState(1)
  useEffect( () => {
    async function fetchData(){
      const result = await axios.get("http://localhost:5000").then( () => {
        ( result.data.result ) ? setData(result.data.result) : ""
      } )
    }
    fetchData()
  } , [] )

  useEffect( () => {
    setDay(( data.length == 0 ) ? 1 : data.length+1) 
  } , [data] )

  return (
    <>
      <h1 className='flex'>Welcome to 60 Days Challenge</h1>
      <h3 className='flex'>Day {day}</h3>
      <Msgs day={day}/>
    </>
  )
}

export default App
