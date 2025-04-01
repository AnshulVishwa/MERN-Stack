import './App.css'
import HomePage from './Components/HomePage/HomePage.jsx'
import { useLocation } from "react-router-dom";

function App() {
  const path = useLocation()
  const name = path.pathname.split("/")[1]
  return (
    <>
      <HomePage username={name} />
    </>
  )
}

export default App
