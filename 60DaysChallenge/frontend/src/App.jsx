import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
import Msgs from './Components/Msgs'

function App() {
  const [data, setData] = useState([])
  const [day, setDay] = useState(1)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:5000")
        const result = res.data?.result || []
        setData(result)
      } catch (err) {
        console.error("Error fetching data:", err)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    setDay(data.length === 0 ? 1 : data.length + 1)
  }, [data])

  return (
    <>
      <h2 className='flex'>Day {day}</h2>
      <Msgs day={day} />
    </>
  )
}

export default App
