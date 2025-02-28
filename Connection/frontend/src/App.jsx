import './App.css'
import { useEffect } from 'react'

function App() {
  useEffect( () => {
    fetch("/api")
    .then( (res) => res.text() )
    .then( ( text ) => console.log(text) )
  } , [] )
  return (
    <>
    </>
  )
}

export default App
