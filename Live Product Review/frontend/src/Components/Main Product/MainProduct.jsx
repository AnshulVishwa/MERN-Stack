import React, { useEffect } from 'react'
import "./MainProduct.css"
import ContentDiv from './ContentDiv'

function MainProduct() {
  return (
    <div className="mainProductDiv flex">
      <div className="navbar-MainP flex">
        Product Details
      </div>
      <ContentDiv />
      <footer className="FooterMainP">
        <h3>4.5 Rating Product</h3>
        <i className='fa-solid fa-chevron-down'></i>
      </footer>
    </div>
  )
}

export default MainProduct
