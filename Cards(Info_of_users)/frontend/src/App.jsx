import './App.css'
import logo from "./assets/logo.png"

function App() {
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
    </>
  )
}

export default App
