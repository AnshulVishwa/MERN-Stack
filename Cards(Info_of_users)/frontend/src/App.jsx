import './App.css'
import logo from "./assets/logo.png"

function App() {
  const content = [ "Name" , "Date of Birth" , "Age" , "Gender" , "Profession" , "About Yourself" ]
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
        <div className="innerDiv flex">
          <h1>Your Information</h1>
          <main>
            {
              content.map( ( v , i ) => (
                <div key={i} className={`${v.replaceAll(" " , "")} content`}>
                  <label>{v} :</label>
                  <input className='textBox'></input>
                </div>
              ) )
            }
          </main>
          <div className="sumbitBtn">
            <button>Submit</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
