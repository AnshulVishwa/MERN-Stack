import { useEffect, useState } from 'react'
import './App.css'
import logo from "./assets/logo.png"
import FormSubmition from './Service/authentication'
import axios from "axios"

function App() {

  function handleSubmit(e){
    e.preventDefault()
    alert(FormSubmition(info))
    const response = axios.post( "localhost:5000/info" , { info } )
    (response.data.status == "OK")
  }

  const content = [ "Name" , "Date of Birth" , "Age" , "Gender" , "Profession" , "About Yourself" ]
  const [ info , setInfo ] = useState( {
    name: "",
    dob : "",
    age : "",
    gender : "",
    profession : "",
    description : ""
  } )
  const fieldKeys = [ "name" , "dob" , "age" , "gender" , "profession" , "description" ]
  useEffect( () => {
    const newValue = info.dob.replace(" " , "/")
    return setInfo( (prev) => ({ ...prev , dob:newValue }) )
  } , [info.dob] )
  return (
    <>
      <section className="section1 flex">
        <div className="logo-content flex">
          <h1>Welcome to</h1>
          <div className="logo flex">
            <img className='logo-img' src={logo}/>
            <span className='textLogo'>Cardox</span>
          </div>
          <span>Where we store information of our users, we definitely keep a check on our user's privacy and keep their trust.</span>
        </div>
      </section>
      <section className="section2 flex">
        <form onSubmit={handleSubmit} className="innerDiv flex">
          <h1>Your Information</h1>
          <main>
            {
              content.map( ( v , i ) => (
                <div key={i} className={`${v.replaceAll(" " , "")} content`}>
                  <label>{v} :</label>
                  <input
                    className='textBox'
                    value={ info[fieldKeys[i]] }
                    required={true}
                    onChange={(e) => setInfo( (prev) => ({ ...prev , [fieldKeys[i]]:e.target.value }) )} 
                  />
                </div>
              ) )
            }
          </main>
          <div className="sumbitBtn">
            <button type='submit'>Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default App
