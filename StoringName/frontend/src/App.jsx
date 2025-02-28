import { useState } from 'react';
import './App.css'
import axios from "axios"

function App() {
  const [ username , setUsername ] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("http://localhost:5000/submit", {username});
      alert(response.data.message); 
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
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
