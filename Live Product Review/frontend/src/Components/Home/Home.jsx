import React from 'react'
import Navbar from './Navbar'
import Main from './Main'
import Footer from './Footer'
import "./Home.css"

function Home() {
  return (
    <>
      <div className="homePage">
          <Navbar />
          <Main />
          <Footer />
      </div>
    </>
  )
}

export default Home
