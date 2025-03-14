import { useState } from 'react'
import './App.css'
import Main from './Component/Main'

function App() {

  return (
    <>
      <header className='flex'>
        <h1>Converting data into Excel File</h1>
      </header>
      <main className='flex main'>
        <Main />
      </main>
      <footer></footer>
    </>
  )
}

export default App
