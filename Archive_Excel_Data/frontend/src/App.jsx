import { useState } from 'react'
import './App.css'
import background from "./assets/background.jpg"
import folder from "./assets/folder.png"
import axios from "axios"

function App() {
  const [ filename , setFilename ] = useState()
  function handleSubmitFile( event ){
    try{
      const type = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      const file = event.target.files[0]
      setFilename(file.name)
      if( file.type != type ){
        alert("File type is Invalid")
        setFilename()
        return null
      }
      const reader = new FileReader
      reader.readAsArrayBuffer(file)

      reader.onload = async function (e) {
        const workbook = XLSX.read( e.target.result , { type : "array" } )
        const sheet = workbook.Sheets[workbook.SheetNames[0]]
        const jsonData = XLSX.utils.sheet_to_json(sheet)
        const response = await axios.post( "http://localhost:5000/" , {jsonData} )
        console.log("Response send")
        if( !response ){
          alert("Error")
        }
        else{
          alert(response.data.msg)
        }
      }
    }
    catch(err){ console.log(err) }
    
  }
  return (
    <>
      <img src={background} className='background-image' />
      <main className="mainContent">
        <input onChange={handleSubmitFile} type="file" />
        <img src={folder} className='img' alt="" />
        { <div className='filename'>filename</div> }
        <h1>Drag or Select files </h1>
      </main>
    </>
  )
}

export default App
